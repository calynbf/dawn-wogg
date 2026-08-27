#!/usr/bin/env bash
set -euo pipefail

repository_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
theme_dir="$repository_dir/themes/dawn"
bundled_bin="/home/carlos/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/fallback"
bundled_node_bin="/home/carlos/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin"

if command -v shopify >/dev/null 2>&1; then
  shopify_cmd=(shopify)
elif [[ -x "$bundled_bin/pnpm" && -x "$bundled_node_bin/node" ]]; then
  export PATH="$bundled_node_bin:$bundled_bin:/usr/bin:/bin"
  shopify_cmd=(pnpm dlx @shopify/cli@latest)
else
  echo "No se encontró Shopify CLI ni el runtime incluido de Codex." >&2
  exit 1
fi

if [[ -z "${SHOPIFY_CLI_THEME_TOKEN:-}" ]]; then
  read -r -s -p "Contraseña de Theme Access: " SHOPIFY_CLI_THEME_TOKEN
  echo
  export SHOPIFY_CLI_THEME_TOKEN
fi

mkdir -p "$theme_dir"
cd "$theme_dir"

case "${1:-list}" in
  list)
    "${shopify_cmd[@]}" theme list --environment default
    ;;
  pull)
    "${shopify_cmd[@]}" theme pull --environment default
    ;;
  dev)
    "${shopify_cmd[@]}" theme dev --environment default
    ;;
  push)
    "${shopify_cmd[@]}" theme push --environment default
    ;;
  *)
    echo "Uso: $0 {list|pull|dev|push}" >&2
    exit 2
    ;;
esac

unset SHOPIFY_CLI_THEME_TOKEN
