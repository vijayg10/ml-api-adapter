/*****
 License
 --------------
 Copyright © 2017 Bill & Melinda Gates Foundation
 The Mojaloop files are made available by the Bill & Melinda Gates Foundation under the Apache License, Version 2.0 (the "License") and you may not use these files except in compliance with the License. You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, the Mojaloop files are distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 Contributors
 --------------
 This is the official list of the Mojaloop project contributors for this file.
 Names of the original copyright holders (individuals or organizations)
 should be listed with a '*' in the first column. People who have
 contributed from an organization can be listed under the organization
 that actually holds the copyright for their contributions (see the
 Gates Foundation organization for an example). Those individuals should have
 their names indented and be marked with a '-'. Email address can be added
 optionally within square brackets <email>.
 * Gates Foundation
 - Name Surname <name.surname@gatesfoundation.com>
 --------------
 ******/

// 'use strict'

// const Test = require('tapes')(require('tape'))
// const Sinon = require('sinon')
// const P = require('bluebird')
// const Notification = require('../../../../src/handlers/notification')
// // const Service = require('../../../../src/domain/transfer')
// const Consumer = require('@mojaloop/central-services-shared').Kafka.Consumer
// const ConsumerEnums = require('@mojaloop/central-services-shared').Kafka.Consumer.ENUMS
// const Logger = require('@mojaloop/central-services-shared').Logger

// const request = require('request')

// Test('Transfer Service tests', notificationTest => {
//   let sandbox

//   notificationTest.beforeEach(t => {
//     sandbox = Sinon.sandbox.create()
//     // sandbox.stub(Consumer, 'publishPrepare')
//     sandbox.stub(Consumer.prototype, 'constructor' )
//     //sandbox.stub(Notification, 'startConsumer')
//     sandbox.stub(Notification, 'sendNotification')
//     sandbox.stub(Logger)
//    // sandbox.stub(request)
//     t.end()
//   })

//   notificationTest.afterEach(t => {
//     sandbox.restore()
//     t.end()
//   })

//   notificationTest.test('startConsumer should', async startConsumerTest => {
//     startConsumerTest.test('start the consumer and consumer messages', async test => {

// //    let result = await Notification.startConsumer()
// //         .then(result => {
// //           test.end()
// //         })

//          test.ok(Notification.startConsumer())

//          //test.equal(result, undefined)
//         //  test.end()

//     })
//     startConsumerTest.end()
//   })
//   notificationTest.end()
// })
