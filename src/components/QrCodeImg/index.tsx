import { QRCodeCanvas } from 'qrcode.react'


interface QrCodeImgProps {
  source: string
}

export function QrCodeImg({ source }: QrCodeImgProps) {
  return (
    <QRCodeCanvas
      value={source}
      size={220} // Tamanho do QR Code
      bgColor={"#ffffff"} // Cor de fundo
      fgColor={"#000000"} // Cor do QR Code
      level={"L"} // Nível de correção de erros
    />
  )
}
