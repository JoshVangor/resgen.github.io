bash scripts/output.sh &&
echo "Rendered" && 
node generation/create_webserver.js &&
node generation/createpdf.mjs &&
rm -rf out.log &&
killall node 2>/dev/null || echo "Cleanup complete"