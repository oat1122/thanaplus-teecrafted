# Product Detail Refactoring

## การแยก Logic ออกจาก UI Components

การ refactor นี้ได้แยก logic ออกจากไฟล์ `.tsx` เพื่อให้โค้ดมีความชัดเจนและง่ายต่อการบำรุงรักษามากขึ้น

## โครงสร้างใหม่

### 1. Custom Hook

- **`hooks/useProductDetail.ts`** - จัดการ state และ logic ทั้งหมดสำหรับ product detail

### 2. UI Components (แยกย่อย)

- **`components/product/ProductInfo.tsx`** - แสดงข้อมูลพื้นฐานของสินค้า
- **`components/product/ProductPrice.tsx`** - แสดงราคาสินค้า
- **`components/product/SizeSelector.tsx`** - เลือกขนาดสินค้า
- **`components/product/ColorSelector.tsx`** - เลือกสีสินค้า
- **`components/product/QuantitySelector.tsx`** - เลือกจำนวนสินค้า
- **`components/product/OrderCodeDisplay.tsx`** - แสดงโค้ดสั่งซื้อ
- **`components/product/ActionButtons.tsx`** - ปุ่มต่าง ๆ สำหรับการสั่งซื้อ
- **`components/product/ValidationMessage.tsx`** - ข้อความเตือนการ validation
- **`components/product/ProductFeatures.tsx`** - แสดงคุณสมบัติของสินค้า
- **`components/product/index.ts`** - Export ทุก components สำหรับ import ง่าย

### 3. Main Component

- **`ProductDetailClient.tsx`** - Component หลักที่รับผิดชอบเฉพาะการ render UI

### 4. Metadata Management

- **`metadata.ts`** - จัดการ SEO metadata และ structured data
- **`page.tsx`** - ใช้ metadata functions ที่ปรับปรุงแล้ว

## ประโยชน์ของการ Refactor

### 1. **Separation of Concerns**

- Logic แยกออกจาก UI ทำให้แก้ไขได้ง่าย
- แต่ละ component มีหน้าที่ชัดเจน

### 2. **Reusability**

- Components เล็ก ๆ สามารถนำไปใช้ใหม่ได้
- Hook สามารถใช้ใน components อื่น ๆ ได้

### 3. **Maintainability**

- โค้ดสั้นลงและอ่านง่ายขึ้น
- แก้ไข bug หรือเพิ่มฟีเจอร์ใหม่ได้ง่าย

### 4. **Testability**

- Hook และ components แยกจากกันทำให้ test ได้ง่าย
- สามารถ mock dependencies ได้

### 5. **Type Safety**

- TypeScript interfaces ชัดเจนสำหรับแต่ละ component
- Props และ state มี type ที่แน่นอน

## การใช้งาน

```tsx
// ใน ProductDetailClient.tsx
const {
  // State
  selectedSize,
  selectedColor,
  quantity,
  // Actions
  setSelectedSize,
  handleAddToCart,
  // Computed values
  isValidSelection,
} = useProductDetail(product);

return (
  <div>
    <ProductInfo product={product} />
    <SizeSelector
      sizes={product.sizes}
      selectedSize={selectedSize}
      onSizeSelect={setSelectedSize}
    />
    {/* ... other components */}
  </div>
);
```

## หลักการสำคัญ

1. **Single Responsibility** - แต่ละ component ทำหน้าที่เดียว
2. **Props Interface** - ทุก component มี props interface ที่ชัดเจน
3. **No Side Effects in UI** - UI components ไม่มี business logic
4. **Custom Hook Pattern** - ใช้ custom hook เพื่อจัดการ state และ logic
