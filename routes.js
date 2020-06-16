const routes  = require('next-routes')();

routes
.add('/shipments/new','/shipments/new')
.add('/producer/shipments/:address', '/shipments/show')
.add('/purchaser/:add/Shipment/:address', 'shipments/purchView')
.add('/provider/:add/shipment/:address', 'shipments/provView')
.add('/producer/:address', 'stakeholders/producer')
.add('/purchaser/:address', 'stakeholders/purchaser')
.add('/provider/:address', 'stakeholders/provider')
.add('/purchaser/:address/Requests', 'Requests/View/purchView')
.add('/purchaser/:address/Requests/MyRequests', 'Requests/myrequests')
.add('/producer/:address/Requests', 'Requests/View/prodView')
.add('/provider/:address/Requests', 'Requests/SentReq/provider')
.add('/purchaser/:address/Requests/SentRequests', 'Requests/SentReq/purchaser')
module.exports = routes;
