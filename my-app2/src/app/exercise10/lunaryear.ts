export class LunarYear {
  constructor(
    public day: number,
    public month: number,
    public year: number
  ) {}

  private INT(d: number) {
    return Math.floor(d);
  }

  private jdFromDate(dd: number, mm: number, yy: number) {
    const a = this.INT((14 - mm) / 12);
    const y = yy + 4800 - a;
    const m = mm + 12 * a - 3;
    let jd = dd + this.INT((153 * m + 2) / 5) + 365 * y
      + this.INT(y / 4) - this.INT(y / 100)
      + this.INT(y / 400) - 32045;
    return jd;
  }

  private getNewMoonDay(k: number) {
    const T = k / 1236.85;
    const T2 = T * T;
    const T3 = T2 * T;
    const dr = Math.PI / 180;
    let Jd1 = 2415020.75933 + 29.53058868 * k
      + 0.0001178 * T2 - 0.000000155 * T3;
    Jd1 += 0.00033 * Math.sin((166.56 + 132.87 * T - 0.009173 * T2) * dr);
    const M = 359.2242 + 29.10535608 * k - 0.0000333 * T2 - 0.00000347 * T3;
    const Mpr = 306.0253 + 385.81691806 * k + 0.0107306 * T2 + 0.00001236 * T3;
    const F = 21.2964 + 390.67050646 * k - 0.0016528 * T2 - 0.00000239 * T3;
    let C1 = (0.1734 - 0.000393 * T) * Math.sin(M * dr)
      + 0.0021 * Math.sin(2 * dr * M);
    C1 -= 0.4068 * Math.sin(Mpr * dr)
      + 0.0161 * Math.sin(dr * 2 * Mpr);
    C1 -= 0.0004 * Math.sin(dr * 3 * Mpr);
    C1 += 0.0104 * Math.sin(dr * 2 * F)
      - 0.0051 * Math.sin(dr * (M + Mpr));
    C1 -= 0.0074 * Math.sin(dr * (M - Mpr))
      + 0.0004 * Math.sin(dr * (2 * F + M));
    C1 -= 0.0004 * Math.sin(dr * (2 * F - M))
      - 0.0006 * Math.sin(dr * (2 * F + Mpr));
    C1 += 0.0010 * Math.sin(dr * (2 * F - Mpr))
      + 0.0005 * Math.sin(dr * (2 * Mpr + M));
    let deltat;
    if (T < -11) {
      deltat = 0.001 + 0.000839 * T + 0.0002261 * T2
        - 0.00000845 * T3 - 0.000000081 * T * T3;
    } else {
      deltat = -0.000278 + 0.000265 * T + 0.000262 * T2;
    }
    return this.INT(Jd1 + C1 - deltat + 0.5);
  }

  private getSunLongitude(jdn: number) {
    const T = (jdn - 2451545.0) / 36525;
    const T2 = T * T;
    const dr = Math.PI / 180;
    const M = 357.52910 + 35999.05030 * T - 0.0001559 * T2 - 0.00000048 * T * T2;
    const L0 = 280.46645 + 36000.76983 * T + 0.0003032 * T2;
    let DL = (1.914600 - 0.004817 * T - 0.000014 * T2) * Math.sin(dr * M);
    DL += (0.019993 - 0.000101 * T) * Math.sin(dr * 2 * M)
      + 0.000290 * Math.sin(dr * 3 * M);
    let L = L0 + DL;
    L = L * dr;
    L = L - Math.PI * 2 * this.INT(L / (Math.PI * 2));
    return this.INT(L / Math.PI * 6);
  }

  private getLunarMonth11(yy: number) {
    const off = this.jdFromDate(31, 12, yy) - 2415021;
    const k = this.INT(off / 29.530588853);
    let nm = this.getNewMoonDay(k);
    const sunLong = this.getSunLongitude(nm);
    if (sunLong >= 9) {
      nm = this.getNewMoonDay(k - 1);
    }
    return nm;
  }

  private getLeapMonthOffset(a11: number) {
    let k = this.INT((a11 - 2415021.076998695) / 29.530588853 + 0.5);
    let last = 0;
    let i = 1;
    let arc = this.getSunLongitude(this.getNewMoonDay(k + i));
    do {
      last = arc;
      i++;
      arc = this.getSunLongitude(this.getNewMoonDay(k + i));
    } while (arc !== last && i < 14);
    return i - 1;
  }

  private getLunarMonthName(month: number): string {
    const monthNames = [
      'Giêng', 'Hai', 'Ba', 'Tư', 'Năm', 'Sáu',
      'Bảy', 'Tám', 'Chín', 'Mười', 'Một', 'Chạp'
    ];
    return `Tháng ${monthNames[month - 1]}`;
  }

  private getLunarDayCanChi(jd: number): string {
    const can = ['Giáp','Ất','Bính','Đinh','Mậu','Kỷ','Canh','Tân','Nhâm','Quý'];
    const chi = ['Tý','Sửu','Dần','Mão','Thìn','Tỵ','Ngọ','Mùi','Thân','Dậu','Tuất','Hợi'];
    
    const canIndex = (jd + 9) % 10;
    const chiIndex = (jd + 1) % 12;
    
    return `Ngày ${can[canIndex]} ${chi[chiIndex]}`;
  }

  findLunarYearDetail() {
    const can = ['Giáp','Ất','Bính','Đinh','Mậu','Kỷ','Canh','Tân','Nhâm','Quý'];
    const chi = ['Tý','Sửu','Dần','Mão','Thìn','Tỵ','Ngọ','Mùi','Thân','Dậu','Tuất','Hợi'];

    const dayNumber = this.jdFromDate(this.day, this.month, this.year);
    const k = this.INT((dayNumber - 2415021.076998695) / 29.530588853);

    let monthStart = this.getNewMoonDay(k);
    if (monthStart > dayNumber) {
      monthStart = this.getNewMoonDay(k - 1);
    }

    let a11 = this.getLunarMonth11(this.year);
    let b11 = a11;
    let lunarYear;
    if (a11 >= monthStart) {
      lunarYear = this.year - 1;
      a11 = this.getLunarMonth11(this.year - 1);
    } else {
      lunarYear = this.year;
      b11 = this.getLunarMonth11(this.year + 1);
    }

    const lunarDay = dayNumber - monthStart + 1;
    const diff = this.INT((monthStart - a11) / 29);
    let lunarMonth = diff + 11;
    if (lunarMonth > 12) lunarMonth -= 12;

    const canIndex = lunarYear % 10;
    const chiIndex = lunarYear % 12;
    
    const dayCanChi = this.getLunarDayCanChi(dayNumber);

    return {
      weekday: `Ngày thứ ${this.day % 7 || 7}`,
      lunarDate: `${lunarDay}/${lunarMonth}/${lunarYear}`,
      lunarYear: `Năm ${can[canIndex]} ${chi[chiIndex]}`,
      lunarMonth: this.getLunarMonthName(lunarMonth),
      lunarDay: dayCanChi
    };
  }
}