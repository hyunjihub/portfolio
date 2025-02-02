import Image from 'next/image';
import calender from '/public/profile/calender.svg';
import call from '/public/profile/call.svg';
import location from '/public/profile/location.svg';
import mail from '/public/profile/mail.svg';
import person from '/public/profile/person.svg';
import school from '/public/profile/school.svg';

export default function About() {
  return (
    <section className="max-w-screen-lg mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-x-32">
      <div className="flex gap-4">
        <Image src={person} alt="person" width={30} height={30} />
        <div className="text-sm">
          <p className="font-bold">이름</p>
          <p className="text-darkgray">장현지</p>
        </div>
      </div>
      <div className="flex gap-4">
        <Image src={calender} alt="date" width={30} height={30} />
        <div className="text-sm">
          <p className="font-bold">생년월일</p>
          <p className="text-darkgray">2000. 04. 02</p>
        </div>
      </div>
      <div className="flex gap-4">
        <Image src={location} alt="location" width={30} height={30} />
        <div className="text-sm">
          <p className="font-bold">지역</p>
          <p className="text-darkgray">강원도 춘천시</p>
        </div>
      </div>
      <div className="flex gap-4">
        <Image src={school} alt="university" width={30} height={30} />
        <div className="text-sm">
          <p className="font-bold">학력</p>
          <p className="text-darkgray">강원대학교 정보통신공학전공</p>
        </div>
      </div>
      <div className="flex gap-4">
        <Image src={call} alt="phone" width={30} height={30} />
        <div className="text-sm">
          <p className="font-bold">연락처</p>
          <p className="text-darkgray">010-6888-2499</p>
        </div>
      </div>
      <div className="flex gap-4">
        <Image src={mail} alt="email" width={30} height={30} />
        <div className="text-sm">
          <p className="font-bold">이메일</p>
          <p className="text-darkgray">janghyunji42@gmail.com</p>
        </div>
      </div>
    </section>
  );
}
