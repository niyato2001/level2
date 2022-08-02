import { PageHeader } from '@/component/common/template/PageHeader';
import { PageMain } from '@/component/common/template/PageMain';

const Home: React.FC = () => (
  <main className='mx-auto w-[420px]'>
    <PageHeader />
    <PageMain />
  </main>
);

export default Home;
