export interface PointHistory{
  date: string,
  point: number,
}

export interface ClientData{
  key?: string,
  name?: string,
  phonenumber: string,
  point: number,
  pointhistory?: PointHistory[],
  buycount: number,
  registertime?: string,
};