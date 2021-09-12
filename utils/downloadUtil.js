export default function handleDownload() {
  const blob = new Blob(服务器返回的二进制流);
  const blobUrl = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.style.display = 'none';
  a.download = filename;
  a.href = blobUrl;
  a.click();
  URL.revokeObjectURL(blobUrl);
}

