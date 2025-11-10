echo "Rendering resume with professional formatting..." &&
node generate-pdf.js &&
cp output/index.html index.html &&
echo "✓ Resume generated: index.html and resume-formatted.pdf"