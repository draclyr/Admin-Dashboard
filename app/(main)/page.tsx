import DashboardCard from '@/components/dashboard/DashboardCard';
import PostsTable from '@/components/posts/PostsTable';
import AnalyticsChart from '@/components/dashboard/AnalyticsChart';
import { Folder, MessageCircle, Newspaper, User } from 'lucide-react';

export default function Home() {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-between gap-5 mb-5'>
        <DashboardCard
          title='Categories'
          count={23}
          icon={<Folder className='text-red-400' size={72} />}
        />
        <DashboardCard
          title='Posts'
          count={81}
          icon={<Newspaper className='text-red-400' size={72} />}
        />
        <DashboardCard
          title='Users'
          count={5506}
          icon={<User className='text-red-400' size={72} />}
        />
        <DashboardCard
          title='Comments'
          count={792}
          icon={<MessageCircle className='text-red-400' size={72} />}
        />
      </div>
      <AnalyticsChart />
      <PostsTable title='Latest Posts' limit={5} />
    </>
  );
}
