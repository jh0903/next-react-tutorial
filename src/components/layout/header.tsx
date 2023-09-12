import Button from '@mui/material/Button';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-16">
      <div className="flex items-center w-9/12 h-full mx-auto my-0 justify-between ">
        <a href="/">
          <img src="img/logo.png" width="80" height="17" alt="logo" />
        </a>
        <nav className=" flex flex-wrap items-center text-sm justify-center">
          <a
            href="wdlist"
            className="mr-8 font-bold text-gray-700 no-underline"
          >
            채용
          </a>
          <div className="mr-8 font-bold text-gray-700">이벤트</div>
          <div className="mr-8 font-bold text-gray-700">이력서</div>
          <div className="mr-8 font-bold text-gray-700">소셜</div>
          <div className="mr-8 font-bold text-gray-700">프리랜서</div>
          <div className="mr-8 font-bold text-gray-700">AI 합격예측</div>
        </nav>
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center">
            <Button color="secondary" href="join">
              회원가입
            </Button>
            <Button href="join">로그인</Button>
          </div>
          <Button href="login" variant="outlined">
            기업 서비스
          </Button>
          {/* <button
            type="button"
            className="rounded-full w-24 h-9 border border-slate-300 font-semibold"
          >
            기업 서비스
          </button> */}
        </div>
      </div>
    </header>
  );
}
