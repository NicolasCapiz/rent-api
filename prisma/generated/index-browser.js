
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  isRenter: 'isRenter',
  accessToken: 'accessToken',
  firstName: 'firstName',
  lastName: 'lastName',
  picture: 'picture',
  createdAt: 'createdAt',
  password: 'password',
  updatedAt: 'updatedAt',
  CUST_ID: 'CUST_ID',
  dni: 'dni'
};

exports.Prisma.LocationScalarFieldEnum = {
  id: 'id',
  name: 'name',
  address: 'address',
  renterId: 'renterId',
  CUST_ID: 'CUST_ID',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.LeaseContractScalarFieldEnum = {
  id: 'id',
  locationId: 'locationId',
  startDate: 'startDate',
  endDate: 'endDate',
  finishedDate: 'finishedDate',
  rentAmount: 'rentAmount',
  active: 'active',
  cancelled: 'cancelled',
  createdAt: 'createdAt',
  pdfPath: 'pdfPath',
  CUST_ID: 'CUST_ID',
  renterId: 'renterId'
};

exports.Prisma.KeyScalarFieldEnum = {
  id: 'id',
  locationId: 'locationId',
  issueDate: 'issueDate',
  returnDate: 'returnDate',
  CUST_ID: 'CUST_ID'
};

exports.Prisma.PriceAdjustmentScalarFieldEnum = {
  id: 'id',
  CUST_ID: 'CUST_ID',
  amount: 'amount',
  period: 'period',
  status: 'status',
  applyToAll: 'applyToAll',
  type: 'type',
  createdAt: 'createdAt',
  lastExecutedAt: 'lastExecutedAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AdjustmentLocationScalarFieldEnum = {
  id: 'id',
  priceAdjustmentId: 'priceAdjustmentId',
  locationId: 'locationId'
};

exports.Prisma.PaymentScalarFieldEnum = {
  id: 'id',
  locationId: 'locationId',
  date: 'date',
  amount: 'amount',
  paymentMethodId: 'paymentMethodId',
  CUST_ID: 'CUST_ID',
  paymentRecordId: 'paymentRecordId',
  month: 'month',
  year: 'year'
};

exports.Prisma.PaymentRecordScalarFieldEnum = {
  id: 'id',
  locationId: 'locationId',
  month: 'month',
  year: 'year',
  CUST_ID: 'CUST_ID',
  remainingAmount: 'remainingAmount',
  totalPaid: 'totalPaid',
  totalRent: 'totalRent'
};

exports.Prisma.PaymentMethodScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.InvoiceScalarFieldEnum = {
  id: 'id',
  locationId: 'locationId',
  date: 'date',
  CUST_ID: 'CUST_ID'
};

exports.Prisma.PaymentScheduleScalarFieldEnum = {
  id: 'id',
  locationId: 'locationId',
  dueDate: 'dueDate',
  CUST_ID: 'CUST_ID'
};

exports.Prisma.RentHistoryScalarFieldEnum = {
  id: 'id',
  locationId: 'locationId',
  month: 'month',
  year: 'year',
  rentAmount: 'rentAmount',
  createdAt: 'createdAt',
  CUST_ID: 'CUST_ID'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User',
  Location: 'Location',
  LeaseContract: 'LeaseContract',
  Key: 'Key',
  PriceAdjustment: 'PriceAdjustment',
  AdjustmentLocation: 'AdjustmentLocation',
  Payment: 'Payment',
  PaymentRecord: 'PaymentRecord',
  PaymentMethod: 'PaymentMethod',
  Invoice: 'Invoice',
  PaymentSchedule: 'PaymentSchedule',
  RentHistory: 'RentHistory'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
