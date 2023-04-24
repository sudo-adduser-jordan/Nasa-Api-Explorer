import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import styles from '../styles/pages/AboutPage.module.css'

const AboutPage = () => {
  return (
    <>
      <section className={styles.container} >
        about
      </section>
    </>
  );
};

AboutPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}

export default AboutPage;