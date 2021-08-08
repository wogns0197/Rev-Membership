# 카페 레브 포인트 적립 시스텝 웹페이지

종이쿠폰에서 전산포인트로 넘어가기위해 제작.

## 설계
#### 고객 DB 설계
```typescript
interface PointHistory{
  date: string,
  point: number,
}

interface ClientData{
  key?: string,
  name?: string,
  phonenumber: string,
  point: number,
  pointhistory?: PointHistory[],
  buycount: number,
  registertime?: string,
};
```
