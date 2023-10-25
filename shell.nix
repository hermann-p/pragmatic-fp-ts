{ pkgs ? import <nixpkgs> { } }:

with pkgs;

let root = builtins.toString ./.;
in mkShell {
  buildInputs = [ nodejs-18_x ];
  shellHook = ''
    export PATH=${root}/node_modules/.bin:$PATH
  '';
}
