export interface ComprobantePagoModel {
  idComprobante: number;
  monto: number;
  fechaPago: string;
  direccion: string;
  ruc: string;
  idCarrito: number;
}
