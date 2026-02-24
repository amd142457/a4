## JavaScript Short Questions (Exam Notes)

1. **getElementById vs getElementsByClassName vs querySelector / querySelectorAll**  
   getElementById একটি নির্দিষ্ট id-এর element দেয়, getElementsByClassName একই class-এর সব element দেয়, আর querySelector প্রথম matching element ও querySelectorAll সব matching element দেয়।

2. **Create and insert a new element into the DOM**  
   document.createElement() দিয়ে element তৈরি করে appendChild() বা append() দিয়ে DOM-এ যোগ করা হয়।

3. **Event Bubbling**  
   Event target element থেকে parent হয়ে document পর্যন্ত উপরের দিকে ছড়ায়।

4. **Event Delegation**  
   Parent element-এ event listener বসিয়ে child element-এর event handle করাকে Event Delegation বলে।

5. **preventDefault() vs stopPropagation()**  
   preventDefault() default কাজ বন্ধ করে, stopPropagation() event bubbling বন্ধ করে।
