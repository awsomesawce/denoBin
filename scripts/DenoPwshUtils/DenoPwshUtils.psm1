function Print-Deno {
    <#.SYNOPSIS
    Print deno objects to stdout
    #>
    [cmdletbinding()]
    param(
        [Parameter()]
        [switch]
        $s, # NotImplemented
        [Parameter(HelpMessage="List of deno objects/functions to print.", ValueFromRemainingArguments)]
        [string[]]
        ${objnames}
    )
    if ($s) { write-error "Not implemented yet" -Category NotImplemented ; throw [System.NotImplementedException]::new() }
    foreach ($o in $objnames) {
        deno eval -p "${o}.toString()"
    }
}

function Get-DenoDoc {
    <#
    .SYNOPSIS
    `deno doc` shortcut
    #>
    [CmdletBinding()]
    param (
        [Parameter()]
        [string]
        $Term,
        [Parameter(Mandatory=$false)]
        [string]
        [ValidateSet("archive", "assert", "async", "bytes", "collections", 
        "console", "crypto", "csv", "datetime", "dotenv", "encoding", 
        "flags", "fmt", "front_matter", "fs", "html", "http", "io", 
        "json", "jsonc", "log", "media_types", "msgpack", "path", "permissions", 
        "regexp", "semver", "signal", "streams", "testing", "toml", "ulid", 
        "url", "uuid", "wasi", "yaml")]
        $ModuleName,
        [Parameter()]
        [switch]
        $Page
    )
    $Url = "https://deno.land/std@0.204.0/"
    if (!($null -eq $ModuleName)) {
        if ($Page) {
            deno doc "${Url}$ModuleName/mod.ts" | less -r
        }
        return deno doc "${Url}$ModuleName/mod.ts"
    }

}


Export-ModuleMember -Function @("Print-Deno", "Get-DenoDoc")