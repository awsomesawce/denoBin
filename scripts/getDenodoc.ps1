
<#
.DESCRIPTION
Shortcut for deno doc for looking up stuff from urls
#>
[CmdletBinding()]
param(
[Parameter(HelpMessage="Name of deno std module")]
[ValidateNotNullOrEmpty()]
[string]$StdlibModule,
[switch]
$Page
)
$dt = [uri]::new('https://deno.land/std')
if ($Page) {
deno doc "${dt}/$StdlibModule/mod.ts" | less -r
} else {
deno doc "${dt}/$StdlibModule/mod.ts"
}

