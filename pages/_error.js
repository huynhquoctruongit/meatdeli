import Link from 'next/link';

export default function Custom404() {
  return (
    <div>
      <div className="text-center" style={{ minHeight: '50vh' }}>
        <h2>
          Không tìm thấy trang bạn yêu cầu, vui lòng trở về
          <Link href="/" passHref>
            <a className="text-blue-600"> Trang chủ</a>
          </Link>
        </h2>
      </div>
    </div>
  );
}
