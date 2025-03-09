
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.8.0
 * Query Engine version: 0a83d8541752d7582de2ebc1ece46519ce72a848
 */
Prisma.prismaVersion = {
  client: "5.8.0",
  engine: "0a83d8541752d7582de2ebc1ece46519ce72a848"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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
  day: 'day',
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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/nicolascapiz/Desktop/rent-api/prisma/generated",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "..",
  "clientVersion": "5.8.0",
  "engineVersion": "0a83d8541752d7582de2ebc1ece46519ce72a848",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAibXlzcWwiCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCn0KCm1vZGVsIFVzZXIgewogIGlkICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBlbWFpbCAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgIEB1bmlxdWUKICBpc1JlbnRlciAgICAgICAgICAgICAgIEJvb2xlYW4gICAgICAgICAgIEBkZWZhdWx0KHRydWUpCiAgYWNjZXNzVG9rZW4gICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICBAZGIuVmFyQ2hhcigyNTUpCiAgZmlyc3ROYW1lICAgICAgICAgICAgICBTdHJpbmc/CiAgbGFzdE5hbWUgICAgICAgICAgICAgICBTdHJpbmc/CiAgcGljdHVyZSAgICAgICAgICAgICAgICBTdHJpbmc/CiAgY3JlYXRlZEF0ICAgICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICBAZGVmYXVsdChub3coKSkKICBwYXNzd29yZCAgICAgICAgICAgICAgIFN0cmluZz8KICB1cGRhdGVkQXQgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgIEB1cGRhdGVkQXQKICBDVVNUX0lEICAgICAgICAgICAgICAgIEludD8KICBkbmkgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgIEB1bmlxdWUKICBpbnZvaWNlcyAgICAgICAgICAgICAgIEludm9pY2VbXQogIGtleXMgICAgICAgICAgICAgICAgICAgS2V5W10KICBsZWFzZUNvbnRyYWN0c0FzQ3VzdCAgIExlYXNlQ29udHJhY3RbXSAgIEByZWxhdGlvbigiTGVhc2VDb250cmFjdEN1c3QiKQogIGxlYXNlQ29udHJhY3RzQXNSZW50ZXIgTGVhc2VDb250cmFjdFtdICAgQHJlbGF0aW9uKCJMZWFzZUNvbnRyYWN0UmVudGVyIikKICBMb2NhdGlvbiAgICAgICAgICAgICAgIExvY2F0aW9uW10KICByZW50ZWRMb2NhdGlvbnMgICAgICAgIExvY2F0aW9uW10gICAgICAgIEByZWxhdGlvbigicmVudGVyIikKICBwYXltZW50cyAgICAgICAgICAgICAgIFBheW1lbnRbXQogIFBheW1lbnRSZWNvcmQgICAgICAgICAgUGF5bWVudFJlY29yZFtdCiAgcGF5bWVudFNjaGVkdWxlcyAgICAgICBQYXltZW50U2NoZWR1bGVbXQogIHByaWNlQWRqdXN0bWVudHMgICAgICAgUHJpY2VBZGp1c3RtZW50W10KICBSZW50SGlzdG9yeSAgICAgICAgICAgIFJlbnRIaXN0b3J5W10KICBjdXN0ICAgICAgICAgICAgICAgICAgIFVzZXI/ICAgICAgICAgICAgIEByZWxhdGlvbigiVXNlckN1c3QiLCBmaWVsZHM6IFtDVVNUX0lEXSwgcmVmZXJlbmNlczogW2lkXSkKICBjcmVhdGVkVXNlcnMgICAgICAgICAgIFVzZXJbXSAgICAgICAgICAgIEByZWxhdGlvbigiVXNlckN1c3QiKQoKICBAQGluZGV4KFtDVVNUX0lEXSwgbWFwOiAiVXNlcl9DVVNUX0lEX2ZrZXkiKQp9Cgptb2RlbCBMb2NhdGlvbiB7CiAgaWQgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbmFtZSAgICAgICAgICAgICAgIFN0cmluZwogIGFkZHJlc3MgICAgICAgICAgICBTdHJpbmcKICByZW50ZXJJZCAgICAgICAgICAgSW50CiAgQ1VTVF9JRCAgICAgICAgICAgIEludD8KICBjcmVhdGVkQXQgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZEF0ICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgIEB1cGRhdGVkQXQKICBBZGp1c3RtZW50TG9jYXRpb24gQWRqdXN0bWVudExvY2F0aW9uW10KICBpbnZvaWNlcyAgICAgICAgICAgSW52b2ljZVtdCiAga2V5cyAgICAgICAgICAgICAgIEtleVtdCiAgY29udHJhY3RzICAgICAgICAgIExlYXNlQ29udHJhY3RbXQogIGN1c3QgICAgICAgICAgICAgICBVc2VyPyAgICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbQ1VTVF9JRF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgcmVudGVyICAgICAgICAgICAgIFVzZXIgICAgICAgICAgICAgICAgIEByZWxhdGlvbigicmVudGVyIiwgZmllbGRzOiBbcmVudGVySWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHBheW1lbnRzICAgICAgICAgICBQYXltZW50W10KICBQYXltZW50UmVjb3JkICAgICAgUGF5bWVudFJlY29yZFtdCiAgcGF5bWVudFNjaGVkdWxlcyAgIFBheW1lbnRTY2hlZHVsZVtdCiAgcmVudEhpc3RvcnkgICAgICAgIFJlbnRIaXN0b3J5W10KICBhZGp1c3RtZW50cyAgICAgICAgUHJpY2VBZGp1c3RtZW50W10gICAgQHJlbGF0aW9uKCJBZGp1c3RtZW50TG9jYXRpb25zIikKCiAgQEBpbmRleChbcmVudGVySWRdLCBtYXA6ICJMb2NhdGlvbl9yZW50ZXJJZF9ma2V5IikKICBAQGluZGV4KFtDVVNUX0lEXSwgbWFwOiAiTG9jYXRpb25fQ1VTVF9JRF9ma2V5IikKfQoKbW9kZWwgTGVhc2VDb250cmFjdCB7CiAgaWQgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGxvY2F0aW9uSWQgICBJbnQKICBzdGFydERhdGUgICAgRGF0ZVRpbWUKICBlbmREYXRlICAgICAgRGF0ZVRpbWUKICBmaW5pc2hlZERhdGUgRGF0ZVRpbWU/CiAgcmVudEFtb3VudCAgIEludAogIGFjdGl2ZSAgICAgICBCb29sZWFuICAgQGRlZmF1bHQodHJ1ZSkKICBjYW5jZWxsZWQgICAgQm9vbGVhbiAgIEBkZWZhdWx0KGZhbHNlKQogIGNyZWF0ZWRBdCAgICBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpCiAgcGRmUGF0aCAgICAgIFN0cmluZz8KICBDVVNUX0lEICAgICAgSW50PwogIHJlbnRlcklkICAgICBJbnQKICBjdXN0ICAgICAgICAgVXNlcj8gICAgIEByZWxhdGlvbigiTGVhc2VDb250cmFjdEN1c3QiLCBmaWVsZHM6IFtDVVNUX0lEXSwgcmVmZXJlbmNlczogW2lkXSkKICBsb2NhdGlvbiAgICAgTG9jYXRpb24gIEByZWxhdGlvbihmaWVsZHM6IFtsb2NhdGlvbklkXSwgcmVmZXJlbmNlczogW2lkXSkKICByZW50ZXIgICAgICAgVXNlciAgICAgIEByZWxhdGlvbigiTGVhc2VDb250cmFjdFJlbnRlciIsIGZpZWxkczogW3JlbnRlcklkXSwgcmVmZXJlbmNlczogW2lkXSkKCiAgQEBpbmRleChbbG9jYXRpb25JZF0sIG1hcDogIkxlYXNlQ29udHJhY3RfbG9jYXRpb25JZF9ma2V5IikKICBAQGluZGV4KFtDVVNUX0lEXSwgbWFwOiAiTGVhc2VDb250cmFjdF9DVVNUX0lEX2ZrZXkiKQogIEBAaW5kZXgoW3JlbnRlcklkXSwgbWFwOiAiTGVhc2VDb250cmFjdF9yZW50ZXJJZF9ma2V5IikKfQoKbW9kZWwgS2V5IHsKICBpZCAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGxvY2F0aW9uSWQgSW50CiAgaXNzdWVEYXRlICBEYXRlVGltZQogIHJldHVybkRhdGUgRGF0ZVRpbWU/CiAgQ1VTVF9JRCAgICBJbnQ/CiAgY3VzdCAgICAgICBVc2VyPyAgICAgQHJlbGF0aW9uKGZpZWxkczogW0NVU1RfSURdLCByZWZlcmVuY2VzOiBbaWRdKQogIGxvY2F0aW9uICAgTG9jYXRpb24gIEByZWxhdGlvbihmaWVsZHM6IFtsb2NhdGlvbklkXSwgcmVmZXJlbmNlczogW2lkXSkKCiAgQEBpbmRleChbbG9jYXRpb25JZF0sIG1hcDogIktleV9sb2NhdGlvbklkX2ZrZXkiKQogIEBAaW5kZXgoW0NVU1RfSURdLCBtYXA6ICJLZXlfQ1VTVF9JRF9ma2V5IikKfQoKbW9kZWwgUHJpY2VBZGp1c3RtZW50IHsKICBpZCAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBDVVNUX0lEICAgICAgICAgICAgSW50PwogIGFtb3VudCAgICAgICAgICAgICBJbnQKICBwZXJpb2QgICAgICAgICAgICAgSW50CiAgc3RhdHVzICAgICAgICAgICAgIEludAogIGFwcGx5VG9BbGwgICAgICAgICBCb29sZWFuCiAgdHlwZSAgICAgICAgICAgICAgIEludAogIGNyZWF0ZWRBdCAgICAgICAgICBEYXRlVGltZSAgICAgICAgICAgICBAZGVmYXVsdChub3coKSkKICBsYXN0RXhlY3V0ZWRBdCAgICAgRGF0ZVRpbWU/CiAgdXBkYXRlZEF0ICAgICAgICAgIERhdGVUaW1lICAgICAgICAgICAgIEB1cGRhdGVkQXQKICBBZGp1c3RtZW50TG9jYXRpb24gQWRqdXN0bWVudExvY2F0aW9uW10KICBjdXN0ICAgICAgICAgICAgICAgVXNlcj8gICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW0NVU1RfSURdLCByZWZlcmVuY2VzOiBbaWRdKQogIGxvY2F0aW9ucyAgICAgICAgICBMb2NhdGlvbltdICAgICAgICAgICBAcmVsYXRpb24oIkFkanVzdG1lbnRMb2NhdGlvbnMiKQoKICBAQGluZGV4KFtDVVNUX0lEXSwgbWFwOiAiUHJpY2VBZGp1c3RtZW50X0NVU1RfSURfZmtleSIpCn0KCm1vZGVsIEFkanVzdG1lbnRMb2NhdGlvbiB7CiAgaWQgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgcHJpY2VBZGp1c3RtZW50SWQgSW50CiAgbG9jYXRpb25JZCAgICAgICAgSW50CiAgbG9jYXRpb24gICAgICAgICAgTG9jYXRpb24gICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtsb2NhdGlvbklkXSwgcmVmZXJlbmNlczogW2lkXSkKICBwcmljZUFkanVzdG1lbnQgICBQcmljZUFkanVzdG1lbnQgQHJlbGF0aW9uKGZpZWxkczogW3ByaWNlQWRqdXN0bWVudElkXSwgcmVmZXJlbmNlczogW2lkXSkKCiAgQEBpbmRleChbbG9jYXRpb25JZF0sIG1hcDogIkFkanVzdG1lbnRMb2NhdGlvbl9sb2NhdGlvbklkX2ZrZXkiKQogIEBAaW5kZXgoW3ByaWNlQWRqdXN0bWVudElkXSwgbWFwOiAiQWRqdXN0bWVudExvY2F0aW9uX3ByaWNlQWRqdXN0bWVudElkX2ZrZXkiKQp9Cgptb2RlbCBQYXltZW50IHsKICBpZCAgICAgICAgICAgICAgSW50ICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGxvY2F0aW9uSWQgICAgICBJbnQKICBkYXRlICAgICAgICAgICAgRGF0ZVRpbWUgICAgICBAZGVmYXVsdChub3coKSkKICBhbW91bnQgICAgICAgICAgSW50CiAgcGF5bWVudE1ldGhvZElkIEludAogIENVU1RfSUQgICAgICAgICBJbnQ/CiAgcGF5bWVudFJlY29yZElkIEludAogIG1vbnRoICAgICAgICAgICBJbnQKICBkYXkgICAgICAgICAgICAgSW50PwogIHllYXIgICAgICAgICAgICBJbnQKICBjdXN0ICAgICAgICAgICAgVXNlcj8gICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbQ1VTVF9JRF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgbG9jYXRpb24gICAgICAgIExvY2F0aW9uICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2xvY2F0aW9uSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHBheW1lbnRNZXRob2QgICBQYXltZW50TWV0aG9kIEByZWxhdGlvbihmaWVsZHM6IFtwYXltZW50TWV0aG9kSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHBheW1lbnRSZWNvcmQgICBQYXltZW50UmVjb3JkIEByZWxhdGlvbihmaWVsZHM6IFtwYXltZW50UmVjb3JkSWRdLCByZWZlcmVuY2VzOiBbaWRdKQoKICBAQGluZGV4KFtsb2NhdGlvbklkXSwgbWFwOiAiUGF5bWVudF9sb2NhdGlvbklkX2ZrZXkiKQogIEBAaW5kZXgoW3BheW1lbnRNZXRob2RJZF0sIG1hcDogIlBheW1lbnRfcGF5bWVudE1ldGhvZElkX2ZrZXkiKQogIEBAaW5kZXgoW0NVU1RfSURdLCBtYXA6ICJQYXltZW50X0NVU1RfSURfZmtleSIpCiAgQEBpbmRleChbcGF5bWVudFJlY29yZElkXSwgbWFwOiAiUGF5bWVudF9wYXltZW50UmVjb3JkSWRfZmtleSIpCn0KCm1vZGVsIFBheW1lbnRSZWNvcmQgewogIGlkICAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBsb2NhdGlvbklkICAgICAgSW50CiAgbW9udGggICAgICAgICAgIEludAogIHllYXIgICAgICAgICAgICBJbnQKICBDVVNUX0lEICAgICAgICAgSW50PwogIHJlbWFpbmluZ0Ftb3VudCBJbnQgICAgICAgQGRlZmF1bHQoMCkKICB0b3RhbFBhaWQgICAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApCiAgdG90YWxSZW50ICAgICAgIEludAogIHBheW1lbnRzICAgICAgICBQYXltZW50W10KICBjdXN0ICAgICAgICAgICAgVXNlcj8gICAgIEByZWxhdGlvbihmaWVsZHM6IFtDVVNUX0lEXSwgcmVmZXJlbmNlczogW2lkXSkKICBsb2NhdGlvbiAgICAgICAgTG9jYXRpb24gIEByZWxhdGlvbihmaWVsZHM6IFtsb2NhdGlvbklkXSwgcmVmZXJlbmNlczogW2lkXSkKCiAgQEBpbmRleChbbG9jYXRpb25JZF0sIG1hcDogIlBheW1lbnRSZWNvcmRfbG9jYXRpb25JZF9ma2V5IikKICBAQGluZGV4KFtDVVNUX0lEXSwgbWFwOiAiUGF5bWVudFJlY29yZF9DVVNUX0lEX2ZrZXkiKQp9Cgptb2RlbCBQYXltZW50TWV0aG9kIHsKICBpZCAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBuYW1lICAgICBTdHJpbmcgICAgQHVuaXF1ZQogIHBheW1lbnRzIFBheW1lbnRbXQp9Cgptb2RlbCBJbnZvaWNlIHsKICBpZCAgICAgICAgIEludCAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbG9jYXRpb25JZCBJbnQKICBkYXRlICAgICAgIERhdGVUaW1lCiAgQ1VTVF9JRCAgICBJbnQ/CiAgY3VzdCAgICAgICBVc2VyPyAgICBAcmVsYXRpb24oZmllbGRzOiBbQ1VTVF9JRF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgbG9jYXRpb24gICBMb2NhdGlvbiBAcmVsYXRpb24oZmllbGRzOiBbbG9jYXRpb25JZF0sIHJlZmVyZW5jZXM6IFtpZF0pCgogIEBAaW5kZXgoW2xvY2F0aW9uSWRdLCBtYXA6ICJJbnZvaWNlX2xvY2F0aW9uSWRfZmtleSIpCiAgQEBpbmRleChbQ1VTVF9JRF0sIG1hcDogIkludm9pY2VfQ1VTVF9JRF9ma2V5IikKfQoKbW9kZWwgUGF5bWVudFNjaGVkdWxlIHsKICBpZCAgICAgICAgIEludCAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbG9jYXRpb25JZCBJbnQKICBkdWVEYXRlICAgIERhdGVUaW1lCiAgQ1VTVF9JRCAgICBJbnQ/CiAgY3VzdCAgICAgICBVc2VyPyAgICBAcmVsYXRpb24oZmllbGRzOiBbQ1VTVF9JRF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgbG9jYXRpb24gICBMb2NhdGlvbiBAcmVsYXRpb24oZmllbGRzOiBbbG9jYXRpb25JZF0sIHJlZmVyZW5jZXM6IFtpZF0pCgogIEBAaW5kZXgoW2xvY2F0aW9uSWRdLCBtYXA6ICJQYXltZW50U2NoZWR1bGVfbG9jYXRpb25JZF9ma2V5IikKICBAQGluZGV4KFtDVVNUX0lEXSwgbWFwOiAiUGF5bWVudFNjaGVkdWxlX0NVU1RfSURfZmtleSIpCn0KCm1vZGVsIFJlbnRIaXN0b3J5IHsKICBpZCAgICAgICAgIEludCAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbG9jYXRpb25JZCBJbnQKICBtb250aCAgICAgIEludAogIHllYXIgICAgICAgSW50CiAgcmVudEFtb3VudCBJbnQKICBjcmVhdGVkQXQgIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQogIENVU1RfSUQgICAgSW50PwogIGN1c3QgICAgICAgVXNlcj8gICAgQHJlbGF0aW9uKGZpZWxkczogW0NVU1RfSURdLCByZWZlcmVuY2VzOiBbaWRdKQogIGxvY2F0aW9uICAgTG9jYXRpb24gQHJlbGF0aW9uKGZpZWxkczogW2xvY2F0aW9uSWRdLCByZWZlcmVuY2VzOiBbaWRdKQoKICBAQHVuaXF1ZShbbG9jYXRpb25JZCwgbW9udGgsIHllYXJdKQogIEBAaW5kZXgoW0NVU1RfSURdLCBtYXA6ICJSZW50SGlzdG9yeV9DVVNUX0lEX2ZrZXkiKQp9Cg==",
  "inlineSchemaHash": "af2b26a3bd99fb23e5be25cf3744481056007d98ea97c70973548753afba0e7b",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isRenter\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accessToken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"picture\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"CUST_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dni\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"invoices\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Invoice\",\"relationName\":\"InvoiceToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"keys\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Key\",\"relationName\":\"KeyToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"leaseContractsAsCust\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LeaseContract\",\"relationName\":\"LeaseContractCust\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"leaseContractsAsRenter\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LeaseContract\",\"relationName\":\"LeaseContractRenter\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Location\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Location\",\"relationName\":\"LocationToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rentedLocations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Location\",\"relationName\":\"renter\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Payment\",\"relationName\":\"PaymentToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PaymentRecord\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PaymentRecord\",\"relationName\":\"PaymentRecordToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentSchedules\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PaymentSchedule\",\"relationName\":\"PaymentScheduleToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"priceAdjustments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PriceAdjustment\",\"relationName\":\"PriceAdjustmentToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RentHistory\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RentHistory\",\"relationName\":\"RentHistoryToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cust\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UserCust\",\"relationFromFields\":[\"CUST_ID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdUsers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UserCust\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Location\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"renterId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CUST_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"AdjustmentLocation\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AdjustmentLocation\",\"relationName\":\"AdjustmentLocationToLocation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"invoices\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Invoice\",\"relationName\":\"InvoiceToLocation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"keys\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Key\",\"relationName\":\"KeyToLocation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contracts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LeaseContract\",\"relationName\":\"LeaseContractToLocation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cust\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"LocationToUser\",\"relationFromFields\":[\"CUST_ID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"renter\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"renter\",\"relationFromFields\":[\"renterId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Payment\",\"relationName\":\"LocationToPayment\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PaymentRecord\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PaymentRecord\",\"relationName\":\"LocationToPaymentRecord\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentSchedules\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PaymentSchedule\",\"relationName\":\"LocationToPaymentSchedule\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rentHistory\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RentHistory\",\"relationName\":\"LocationToRentHistory\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"adjustments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PriceAdjustment\",\"relationName\":\"AdjustmentLocations\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"LeaseContract\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"locationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"finishedDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rentAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cancelled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pdfPath\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CUST_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"renterId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cust\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"LeaseContractCust\",\"relationFromFields\":[\"CUST_ID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Location\",\"relationName\":\"LeaseContractToLocation\",\"relationFromFields\":[\"locationId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"renter\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"LeaseContractRenter\",\"relationFromFields\":[\"renterId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Key\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"locationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"issueDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"returnDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CUST_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cust\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"KeyToUser\",\"relationFromFields\":[\"CUST_ID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Location\",\"relationName\":\"KeyToLocation\",\"relationFromFields\":[\"locationId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PriceAdjustment\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CUST_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"period\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"applyToAll\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastExecutedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"AdjustmentLocation\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AdjustmentLocation\",\"relationName\":\"AdjustmentLocationToPriceAdjustment\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cust\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"PriceAdjustmentToUser\",\"relationFromFields\":[\"CUST_ID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"locations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Location\",\"relationName\":\"AdjustmentLocations\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AdjustmentLocation\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"priceAdjustmentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"locationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Location\",\"relationName\":\"AdjustmentLocationToLocation\",\"relationFromFields\":[\"locationId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"priceAdjustment\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PriceAdjustment\",\"relationName\":\"AdjustmentLocationToPriceAdjustment\",\"relationFromFields\":[\"priceAdjustmentId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Payment\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"locationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentMethodId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CUST_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentRecordId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"month\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"day\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"year\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cust\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"PaymentToUser\",\"relationFromFields\":[\"CUST_ID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Location\",\"relationName\":\"LocationToPayment\",\"relationFromFields\":[\"locationId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentMethod\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PaymentMethod\",\"relationName\":\"PaymentToPaymentMethod\",\"relationFromFields\":[\"paymentMethodId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentRecord\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PaymentRecord\",\"relationName\":\"PaymentToPaymentRecord\",\"relationFromFields\":[\"paymentRecordId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PaymentRecord\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"locationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"month\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"year\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CUST_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remainingAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalPaid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalRent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Payment\",\"relationName\":\"PaymentToPaymentRecord\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cust\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"PaymentRecordToUser\",\"relationFromFields\":[\"CUST_ID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Location\",\"relationName\":\"LocationToPaymentRecord\",\"relationFromFields\":[\"locationId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PaymentMethod\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Payment\",\"relationName\":\"PaymentToPaymentMethod\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Invoice\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"locationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CUST_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cust\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"InvoiceToUser\",\"relationFromFields\":[\"CUST_ID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Location\",\"relationName\":\"InvoiceToLocation\",\"relationFromFields\":[\"locationId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PaymentSchedule\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"locationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dueDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CUST_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cust\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"PaymentScheduleToUser\",\"relationFromFields\":[\"CUST_ID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Location\",\"relationName\":\"LocationToPaymentSchedule\",\"relationFromFields\":[\"locationId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RentHistory\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"locationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"month\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"year\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rentAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CUST_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cust\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"RentHistoryToUser\",\"relationFromFields\":[\"CUST_ID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Location\",\"relationName\":\"LocationToRentHistory\",\"relationFromFields\":[\"locationId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"locationId\",\"month\",\"year\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"locationId\",\"month\",\"year\"]}],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

