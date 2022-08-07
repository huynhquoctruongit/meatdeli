import Link from "next/link";

export default function Custom404() {
  return (
    <div>
      <div className="text-center p-4" style={{ minHeight: "50vh" }}>
        <h2>
          Xin lỗi, chức năng này đang phát triển vui lòng quay lại
          <Link href="/" passHref>
            <a className="text-blue-600" style={{ color: "#1084E7" }}>
              {" "}Trang chủ
            </a>
          </Link>
        </h2>
      </div>
    </div>
  );
}
