$courseRoot = Split-Path $PSScriptRoot -Parent
$paths = @(
'interface/window_system/introduction.html',
'editors/3dview/navigate/projections.html',
'scene_layout/object/editing/transform/introduction.html',
'editors/3dview/controls/orientation.html',
'scene_layout/object/editing/transform/scale.html',
'modeling/meshes/introduction.html',
'modeling/meshes/structure.html',
'modeling/meshes/editing/mesh/extrude.html',
'modeling/meshes/editing/face/inset_faces.html',
'modeling/modifiers/generate/mirror.html',
'modeling/modifiers/generate/booleans.html',
'modeling/modifiers/generate/bevel.html',
'modeling/meshes/editing/edge/bevel.html',
'modeling/curves/introduction.html',
'modeling/curves/properties/geometry.html',
'modeling/modifiers/generate/subdivision_surface.html',
'modeling/meshes/uv/unwrapping/introduction.html',
'modeling/meshes/uv/unwrapping/seams.html',
'render/shader_nodes/textures/image.html',
'render/shader_nodes/shader/principled.html',
'render/shader_nodes/vector/bump.html',
'render/shader_nodes/vector/normal_map.html',
'render/cameras.html',
'render/lights/light_object.html',
'render/cycles/render_settings/sampling.html',
'render/cycles/render_settings/light_paths.html',
'render/color_management.html',
'compositing/introduction.html',
'compositing/types/color/mix/alpha_over.html',
'render/layers/passes.html',
'render/cycles/object_settings/object_data.html',
'render/output/properties/output.html',
'files/blend/packed_data.html',
'files/blend/save_load.html',
'render/cycles/introduction.html'
)
$results = foreach ($path in $paths) {
 $url = "https://docs.blender.org/manual/en/4.5/$path"
 try {
  $response = Invoke-WebRequest -Uri $url -TimeoutSec 20
  $title = [System.Net.WebUtility]::HtmlDecode([regex]::Match($response.Content,'<title>(.*?)</title>').Groups[1].Value)
  $main = [regex]::Match($response.Content,'(?s)<section[^>]*>(.*?)</section>').Groups[1].Value
  $paragraph = [regex]::Match($main,'(?s)<p>(.*?)</p>').Groups[1].Value
  $clean = [System.Net.WebUtility]::HtmlDecode([regex]::Replace($paragraph,'<[^>]+>','')) -replace '\s+',' '
  $quote = (($clean.Trim() -split ' ') | Select-Object -First 10) -join ' '
  [PSCustomObject]@{path=$path;url=$url;status=[int]$response.StatusCode;title=$title;quote=$quote;checked='2026-10-05';publication_year=$null}
 } catch { [PSCustomObject]@{path=$path;url=$url;status=0;title='';quote='';checked='2026-10-05';error=$_.Exception.Message} }
}
$results | ConvertTo-Json -Depth 5 | Set-Content (Join-Path $PSScriptRoot 'referencias_verificadas.json') -Encoding utf8
$results | Select-Object path,status,title | ConvertTo-Json

