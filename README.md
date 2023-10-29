# denoBin

**denoBin** is an attempt to try cross-platform scripting and filesystem manipulation using **Deno**'s API
and [Standard Library](https://deno.land/std)

The stdlib provides most everything you would expect in a stdlib.

## How I Initialized Deno Proj

To initialize this project as a Deno project, I used a few commands:

1. `deno init`
2. Add `./README.md`
3. Initialized completion for the `deno` binary by calling `deno completions <shell_name>`.
_I use `pwsh` so my command was `deno completions powershell | Out-File "./_deno.ps1" -encoding utf8`
4. `gitignore deno >> .gitignore`
This command fetches a deno gitignore template and dumps it in the `./.gitignore` file.
_Installable thru `scoop install gitignore`_

## GOALS

- [ ] Get more familiar with **Deno** stdlib.
- [ ] Incorporate the [Cliffy](https://cliffy.io) module for CLI creation

## Interesting Deno Modules

_Check [deno.land/x](https://deno.land/x) for a rundown of the most popular Deno Third-Party Modules_

- [Markdown](https://deno.land/x/markdown@v2.0.0)  This module relies on an outdated version of Deno

- [Oak](https://deno.land/x/oak@v12.6.1)

- [Cliffy](https://deno.land/x/cliffy@v1.0.0-rc.3)
Also check out its GitHub page [here](https://github.com/c4spar/deno-cliffy)

- [rimbu](https://nest.land/package/rimbu)
Immutable collections for Typescript.

## Other Useful Links

- [typescript](https://typescriptlang.org)
- [deno docs](https://deno.land)

_See [IDEAS](./IDEAS.md) for library ideas.