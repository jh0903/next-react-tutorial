import data from '@/dummy/job_list.json';

export default function JobDetail({ params }: { params: { jobId: string } }) {
  const curJob = data.jobList.find(d => d.id === params.jobId);

  if (!curJob) return <div>해당 공고가 존재하지 않습니다.</div>;

  return (
    <>
      <div className="px-56">
        <div className="flex flex-col w-192 gap-2">
          <img src={curJob.images[0]} width={700} height={490}></img>
          <h3>{curJob.title}</h3>
          <div>{curJob.company_name}</div>
          <div className="flex flex-row gap-2">
            {curJob.tagList.map(d => (
              <div className="bg-slate-100 rounded-lg">{d}</div>
            ))}
          </div>
          <div>{curJob.content}</div>
        </div>
      </div>
    </>
  );
}
