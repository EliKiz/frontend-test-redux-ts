import { motion } from "framer-motion";

const Motion = (props: { children: JSX.Element }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            {props.children}
        </motion.div>
    );
};
export default Motion;
