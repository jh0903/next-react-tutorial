'use client';

import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { ModalContext } from '@/components/modal-provider';

export default function Login() {
  const { state, dispatch } = useContext(ModalContext);

  const router = useRouter();
  const { register, handleSubmit, formState } = useForm();

  const onSubmit = (data: any) => {
    if (data.id === 'helloworld' && data.pwd === 'Qwer!234') {
      console.log('로그인 성공');
      router.push('/');
    } else {
      dispatch({
        type: 'OPEN_MODAL',
        payload: {
          title: '로그인 실패',
          description: '아이디 또는 비밀번호 오류입니다.',
        },
      });
    }
  };

  const { errors } = formState;

  return (
    <form
      className="flex flex-col w-64 gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="h-8"
        placeholder="ID"
        type="id"
        {...register('id', {
          required: '아이디는 필수 입력값입니다.',
        })}
      />
      {errors.id && errors.id.message?.toString()}
      <input
        className="h-8"
        placeholder="Password"
        type="password"
        {...register('pwd', {
          required: '비밀번호는 필수 입력값입니다.',
          minLength: { value: 8, message: '8자 이상 입력해주세요.' },
          validate: {
            specialLetter: v =>
              /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]+/.test(v) ===
                true || '특수문자를 포함해주세요.',
            lowercase: v =>
              /[a-z]+/.test(v) === true || '소문자를 포함해주세요.',
            uppercase: v =>
              /[A-Z]+/.test(v) === true || '대문자를 포함해주세요.',
          },
        })}
      />
      {errors.pwd && errors.pwd.message?.toString()}

      <button
        className="border rounded-md border-slate-300 p-3 text-white bg-blue-600"
        type="submit"
      >
        LOGIN
      </button>
    </form>
  );
}
