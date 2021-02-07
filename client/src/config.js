import axios from 'axios',
// =======  preparing to the deplyment  ========
const URL = window.location.hostname === `localhost`
            ? `http://localhost:3040` // 3030 should be replaced with your server port
            : `http://157.230.23.136` // it should be replaced with actual domain during the deployment

export { URL }


