export default function handleDownload() {
  const a = document.createElement('a');
  const blob = new Blob(服务器返回的二进制流);
  const blobUrl = URL.createObjectURL(blob);
  a.style.display = 'none';
  a.download = filename;
  a.href = blobUrl;
  a.click();
  URL.removeObjectURL(blobUrl);
}

