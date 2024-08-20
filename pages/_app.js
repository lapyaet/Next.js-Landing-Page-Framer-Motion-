import "../styles/globals.css";

//Components
import Layout from "@/components/Layout";
import Transitions from "@/components/Transitions";

//Router
import { useRouter } from "next/router";

//Framer motion
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, PageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transitions />
          <Component {...PageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
