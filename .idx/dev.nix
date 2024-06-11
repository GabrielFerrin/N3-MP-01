{pkgs}: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs_20
  ];
  idx.extensions = [
    "adpyke.codesnap"
    "albert.TabOut"
    "anteprimorac.html-end-tag-labels"
    "Codeium.codeium"
    "dsznajder.es7-react-js-snippets"
    "eamodio.gitlens"
    "formulahendry.auto-rename-tag"
  ];
  idx.previews = {
    previews = {
      web = {
        command = [
          "npm"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--host"
          "0.0.0.0"
        ];
        manager = "web";
      };
    };
  };
}