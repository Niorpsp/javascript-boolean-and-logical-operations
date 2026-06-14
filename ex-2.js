// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000;
let isWeekday;
let hasBoughtProductFromITCategory;
let hasAttendedDiscountEvent;
let isPlatinum;
let hasPromotion;

// John ซื้อ 4001 บาท
lastMonthPaidMoreThan4000 = true;

// ซื้อวันศุกร์
isWeekday = true;

// ไม่เคยซื้อสินค้า IT
hasBoughtProductFromITCategory = false;

// เคยเข้ากิจกรรมลดราคา
hasAttendedDiscountEvent = true;

// เป็น Gold ไม่ใช่ Platinum
isPlatinum = false;

hasPromotion =
    (
        lastMonthPaidMoreThan4000 &&
        isWeekday &&
        !hasBoughtProductFromITCategory &&
        !hasAttendedDiscountEvent
    )
    ||
    isPlatinum;
console.log(hasPromotion);
