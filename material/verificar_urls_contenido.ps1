$courseRoot=Split-Path $PSScriptRoot -Parent
$files=Get-ChildItem (Join-Path $courseRoot 'modulos') -Recurse -Filter '*_contenido.md'
$urls=@()
foreach($file in $files){$content=Get-Content $file.FullName -Raw; $urls+=([regex]::Matches($content,'https://[^\s)]+')|ForEach-Object {$_.Value})}
$urls=$urls|Sort-Object -Unique
$results=foreach($url in $urls){
 try{$response=Invoke-WebRequest $url -TimeoutSec 20; $title=[System.Net.WebUtility]::HtmlDecode([regex]::Match($response.Content,'<title>(.*?)</title>').Groups[1].Value);[PSCustomObject]@{url=$url;status=[int]$response.StatusCode;title=$title;checked='2026-10-05';valid=([int]$response.StatusCode -eq 200 -and $title.Length -gt 0)}}
 catch{[PSCustomObject]@{url=$url;status=0;title='';checked='2026-10-05';valid=$false;error=$_.Exception.Message}}
}
$report=[PSCustomObject]@{content_files=$files.Count;unique_urls=$urls.Count;valid_urls=($results|Where-Object valid).Count;results=$results}
$report|ConvertTo-Json -Depth 5|Set-Content (Join-Path $PSScriptRoot 'verificacion_urls_contenido.json') -Encoding utf8
$report|ConvertTo-Json -Depth 5
