
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model LeaseContract
 * 
 */
export type LeaseContract = $Result.DefaultSelection<Prisma.$LeaseContractPayload>
/**
 * Model Key
 * 
 */
export type Key = $Result.DefaultSelection<Prisma.$KeyPayload>
/**
 * Model PriceAdjustment
 * 
 */
export type PriceAdjustment = $Result.DefaultSelection<Prisma.$PriceAdjustmentPayload>
/**
 * Model AdjustmentLocation
 * 
 */
export type AdjustmentLocation = $Result.DefaultSelection<Prisma.$AdjustmentLocationPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model PaymentRecord
 * 
 */
export type PaymentRecord = $Result.DefaultSelection<Prisma.$PaymentRecordPayload>
/**
 * Model PaymentMethod
 * 
 */
export type PaymentMethod = $Result.DefaultSelection<Prisma.$PaymentMethodPayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model PaymentSchedule
 * 
 */
export type PaymentSchedule = $Result.DefaultSelection<Prisma.$PaymentSchedulePayload>
/**
 * Model RentHistory
 * 
 */
export type RentHistory = $Result.DefaultSelection<Prisma.$RentHistoryPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs>;

  /**
   * `prisma.leaseContract`: Exposes CRUD operations for the **LeaseContract** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeaseContracts
    * const leaseContracts = await prisma.leaseContract.findMany()
    * ```
    */
  get leaseContract(): Prisma.LeaseContractDelegate<ExtArgs>;

  /**
   * `prisma.key`: Exposes CRUD operations for the **Key** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Keys
    * const keys = await prisma.key.findMany()
    * ```
    */
  get key(): Prisma.KeyDelegate<ExtArgs>;

  /**
   * `prisma.priceAdjustment`: Exposes CRUD operations for the **PriceAdjustment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PriceAdjustments
    * const priceAdjustments = await prisma.priceAdjustment.findMany()
    * ```
    */
  get priceAdjustment(): Prisma.PriceAdjustmentDelegate<ExtArgs>;

  /**
   * `prisma.adjustmentLocation`: Exposes CRUD operations for the **AdjustmentLocation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdjustmentLocations
    * const adjustmentLocations = await prisma.adjustmentLocation.findMany()
    * ```
    */
  get adjustmentLocation(): Prisma.AdjustmentLocationDelegate<ExtArgs>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs>;

  /**
   * `prisma.paymentRecord`: Exposes CRUD operations for the **PaymentRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentRecords
    * const paymentRecords = await prisma.paymentRecord.findMany()
    * ```
    */
  get paymentRecord(): Prisma.PaymentRecordDelegate<ExtArgs>;

  /**
   * `prisma.paymentMethod`: Exposes CRUD operations for the **PaymentMethod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentMethods
    * const paymentMethods = await prisma.paymentMethod.findMany()
    * ```
    */
  get paymentMethod(): Prisma.PaymentMethodDelegate<ExtArgs>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs>;

  /**
   * `prisma.paymentSchedule`: Exposes CRUD operations for the **PaymentSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentSchedules
    * const paymentSchedules = await prisma.paymentSchedule.findMany()
    * ```
    */
  get paymentSchedule(): Prisma.PaymentScheduleDelegate<ExtArgs>;

  /**
   * `prisma.rentHistory`: Exposes CRUD operations for the **RentHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RentHistories
    * const rentHistories = await prisma.rentHistory.findMany()
    * ```
    */
  get rentHistory(): Prisma.RentHistoryDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "location" | "leaseContract" | "key" | "priceAdjustment" | "adjustmentLocation" | "payment" | "paymentRecord" | "paymentMethod" | "invoice" | "paymentSchedule" | "rentHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      LeaseContract: {
        payload: Prisma.$LeaseContractPayload<ExtArgs>
        fields: Prisma.LeaseContractFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaseContractFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseContractPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaseContractFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseContractPayload>
          }
          findFirst: {
            args: Prisma.LeaseContractFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseContractPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaseContractFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseContractPayload>
          }
          findMany: {
            args: Prisma.LeaseContractFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseContractPayload>[]
          }
          create: {
            args: Prisma.LeaseContractCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseContractPayload>
          }
          createMany: {
            args: Prisma.LeaseContractCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LeaseContractDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseContractPayload>
          }
          update: {
            args: Prisma.LeaseContractUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseContractPayload>
          }
          deleteMany: {
            args: Prisma.LeaseContractDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaseContractUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LeaseContractUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseContractPayload>
          }
          aggregate: {
            args: Prisma.LeaseContractAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeaseContract>
          }
          groupBy: {
            args: Prisma.LeaseContractGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaseContractGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaseContractCountArgs<ExtArgs>
            result: $Utils.Optional<LeaseContractCountAggregateOutputType> | number
          }
        }
      }
      Key: {
        payload: Prisma.$KeyPayload<ExtArgs>
        fields: Prisma.KeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>
          }
          findFirst: {
            args: Prisma.KeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>
          }
          findMany: {
            args: Prisma.KeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>[]
          }
          create: {
            args: Prisma.KeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>
          }
          createMany: {
            args: Prisma.KeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.KeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>
          }
          update: {
            args: Prisma.KeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>
          }
          deleteMany: {
            args: Prisma.KeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.KeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>
          }
          aggregate: {
            args: Prisma.KeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKey>
          }
          groupBy: {
            args: Prisma.KeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<KeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.KeyCountArgs<ExtArgs>
            result: $Utils.Optional<KeyCountAggregateOutputType> | number
          }
        }
      }
      PriceAdjustment: {
        payload: Prisma.$PriceAdjustmentPayload<ExtArgs>
        fields: Prisma.PriceAdjustmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PriceAdjustmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAdjustmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PriceAdjustmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAdjustmentPayload>
          }
          findFirst: {
            args: Prisma.PriceAdjustmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAdjustmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PriceAdjustmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAdjustmentPayload>
          }
          findMany: {
            args: Prisma.PriceAdjustmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAdjustmentPayload>[]
          }
          create: {
            args: Prisma.PriceAdjustmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAdjustmentPayload>
          }
          createMany: {
            args: Prisma.PriceAdjustmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PriceAdjustmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAdjustmentPayload>
          }
          update: {
            args: Prisma.PriceAdjustmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAdjustmentPayload>
          }
          deleteMany: {
            args: Prisma.PriceAdjustmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PriceAdjustmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PriceAdjustmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAdjustmentPayload>
          }
          aggregate: {
            args: Prisma.PriceAdjustmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePriceAdjustment>
          }
          groupBy: {
            args: Prisma.PriceAdjustmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PriceAdjustmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PriceAdjustmentCountArgs<ExtArgs>
            result: $Utils.Optional<PriceAdjustmentCountAggregateOutputType> | number
          }
        }
      }
      AdjustmentLocation: {
        payload: Prisma.$AdjustmentLocationPayload<ExtArgs>
        fields: Prisma.AdjustmentLocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdjustmentLocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdjustmentLocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdjustmentLocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdjustmentLocationPayload>
          }
          findFirst: {
            args: Prisma.AdjustmentLocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdjustmentLocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdjustmentLocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdjustmentLocationPayload>
          }
          findMany: {
            args: Prisma.AdjustmentLocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdjustmentLocationPayload>[]
          }
          create: {
            args: Prisma.AdjustmentLocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdjustmentLocationPayload>
          }
          createMany: {
            args: Prisma.AdjustmentLocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdjustmentLocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdjustmentLocationPayload>
          }
          update: {
            args: Prisma.AdjustmentLocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdjustmentLocationPayload>
          }
          deleteMany: {
            args: Prisma.AdjustmentLocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdjustmentLocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdjustmentLocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdjustmentLocationPayload>
          }
          aggregate: {
            args: Prisma.AdjustmentLocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdjustmentLocation>
          }
          groupBy: {
            args: Prisma.AdjustmentLocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdjustmentLocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdjustmentLocationCountArgs<ExtArgs>
            result: $Utils.Optional<AdjustmentLocationCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      PaymentRecord: {
        payload: Prisma.$PaymentRecordPayload<ExtArgs>
        fields: Prisma.PaymentRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>
          }
          findFirst: {
            args: Prisma.PaymentRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>
          }
          findMany: {
            args: Prisma.PaymentRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>[]
          }
          create: {
            args: Prisma.PaymentRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>
          }
          createMany: {
            args: Prisma.PaymentRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>
          }
          update: {
            args: Prisma.PaymentRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>
          }
          deleteMany: {
            args: Prisma.PaymentRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>
          }
          aggregate: {
            args: Prisma.PaymentRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentRecord>
          }
          groupBy: {
            args: Prisma.PaymentRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentRecordCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentRecordCountAggregateOutputType> | number
          }
        }
      }
      PaymentMethod: {
        payload: Prisma.$PaymentMethodPayload<ExtArgs>
        fields: Prisma.PaymentMethodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentMethodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentMethodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          findFirst: {
            args: Prisma.PaymentMethodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentMethodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          findMany: {
            args: Prisma.PaymentMethodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>[]
          }
          create: {
            args: Prisma.PaymentMethodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          createMany: {
            args: Prisma.PaymentMethodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentMethodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          update: {
            args: Prisma.PaymentMethodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          deleteMany: {
            args: Prisma.PaymentMethodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentMethodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentMethodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          aggregate: {
            args: Prisma.PaymentMethodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentMethod>
          }
          groupBy: {
            args: Prisma.PaymentMethodGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentMethodGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentMethodCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentMethodCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      PaymentSchedule: {
        payload: Prisma.$PaymentSchedulePayload<ExtArgs>
        fields: Prisma.PaymentScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentSchedulePayload>
          }
          findFirst: {
            args: Prisma.PaymentScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentSchedulePayload>
          }
          findMany: {
            args: Prisma.PaymentScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentSchedulePayload>[]
          }
          create: {
            args: Prisma.PaymentScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentSchedulePayload>
          }
          createMany: {
            args: Prisma.PaymentScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentSchedulePayload>
          }
          update: {
            args: Prisma.PaymentScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentSchedulePayload>
          }
          deleteMany: {
            args: Prisma.PaymentScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentSchedulePayload>
          }
          aggregate: {
            args: Prisma.PaymentScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentSchedule>
          }
          groupBy: {
            args: Prisma.PaymentScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentScheduleCountAggregateOutputType> | number
          }
        }
      }
      RentHistory: {
        payload: Prisma.$RentHistoryPayload<ExtArgs>
        fields: Prisma.RentHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RentHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RentHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentHistoryPayload>
          }
          findFirst: {
            args: Prisma.RentHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RentHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentHistoryPayload>
          }
          findMany: {
            args: Prisma.RentHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentHistoryPayload>[]
          }
          create: {
            args: Prisma.RentHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentHistoryPayload>
          }
          createMany: {
            args: Prisma.RentHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RentHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentHistoryPayload>
          }
          update: {
            args: Prisma.RentHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentHistoryPayload>
          }
          deleteMany: {
            args: Prisma.RentHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RentHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RentHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentHistoryPayload>
          }
          aggregate: {
            args: Prisma.RentHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRentHistory>
          }
          groupBy: {
            args: Prisma.RentHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<RentHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.RentHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<RentHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    invoices: number
    keys: number
    leaseContractsAsCust: number
    leaseContractsAsRenter: number
    Location: number
    rentedLocations: number
    payments: number
    PaymentRecord: number
    paymentSchedules: number
    priceAdjustments: number
    RentHistory: number
    createdUsers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | UserCountOutputTypeCountInvoicesArgs
    keys?: boolean | UserCountOutputTypeCountKeysArgs
    leaseContractsAsCust?: boolean | UserCountOutputTypeCountLeaseContractsAsCustArgs
    leaseContractsAsRenter?: boolean | UserCountOutputTypeCountLeaseContractsAsRenterArgs
    Location?: boolean | UserCountOutputTypeCountLocationArgs
    rentedLocations?: boolean | UserCountOutputTypeCountRentedLocationsArgs
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
    PaymentRecord?: boolean | UserCountOutputTypeCountPaymentRecordArgs
    paymentSchedules?: boolean | UserCountOutputTypeCountPaymentSchedulesArgs
    priceAdjustments?: boolean | UserCountOutputTypeCountPriceAdjustmentsArgs
    RentHistory?: boolean | UserCountOutputTypeCountRentHistoryArgs
    createdUsers?: boolean | UserCountOutputTypeCountCreatedUsersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLeaseContractsAsCustArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaseContractWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLeaseContractsAsRenterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaseContractWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRentedLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentRecordWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentScheduleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPriceAdjustmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceAdjustmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRentHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    AdjustmentLocation: number
    invoices: number
    keys: number
    contracts: number
    payments: number
    PaymentRecord: number
    paymentSchedules: number
    rentHistory: number
    adjustments: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AdjustmentLocation?: boolean | LocationCountOutputTypeCountAdjustmentLocationArgs
    invoices?: boolean | LocationCountOutputTypeCountInvoicesArgs
    keys?: boolean | LocationCountOutputTypeCountKeysArgs
    contracts?: boolean | LocationCountOutputTypeCountContractsArgs
    payments?: boolean | LocationCountOutputTypeCountPaymentsArgs
    PaymentRecord?: boolean | LocationCountOutputTypeCountPaymentRecordArgs
    paymentSchedules?: boolean | LocationCountOutputTypeCountPaymentSchedulesArgs
    rentHistory?: boolean | LocationCountOutputTypeCountRentHistoryArgs
    adjustments?: boolean | LocationCountOutputTypeCountAdjustmentsArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountAdjustmentLocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdjustmentLocationWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeyWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountContractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaseContractWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountPaymentRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentRecordWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountPaymentSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentScheduleWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountRentHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentHistoryWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountAdjustmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceAdjustmentWhereInput
  }


  /**
   * Count Type PriceAdjustmentCountOutputType
   */

  export type PriceAdjustmentCountOutputType = {
    AdjustmentLocation: number
    locations: number
  }

  export type PriceAdjustmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AdjustmentLocation?: boolean | PriceAdjustmentCountOutputTypeCountAdjustmentLocationArgs
    locations?: boolean | PriceAdjustmentCountOutputTypeCountLocationsArgs
  }

  // Custom InputTypes
  /**
   * PriceAdjustmentCountOutputType without action
   */
  export type PriceAdjustmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAdjustmentCountOutputType
     */
    select?: PriceAdjustmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PriceAdjustmentCountOutputType without action
   */
  export type PriceAdjustmentCountOutputTypeCountAdjustmentLocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdjustmentLocationWhereInput
  }

  /**
   * PriceAdjustmentCountOutputType without action
   */
  export type PriceAdjustmentCountOutputTypeCountLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
  }


  /**
   * Count Type PaymentRecordCountOutputType
   */

  export type PaymentRecordCountOutputType = {
    payments: number
  }

  export type PaymentRecordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | PaymentRecordCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * PaymentRecordCountOutputType without action
   */
  export type PaymentRecordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecordCountOutputType
     */
    select?: PaymentRecordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentRecordCountOutputType without action
   */
  export type PaymentRecordCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type PaymentMethodCountOutputType
   */

  export type PaymentMethodCountOutputType = {
    payments: number
  }

  export type PaymentMethodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | PaymentMethodCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * PaymentMethodCountOutputType without action
   */
  export type PaymentMethodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethodCountOutputType
     */
    select?: PaymentMethodCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentMethodCountOutputType without action
   */
  export type PaymentMethodCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    CUST_ID: number | null
    dni: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    CUST_ID: number | null
    dni: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    isRenter: boolean | null
    accessToken: string | null
    firstName: string | null
    lastName: string | null
    picture: string | null
    createdAt: Date | null
    password: string | null
    updatedAt: Date | null
    CUST_ID: number | null
    dni: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    isRenter: boolean | null
    accessToken: string | null
    firstName: string | null
    lastName: string | null
    picture: string | null
    createdAt: Date | null
    password: string | null
    updatedAt: Date | null
    CUST_ID: number | null
    dni: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    isRenter: number
    accessToken: number
    firstName: number
    lastName: number
    picture: number
    createdAt: number
    password: number
    updatedAt: number
    CUST_ID: number
    dni: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    CUST_ID?: true
    dni?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    CUST_ID?: true
    dni?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    isRenter?: true
    accessToken?: true
    firstName?: true
    lastName?: true
    picture?: true
    createdAt?: true
    password?: true
    updatedAt?: true
    CUST_ID?: true
    dni?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    isRenter?: true
    accessToken?: true
    firstName?: true
    lastName?: true
    picture?: true
    createdAt?: true
    password?: true
    updatedAt?: true
    CUST_ID?: true
    dni?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    isRenter?: true
    accessToken?: true
    firstName?: true
    lastName?: true
    picture?: true
    createdAt?: true
    password?: true
    updatedAt?: true
    CUST_ID?: true
    dni?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    isRenter: boolean
    accessToken: string | null
    firstName: string | null
    lastName: string | null
    picture: string | null
    createdAt: Date
    password: string | null
    updatedAt: Date | null
    CUST_ID: number | null
    dni: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    isRenter?: boolean
    accessToken?: boolean
    firstName?: boolean
    lastName?: boolean
    picture?: boolean
    createdAt?: boolean
    password?: boolean
    updatedAt?: boolean
    CUST_ID?: boolean
    dni?: boolean
    invoices?: boolean | User$invoicesArgs<ExtArgs>
    keys?: boolean | User$keysArgs<ExtArgs>
    leaseContractsAsCust?: boolean | User$leaseContractsAsCustArgs<ExtArgs>
    leaseContractsAsRenter?: boolean | User$leaseContractsAsRenterArgs<ExtArgs>
    Location?: boolean | User$LocationArgs<ExtArgs>
    rentedLocations?: boolean | User$rentedLocationsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    PaymentRecord?: boolean | User$PaymentRecordArgs<ExtArgs>
    paymentSchedules?: boolean | User$paymentSchedulesArgs<ExtArgs>
    priceAdjustments?: boolean | User$priceAdjustmentsArgs<ExtArgs>
    RentHistory?: boolean | User$RentHistoryArgs<ExtArgs>
    cust?: boolean | User$custArgs<ExtArgs>
    createdUsers?: boolean | User$createdUsersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    isRenter?: boolean
    accessToken?: boolean
    firstName?: boolean
    lastName?: boolean
    picture?: boolean
    createdAt?: boolean
    password?: boolean
    updatedAt?: boolean
    CUST_ID?: boolean
    dni?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | User$invoicesArgs<ExtArgs>
    keys?: boolean | User$keysArgs<ExtArgs>
    leaseContractsAsCust?: boolean | User$leaseContractsAsCustArgs<ExtArgs>
    leaseContractsAsRenter?: boolean | User$leaseContractsAsRenterArgs<ExtArgs>
    Location?: boolean | User$LocationArgs<ExtArgs>
    rentedLocations?: boolean | User$rentedLocationsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    PaymentRecord?: boolean | User$PaymentRecordArgs<ExtArgs>
    paymentSchedules?: boolean | User$paymentSchedulesArgs<ExtArgs>
    priceAdjustments?: boolean | User$priceAdjustmentsArgs<ExtArgs>
    RentHistory?: boolean | User$RentHistoryArgs<ExtArgs>
    cust?: boolean | User$custArgs<ExtArgs>
    createdUsers?: boolean | User$createdUsersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
      keys: Prisma.$KeyPayload<ExtArgs>[]
      leaseContractsAsCust: Prisma.$LeaseContractPayload<ExtArgs>[]
      leaseContractsAsRenter: Prisma.$LeaseContractPayload<ExtArgs>[]
      Location: Prisma.$LocationPayload<ExtArgs>[]
      rentedLocations: Prisma.$LocationPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      PaymentRecord: Prisma.$PaymentRecordPayload<ExtArgs>[]
      paymentSchedules: Prisma.$PaymentSchedulePayload<ExtArgs>[]
      priceAdjustments: Prisma.$PriceAdjustmentPayload<ExtArgs>[]
      RentHistory: Prisma.$RentHistoryPayload<ExtArgs>[]
      cust: Prisma.$UserPayload<ExtArgs> | null
      createdUsers: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      isRenter: boolean
      accessToken: string | null
      firstName: string | null
      lastName: string | null
      picture: string | null
      createdAt: Date
      password: string | null
      updatedAt: Date | null
      CUST_ID: number | null
      dni: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoices<T extends User$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, User$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany"> | Null>
    keys<T extends User$keysArgs<ExtArgs> = {}>(args?: Subset<T, User$keysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, "findMany"> | Null>
    leaseContractsAsCust<T extends User$leaseContractsAsCustArgs<ExtArgs> = {}>(args?: Subset<T, User$leaseContractsAsCustArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaseContractPayload<ExtArgs>, T, "findMany"> | Null>
    leaseContractsAsRenter<T extends User$leaseContractsAsRenterArgs<ExtArgs> = {}>(args?: Subset<T, User$leaseContractsAsRenterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaseContractPayload<ExtArgs>, T, "findMany"> | Null>
    Location<T extends User$LocationArgs<ExtArgs> = {}>(args?: Subset<T, User$LocationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany"> | Null>
    rentedLocations<T extends User$rentedLocationsArgs<ExtArgs> = {}>(args?: Subset<T, User$rentedLocationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany"> | Null>
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany"> | Null>
    PaymentRecord<T extends User$PaymentRecordArgs<ExtArgs> = {}>(args?: Subset<T, User$PaymentRecordArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findMany"> | Null>
    paymentSchedules<T extends User$paymentSchedulesArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentSchedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentSchedulePayload<ExtArgs>, T, "findMany"> | Null>
    priceAdjustments<T extends User$priceAdjustmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$priceAdjustmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceAdjustmentPayload<ExtArgs>, T, "findMany"> | Null>
    RentHistory<T extends User$RentHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$RentHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentHistoryPayload<ExtArgs>, T, "findMany"> | Null>
    cust<T extends User$custArgs<ExtArgs> = {}>(args?: Subset<T, User$custArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    createdUsers<T extends User$createdUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$createdUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly isRenter: FieldRef<"User", 'Boolean'>
    readonly accessToken: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly picture: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly password: FieldRef<"User", 'String'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly CUST_ID: FieldRef<"User", 'Int'>
    readonly dni: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.invoices
   */
  export type User$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * User.keys
   */
  export type User$keysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyInclude<ExtArgs> | null
    where?: KeyWhereInput
    orderBy?: KeyOrderByWithRelationInput | KeyOrderByWithRelationInput[]
    cursor?: KeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KeyScalarFieldEnum | KeyScalarFieldEnum[]
  }

  /**
   * User.leaseContractsAsCust
   */
  export type User$leaseContractsAsCustArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseContract
     */
    select?: LeaseContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseContractInclude<ExtArgs> | null
    where?: LeaseContractWhereInput
    orderBy?: LeaseContractOrderByWithRelationInput | LeaseContractOrderByWithRelationInput[]
    cursor?: LeaseContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaseContractScalarFieldEnum | LeaseContractScalarFieldEnum[]
  }

  /**
   * User.leaseContractsAsRenter
   */
  export type User$leaseContractsAsRenterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseContract
     */
    select?: LeaseContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseContractInclude<ExtArgs> | null
    where?: LeaseContractWhereInput
    orderBy?: LeaseContractOrderByWithRelationInput | LeaseContractOrderByWithRelationInput[]
    cursor?: LeaseContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaseContractScalarFieldEnum | LeaseContractScalarFieldEnum[]
  }

  /**
   * User.Location
   */
  export type User$LocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    cursor?: LocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * User.rentedLocations
   */
  export type User$rentedLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    cursor?: LocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * User.payments
   */
  export type User$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User.PaymentRecord
   */
  export type User$PaymentRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    where?: PaymentRecordWhereInput
    orderBy?: PaymentRecordOrderByWithRelationInput | PaymentRecordOrderByWithRelationInput[]
    cursor?: PaymentRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentRecordScalarFieldEnum | PaymentRecordScalarFieldEnum[]
  }

  /**
   * User.paymentSchedules
   */
  export type User$paymentSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentSchedule
     */
    select?: PaymentScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentScheduleInclude<ExtArgs> | null
    where?: PaymentScheduleWhereInput
    orderBy?: PaymentScheduleOrderByWithRelationInput | PaymentScheduleOrderByWithRelationInput[]
    cursor?: PaymentScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScheduleScalarFieldEnum | PaymentScheduleScalarFieldEnum[]
  }

  /**
   * User.priceAdjustments
   */
  export type User$priceAdjustmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAdjustment
     */
    select?: PriceAdjustmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAdjustmentInclude<ExtArgs> | null
    where?: PriceAdjustmentWhereInput
    orderBy?: PriceAdjustmentOrderByWithRelationInput | PriceAdjustmentOrderByWithRelationInput[]
    cursor?: PriceAdjustmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PriceAdjustmentScalarFieldEnum | PriceAdjustmentScalarFieldEnum[]
  }

  /**
   * User.RentHistory
   */
  export type User$RentHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentHistory
     */
    select?: RentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentHistoryInclude<ExtArgs> | null
    where?: RentHistoryWhereInput
    orderBy?: RentHistoryOrderByWithRelationInput | RentHistoryOrderByWithRelationInput[]
    cursor?: RentHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentHistoryScalarFieldEnum | RentHistoryScalarFieldEnum[]
  }

  /**
   * User.cust
   */
  export type User$custArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User.createdUsers
   */
  export type User$createdUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationAvgAggregateOutputType = {
    id: number | null
    renterId: number | null
    CUST_ID: number | null
  }

  export type LocationSumAggregateOutputType = {
    id: number | null
    renterId: number | null
    CUST_ID: number | null
  }

  export type LocationMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    renterId: number | null
    CUST_ID: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    renterId: number | null
    CUST_ID: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    name: number
    address: number
    renterId: number
    CUST_ID: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LocationAvgAggregateInputType = {
    id?: true
    renterId?: true
    CUST_ID?: true
  }

  export type LocationSumAggregateInputType = {
    id?: true
    renterId?: true
    CUST_ID?: true
  }

  export type LocationMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    renterId?: true
    CUST_ID?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    renterId?: true
    CUST_ID?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    renterId?: true
    CUST_ID?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _avg?: LocationAvgAggregateInputType
    _sum?: LocationSumAggregateInputType
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: number
    name: string
    address: string
    renterId: number
    CUST_ID: number | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    renterId?: boolean
    CUST_ID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    AdjustmentLocation?: boolean | Location$AdjustmentLocationArgs<ExtArgs>
    invoices?: boolean | Location$invoicesArgs<ExtArgs>
    keys?: boolean | Location$keysArgs<ExtArgs>
    contracts?: boolean | Location$contractsArgs<ExtArgs>
    cust?: boolean | Location$custArgs<ExtArgs>
    renter?: boolean | UserDefaultArgs<ExtArgs>
    payments?: boolean | Location$paymentsArgs<ExtArgs>
    PaymentRecord?: boolean | Location$PaymentRecordArgs<ExtArgs>
    paymentSchedules?: boolean | Location$paymentSchedulesArgs<ExtArgs>
    rentHistory?: boolean | Location$rentHistoryArgs<ExtArgs>
    adjustments?: boolean | Location$adjustmentsArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>


  export type LocationSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    renterId?: boolean
    CUST_ID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AdjustmentLocation?: boolean | Location$AdjustmentLocationArgs<ExtArgs>
    invoices?: boolean | Location$invoicesArgs<ExtArgs>
    keys?: boolean | Location$keysArgs<ExtArgs>
    contracts?: boolean | Location$contractsArgs<ExtArgs>
    cust?: boolean | Location$custArgs<ExtArgs>
    renter?: boolean | UserDefaultArgs<ExtArgs>
    payments?: boolean | Location$paymentsArgs<ExtArgs>
    PaymentRecord?: boolean | Location$PaymentRecordArgs<ExtArgs>
    paymentSchedules?: boolean | Location$paymentSchedulesArgs<ExtArgs>
    rentHistory?: boolean | Location$rentHistoryArgs<ExtArgs>
    adjustments?: boolean | Location$adjustmentsArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      AdjustmentLocation: Prisma.$AdjustmentLocationPayload<ExtArgs>[]
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
      keys: Prisma.$KeyPayload<ExtArgs>[]
      contracts: Prisma.$LeaseContractPayload<ExtArgs>[]
      cust: Prisma.$UserPayload<ExtArgs> | null
      renter: Prisma.$UserPayload<ExtArgs>
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      PaymentRecord: Prisma.$PaymentRecordPayload<ExtArgs>[]
      paymentSchedules: Prisma.$PaymentSchedulePayload<ExtArgs>[]
      rentHistory: Prisma.$RentHistoryPayload<ExtArgs>[]
      adjustments: Prisma.$PriceAdjustmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      address: string
      renterId: number
      CUST_ID: number | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    AdjustmentLocation<T extends Location$AdjustmentLocationArgs<ExtArgs> = {}>(args?: Subset<T, Location$AdjustmentLocationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdjustmentLocationPayload<ExtArgs>, T, "findMany"> | Null>
    invoices<T extends Location$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, Location$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany"> | Null>
    keys<T extends Location$keysArgs<ExtArgs> = {}>(args?: Subset<T, Location$keysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, "findMany"> | Null>
    contracts<T extends Location$contractsArgs<ExtArgs> = {}>(args?: Subset<T, Location$contractsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaseContractPayload<ExtArgs>, T, "findMany"> | Null>
    cust<T extends Location$custArgs<ExtArgs> = {}>(args?: Subset<T, Location$custArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    renter<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    payments<T extends Location$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Location$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany"> | Null>
    PaymentRecord<T extends Location$PaymentRecordArgs<ExtArgs> = {}>(args?: Subset<T, Location$PaymentRecordArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findMany"> | Null>
    paymentSchedules<T extends Location$paymentSchedulesArgs<ExtArgs> = {}>(args?: Subset<T, Location$paymentSchedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentSchedulePayload<ExtArgs>, T, "findMany"> | Null>
    rentHistory<T extends Location$rentHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Location$rentHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentHistoryPayload<ExtArgs>, T, "findMany"> | Null>
    adjustments<T extends Location$adjustmentsArgs<ExtArgs> = {}>(args?: Subset<T, Location$adjustmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceAdjustmentPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Location model
   */ 
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'Int'>
    readonly name: FieldRef<"Location", 'String'>
    readonly address: FieldRef<"Location", 'String'>
    readonly renterId: FieldRef<"Location", 'Int'>
    readonly CUST_ID: FieldRef<"Location", 'Int'>
    readonly createdAt: FieldRef<"Location", 'DateTime'>
    readonly updatedAt: FieldRef<"Location", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
  }

  /**
   * Location.AdjustmentLocation
   */
  export type Location$AdjustmentLocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdjustmentLocation
     */
    select?: AdjustmentLocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdjustmentLocationInclude<ExtArgs> | null
    where?: AdjustmentLocationWhereInput
    orderBy?: AdjustmentLocationOrderByWithRelationInput | AdjustmentLocationOrderByWithRelationInput[]
    cursor?: AdjustmentLocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdjustmentLocationScalarFieldEnum | AdjustmentLocationScalarFieldEnum[]
  }

  /**
   * Location.invoices
   */
  export type Location$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Location.keys
   */
  export type Location$keysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyInclude<ExtArgs> | null
    where?: KeyWhereInput
    orderBy?: KeyOrderByWithRelationInput | KeyOrderByWithRelationInput[]
    cursor?: KeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KeyScalarFieldEnum | KeyScalarFieldEnum[]
  }

  /**
   * Location.contracts
   */
  export type Location$contractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseContract
     */
    select?: LeaseContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseContractInclude<ExtArgs> | null
    where?: LeaseContractWhereInput
    orderBy?: LeaseContractOrderByWithRelationInput | LeaseContractOrderByWithRelationInput[]
    cursor?: LeaseContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaseContractScalarFieldEnum | LeaseContractScalarFieldEnum[]
  }

  /**
   * Location.cust
   */
  export type Location$custArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Location.payments
   */
  export type Location$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Location.PaymentRecord
   */
  export type Location$PaymentRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    where?: PaymentRecordWhereInput
    orderBy?: PaymentRecordOrderByWithRelationInput | PaymentRecordOrderByWithRelationInput[]
    cursor?: PaymentRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentRecordScalarFieldEnum | PaymentRecordScalarFieldEnum[]
  }

  /**
   * Location.paymentSchedules
   */
  export type Location$paymentSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentSchedule
     */
    select?: PaymentScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentScheduleInclude<ExtArgs> | null
    where?: PaymentScheduleWhereInput
    orderBy?: PaymentScheduleOrderByWithRelationInput | PaymentScheduleOrderByWithRelationInput[]
    cursor?: PaymentScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScheduleScalarFieldEnum | PaymentScheduleScalarFieldEnum[]
  }

  /**
   * Location.rentHistory
   */
  export type Location$rentHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentHistory
     */
    select?: RentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentHistoryInclude<ExtArgs> | null
    where?: RentHistoryWhereInput
    orderBy?: RentHistoryOrderByWithRelationInput | RentHistoryOrderByWithRelationInput[]
    cursor?: RentHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentHistoryScalarFieldEnum | RentHistoryScalarFieldEnum[]
  }

  /**
   * Location.adjustments
   */
  export type Location$adjustmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAdjustment
     */
    select?: PriceAdjustmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAdjustmentInclude<ExtArgs> | null
    where?: PriceAdjustmentWhereInput
    orderBy?: PriceAdjustmentOrderByWithRelationInput | PriceAdjustmentOrderByWithRelationInput[]
    cursor?: PriceAdjustmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PriceAdjustmentScalarFieldEnum | PriceAdjustmentScalarFieldEnum[]
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Model LeaseContract
   */

  export type AggregateLeaseContract = {
    _count: LeaseContractCountAggregateOutputType | null
    _avg: LeaseContractAvgAggregateOutputType | null
    _sum: LeaseContractSumAggregateOutputType | null
    _min: LeaseContractMinAggregateOutputType | null
    _max: LeaseContractMaxAggregateOutputType | null
  }

  export type LeaseContractAvgAggregateOutputType = {
    id: number | null
    locationId: number | null
    rentAmount: number | null
    CUST_ID: number | null
    renterId: number | null
  }

  export type LeaseContractSumAggregateOutputType = {
    id: number | null
    locationId: number | null
    rentAmount: number | null
    CUST_ID: number | null
    renterId: number | null
  }

  export type LeaseContractMinAggregateOutputType = {
    id: number | null
    locationId: number | null
    startDate: Date | null
    endDate: Date | null
    finishedDate: Date | null
    rentAmount: number | null
    active: boolean | null
    cancelled: boolean | null
    createdAt: Date | null
    pdfPath: string | null
    CUST_ID: number | null
    renterId: number | null
  }

  export type LeaseContractMaxAggregateOutputType = {
    id: number | null
    locationId: number | null
    startDate: Date | null
    endDate: Date | null
    finishedDate: Date | null
    rentAmount: number | null
    active: boolean | null
    cancelled: boolean | null
    createdAt: Date | null
    pdfPath: string | null
    CUST_ID: number | null
    renterId: number | null
  }

  export type LeaseContractCountAggregateOutputType = {
    id: number
    locationId: number
    startDate: number
    endDate: number
    finishedDate: number
    rentAmount: number
    active: number
    cancelled: number
    createdAt: number
    pdfPath: number
    CUST_ID: number
    renterId: number
    _all: number
  }


  export type LeaseContractAvgAggregateInputType = {
    id?: true
    locationId?: true
    rentAmount?: true
    CUST_ID?: true
    renterId?: true
  }

  export type LeaseContractSumAggregateInputType = {
    id?: true
    locationId?: true
    rentAmount?: true
    CUST_ID?: true
    renterId?: true
  }

  export type LeaseContractMinAggregateInputType = {
    id?: true
    locationId?: true
    startDate?: true
    endDate?: true
    finishedDate?: true
    rentAmount?: true
    active?: true
    cancelled?: true
    createdAt?: true
    pdfPath?: true
    CUST_ID?: true
    renterId?: true
  }

  export type LeaseContractMaxAggregateInputType = {
    id?: true
    locationId?: true
    startDate?: true
    endDate?: true
    finishedDate?: true
    rentAmount?: true
    active?: true
    cancelled?: true
    createdAt?: true
    pdfPath?: true
    CUST_ID?: true
    renterId?: true
  }

  export type LeaseContractCountAggregateInputType = {
    id?: true
    locationId?: true
    startDate?: true
    endDate?: true
    finishedDate?: true
    rentAmount?: true
    active?: true
    cancelled?: true
    createdAt?: true
    pdfPath?: true
    CUST_ID?: true
    renterId?: true
    _all?: true
  }

  export type LeaseContractAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaseContract to aggregate.
     */
    where?: LeaseContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaseContracts to fetch.
     */
    orderBy?: LeaseContractOrderByWithRelationInput | LeaseContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaseContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaseContracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaseContracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeaseContracts
    **/
    _count?: true | LeaseContractCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeaseContractAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeaseContractSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaseContractMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaseContractMaxAggregateInputType
  }

  export type GetLeaseContractAggregateType<T extends LeaseContractAggregateArgs> = {
        [P in keyof T & keyof AggregateLeaseContract]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeaseContract[P]>
      : GetScalarType<T[P], AggregateLeaseContract[P]>
  }




  export type LeaseContractGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaseContractWhereInput
    orderBy?: LeaseContractOrderByWithAggregationInput | LeaseContractOrderByWithAggregationInput[]
    by: LeaseContractScalarFieldEnum[] | LeaseContractScalarFieldEnum
    having?: LeaseContractScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaseContractCountAggregateInputType | true
    _avg?: LeaseContractAvgAggregateInputType
    _sum?: LeaseContractSumAggregateInputType
    _min?: LeaseContractMinAggregateInputType
    _max?: LeaseContractMaxAggregateInputType
  }

  export type LeaseContractGroupByOutputType = {
    id: number
    locationId: number
    startDate: Date
    endDate: Date
    finishedDate: Date | null
    rentAmount: number
    active: boolean
    cancelled: boolean
    createdAt: Date
    pdfPath: string | null
    CUST_ID: number | null
    renterId: number
    _count: LeaseContractCountAggregateOutputType | null
    _avg: LeaseContractAvgAggregateOutputType | null
    _sum: LeaseContractSumAggregateOutputType | null
    _min: LeaseContractMinAggregateOutputType | null
    _max: LeaseContractMaxAggregateOutputType | null
  }

  type GetLeaseContractGroupByPayload<T extends LeaseContractGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaseContractGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaseContractGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaseContractGroupByOutputType[P]>
            : GetScalarType<T[P], LeaseContractGroupByOutputType[P]>
        }
      >
    >


  export type LeaseContractSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    startDate?: boolean
    endDate?: boolean
    finishedDate?: boolean
    rentAmount?: boolean
    active?: boolean
    cancelled?: boolean
    createdAt?: boolean
    pdfPath?: boolean
    CUST_ID?: boolean
    renterId?: boolean
    cust?: boolean | LeaseContract$custArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
    renter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaseContract"]>


  export type LeaseContractSelectScalar = {
    id?: boolean
    locationId?: boolean
    startDate?: boolean
    endDate?: boolean
    finishedDate?: boolean
    rentAmount?: boolean
    active?: boolean
    cancelled?: boolean
    createdAt?: boolean
    pdfPath?: boolean
    CUST_ID?: boolean
    renterId?: boolean
  }

  export type LeaseContractInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cust?: boolean | LeaseContract$custArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
    renter?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LeaseContractPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeaseContract"
    objects: {
      cust: Prisma.$UserPayload<ExtArgs> | null
      location: Prisma.$LocationPayload<ExtArgs>
      renter: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      locationId: number
      startDate: Date
      endDate: Date
      finishedDate: Date | null
      rentAmount: number
      active: boolean
      cancelled: boolean
      createdAt: Date
      pdfPath: string | null
      CUST_ID: number | null
      renterId: number
    }, ExtArgs["result"]["leaseContract"]>
    composites: {}
  }

  type LeaseContractGetPayload<S extends boolean | null | undefined | LeaseContractDefaultArgs> = $Result.GetResult<Prisma.$LeaseContractPayload, S>

  type LeaseContractCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LeaseContractFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LeaseContractCountAggregateInputType | true
    }

  export interface LeaseContractDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeaseContract'], meta: { name: 'LeaseContract' } }
    /**
     * Find zero or one LeaseContract that matches the filter.
     * @param {LeaseContractFindUniqueArgs} args - Arguments to find a LeaseContract
     * @example
     * // Get one LeaseContract
     * const leaseContract = await prisma.leaseContract.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaseContractFindUniqueArgs>(args: SelectSubset<T, LeaseContractFindUniqueArgs<ExtArgs>>): Prisma__LeaseContractClient<$Result.GetResult<Prisma.$LeaseContractPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LeaseContract that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LeaseContractFindUniqueOrThrowArgs} args - Arguments to find a LeaseContract
     * @example
     * // Get one LeaseContract
     * const leaseContract = await prisma.leaseContract.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaseContractFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaseContractFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaseContractClient<$Result.GetResult<Prisma.$LeaseContractPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LeaseContract that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseContractFindFirstArgs} args - Arguments to find a LeaseContract
     * @example
     * // Get one LeaseContract
     * const leaseContract = await prisma.leaseContract.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaseContractFindFirstArgs>(args?: SelectSubset<T, LeaseContractFindFirstArgs<ExtArgs>>): Prisma__LeaseContractClient<$Result.GetResult<Prisma.$LeaseContractPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LeaseContract that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseContractFindFirstOrThrowArgs} args - Arguments to find a LeaseContract
     * @example
     * // Get one LeaseContract
     * const leaseContract = await prisma.leaseContract.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaseContractFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaseContractFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaseContractClient<$Result.GetResult<Prisma.$LeaseContractPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LeaseContracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseContractFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeaseContracts
     * const leaseContracts = await prisma.leaseContract.findMany()
     * 
     * // Get first 10 LeaseContracts
     * const leaseContracts = await prisma.leaseContract.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaseContractWithIdOnly = await prisma.leaseContract.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaseContractFindManyArgs>(args?: SelectSubset<T, LeaseContractFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaseContractPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LeaseContract.
     * @param {LeaseContractCreateArgs} args - Arguments to create a LeaseContract.
     * @example
     * // Create one LeaseContract
     * const LeaseContract = await prisma.leaseContract.create({
     *   data: {
     *     // ... data to create a LeaseContract
     *   }
     * })
     * 
     */
    create<T extends LeaseContractCreateArgs>(args: SelectSubset<T, LeaseContractCreateArgs<ExtArgs>>): Prisma__LeaseContractClient<$Result.GetResult<Prisma.$LeaseContractPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LeaseContracts.
     * @param {LeaseContractCreateManyArgs} args - Arguments to create many LeaseContracts.
     * @example
     * // Create many LeaseContracts
     * const leaseContract = await prisma.leaseContract.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaseContractCreateManyArgs>(args?: SelectSubset<T, LeaseContractCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LeaseContract.
     * @param {LeaseContractDeleteArgs} args - Arguments to delete one LeaseContract.
     * @example
     * // Delete one LeaseContract
     * const LeaseContract = await prisma.leaseContract.delete({
     *   where: {
     *     // ... filter to delete one LeaseContract
     *   }
     * })
     * 
     */
    delete<T extends LeaseContractDeleteArgs>(args: SelectSubset<T, LeaseContractDeleteArgs<ExtArgs>>): Prisma__LeaseContractClient<$Result.GetResult<Prisma.$LeaseContractPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LeaseContract.
     * @param {LeaseContractUpdateArgs} args - Arguments to update one LeaseContract.
     * @example
     * // Update one LeaseContract
     * const leaseContract = await prisma.leaseContract.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaseContractUpdateArgs>(args: SelectSubset<T, LeaseContractUpdateArgs<ExtArgs>>): Prisma__LeaseContractClient<$Result.GetResult<Prisma.$LeaseContractPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LeaseContracts.
     * @param {LeaseContractDeleteManyArgs} args - Arguments to filter LeaseContracts to delete.
     * @example
     * // Delete a few LeaseContracts
     * const { count } = await prisma.leaseContract.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaseContractDeleteManyArgs>(args?: SelectSubset<T, LeaseContractDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaseContracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseContractUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeaseContracts
     * const leaseContract = await prisma.leaseContract.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaseContractUpdateManyArgs>(args: SelectSubset<T, LeaseContractUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LeaseContract.
     * @param {LeaseContractUpsertArgs} args - Arguments to update or create a LeaseContract.
     * @example
     * // Update or create a LeaseContract
     * const leaseContract = await prisma.leaseContract.upsert({
     *   create: {
     *     // ... data to create a LeaseContract
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeaseContract we want to update
     *   }
     * })
     */
    upsert<T extends LeaseContractUpsertArgs>(args: SelectSubset<T, LeaseContractUpsertArgs<ExtArgs>>): Prisma__LeaseContractClient<$Result.GetResult<Prisma.$LeaseContractPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LeaseContracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseContractCountArgs} args - Arguments to filter LeaseContracts to count.
     * @example
     * // Count the number of LeaseContracts
     * const count = await prisma.leaseContract.count({
     *   where: {
     *     // ... the filter for the LeaseContracts we want to count
     *   }
     * })
    **/
    count<T extends LeaseContractCountArgs>(
      args?: Subset<T, LeaseContractCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaseContractCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeaseContract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseContractAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeaseContractAggregateArgs>(args: Subset<T, LeaseContractAggregateArgs>): Prisma.PrismaPromise<GetLeaseContractAggregateType<T>>

    /**
     * Group by LeaseContract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseContractGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeaseContractGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaseContractGroupByArgs['orderBy'] }
        : { orderBy?: LeaseContractGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeaseContractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaseContractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeaseContract model
   */
  readonly fields: LeaseContractFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeaseContract.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaseContractClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cust<T extends LeaseContract$custArgs<ExtArgs> = {}>(args?: Subset<T, LeaseContract$custArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    renter<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LeaseContract model
   */ 
  interface LeaseContractFieldRefs {
    readonly id: FieldRef<"LeaseContract", 'Int'>
    readonly locationId: FieldRef<"LeaseContract", 'Int'>
    readonly startDate: FieldRef<"LeaseContract", 'DateTime'>
    readonly endDate: FieldRef<"LeaseContract", 'DateTime'>
    readonly finishedDate: FieldRef<"LeaseContract", 'DateTime'>
    readonly rentAmount: FieldRef<"LeaseContract", 'Int'>
    readonly active: FieldRef<"LeaseContract", 'Boolean'>
    readonly cancelled: FieldRef<"LeaseContract", 'Boolean'>
    readonly createdAt: FieldRef<"LeaseContract", 'DateTime'>
    readonly pdfPath: FieldRef<"LeaseContract", 'String'>
    readonly CUST_ID: FieldRef<"LeaseContract", 'Int'>
    readonly renterId: FieldRef<"LeaseContract", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * LeaseContract findUnique
   */
  export type LeaseContractFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseContract
     */
    select?: LeaseContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseContractInclude<ExtArgs> | null
    /**
     * Filter, which LeaseContract to fetch.
     */
    where: LeaseContractWhereUniqueInput
  }

  /**
   * LeaseContract findUniqueOrThrow
   */
  export type LeaseContractFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseContract
     */
    select?: LeaseContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseContractInclude<ExtArgs> | null
    /**
     * Filter, which LeaseContract to fetch.
     */
    where: LeaseContractWhereUniqueInput
  }

  /**
   * LeaseContract findFirst
   */
  export type LeaseContractFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseContract
     */
    select?: LeaseContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseContractInclude<ExtArgs> | null
    /**
     * Filter, which LeaseContract to fetch.
     */
    where?: LeaseContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaseContracts to fetch.
     */
    orderBy?: LeaseContractOrderByWithRelationInput | LeaseContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaseContracts.
     */
    cursor?: LeaseContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaseContracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaseContracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaseContracts.
     */
    distinct?: LeaseContractScalarFieldEnum | LeaseContractScalarFieldEnum[]
  }

  /**
   * LeaseContract findFirstOrThrow
   */
  export type LeaseContractFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseContract
     */
    select?: LeaseContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseContractInclude<ExtArgs> | null
    /**
     * Filter, which LeaseContract to fetch.
     */
    where?: LeaseContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaseContracts to fetch.
     */
    orderBy?: LeaseContractOrderByWithRelationInput | LeaseContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaseContracts.
     */
    cursor?: LeaseContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaseContracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaseContracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaseContracts.
     */
    distinct?: LeaseContractScalarFieldEnum | LeaseContractScalarFieldEnum[]
  }

  /**
   * LeaseContract findMany
   */
  export type LeaseContractFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseContract
     */
    select?: LeaseContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseContractInclude<ExtArgs> | null
    /**
     * Filter, which LeaseContracts to fetch.
     */
    where?: LeaseContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaseContracts to fetch.
     */
    orderBy?: LeaseContractOrderByWithRelationInput | LeaseContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeaseContracts.
     */
    cursor?: LeaseContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaseContracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaseContracts.
     */
    skip?: number
    distinct?: LeaseContractScalarFieldEnum | LeaseContractScalarFieldEnum[]
  }

  /**
   * LeaseContract create
   */
  export type LeaseContractCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseContract
     */
    select?: LeaseContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseContractInclude<ExtArgs> | null
    /**
     * The data needed to create a LeaseContract.
     */
    data: XOR<LeaseContractCreateInput, LeaseContractUncheckedCreateInput>
  }

  /**
   * LeaseContract createMany
   */
  export type LeaseContractCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeaseContracts.
     */
    data: LeaseContractCreateManyInput | LeaseContractCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeaseContract update
   */
  export type LeaseContractUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseContract
     */
    select?: LeaseContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseContractInclude<ExtArgs> | null
    /**
     * The data needed to update a LeaseContract.
     */
    data: XOR<LeaseContractUpdateInput, LeaseContractUncheckedUpdateInput>
    /**
     * Choose, which LeaseContract to update.
     */
    where: LeaseContractWhereUniqueInput
  }

  /**
   * LeaseContract updateMany
   */
  export type LeaseContractUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeaseContracts.
     */
    data: XOR<LeaseContractUpdateManyMutationInput, LeaseContractUncheckedUpdateManyInput>
    /**
     * Filter which LeaseContracts to update
     */
    where?: LeaseContractWhereInput
  }

  /**
   * LeaseContract upsert
   */
  export type LeaseContractUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseContract
     */
    select?: LeaseContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseContractInclude<ExtArgs> | null
    /**
     * The filter to search for the LeaseContract to update in case it exists.
     */
    where: LeaseContractWhereUniqueInput
    /**
     * In case the LeaseContract found by the `where` argument doesn't exist, create a new LeaseContract with this data.
     */
    create: XOR<LeaseContractCreateInput, LeaseContractUncheckedCreateInput>
    /**
     * In case the LeaseContract was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaseContractUpdateInput, LeaseContractUncheckedUpdateInput>
  }

  /**
   * LeaseContract delete
   */
  export type LeaseContractDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseContract
     */
    select?: LeaseContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseContractInclude<ExtArgs> | null
    /**
     * Filter which LeaseContract to delete.
     */
    where: LeaseContractWhereUniqueInput
  }

  /**
   * LeaseContract deleteMany
   */
  export type LeaseContractDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaseContracts to delete
     */
    where?: LeaseContractWhereInput
  }

  /**
   * LeaseContract.cust
   */
  export type LeaseContract$custArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * LeaseContract without action
   */
  export type LeaseContractDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseContract
     */
    select?: LeaseContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseContractInclude<ExtArgs> | null
  }


  /**
   * Model Key
   */

  export type AggregateKey = {
    _count: KeyCountAggregateOutputType | null
    _avg: KeyAvgAggregateOutputType | null
    _sum: KeySumAggregateOutputType | null
    _min: KeyMinAggregateOutputType | null
    _max: KeyMaxAggregateOutputType | null
  }

  export type KeyAvgAggregateOutputType = {
    id: number | null
    locationId: number | null
    CUST_ID: number | null
  }

  export type KeySumAggregateOutputType = {
    id: number | null
    locationId: number | null
    CUST_ID: number | null
  }

  export type KeyMinAggregateOutputType = {
    id: number | null
    locationId: number | null
    issueDate: Date | null
    returnDate: Date | null
    CUST_ID: number | null
  }

  export type KeyMaxAggregateOutputType = {
    id: number | null
    locationId: number | null
    issueDate: Date | null
    returnDate: Date | null
    CUST_ID: number | null
  }

  export type KeyCountAggregateOutputType = {
    id: number
    locationId: number
    issueDate: number
    returnDate: number
    CUST_ID: number
    _all: number
  }


  export type KeyAvgAggregateInputType = {
    id?: true
    locationId?: true
    CUST_ID?: true
  }

  export type KeySumAggregateInputType = {
    id?: true
    locationId?: true
    CUST_ID?: true
  }

  export type KeyMinAggregateInputType = {
    id?: true
    locationId?: true
    issueDate?: true
    returnDate?: true
    CUST_ID?: true
  }

  export type KeyMaxAggregateInputType = {
    id?: true
    locationId?: true
    issueDate?: true
    returnDate?: true
    CUST_ID?: true
  }

  export type KeyCountAggregateInputType = {
    id?: true
    locationId?: true
    issueDate?: true
    returnDate?: true
    CUST_ID?: true
    _all?: true
  }

  export type KeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Key to aggregate.
     */
    where?: KeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keys to fetch.
     */
    orderBy?: KeyOrderByWithRelationInput | KeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Keys
    **/
    _count?: true | KeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KeyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KeySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KeyMaxAggregateInputType
  }

  export type GetKeyAggregateType<T extends KeyAggregateArgs> = {
        [P in keyof T & keyof AggregateKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKey[P]>
      : GetScalarType<T[P], AggregateKey[P]>
  }




  export type KeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeyWhereInput
    orderBy?: KeyOrderByWithAggregationInput | KeyOrderByWithAggregationInput[]
    by: KeyScalarFieldEnum[] | KeyScalarFieldEnum
    having?: KeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KeyCountAggregateInputType | true
    _avg?: KeyAvgAggregateInputType
    _sum?: KeySumAggregateInputType
    _min?: KeyMinAggregateInputType
    _max?: KeyMaxAggregateInputType
  }

  export type KeyGroupByOutputType = {
    id: number
    locationId: number
    issueDate: Date
    returnDate: Date | null
    CUST_ID: number | null
    _count: KeyCountAggregateOutputType | null
    _avg: KeyAvgAggregateOutputType | null
    _sum: KeySumAggregateOutputType | null
    _min: KeyMinAggregateOutputType | null
    _max: KeyMaxAggregateOutputType | null
  }

  type GetKeyGroupByPayload<T extends KeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KeyGroupByOutputType[P]>
            : GetScalarType<T[P], KeyGroupByOutputType[P]>
        }
      >
    >


  export type KeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    issueDate?: boolean
    returnDate?: boolean
    CUST_ID?: boolean
    cust?: boolean | Key$custArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["key"]>


  export type KeySelectScalar = {
    id?: boolean
    locationId?: boolean
    issueDate?: boolean
    returnDate?: boolean
    CUST_ID?: boolean
  }

  export type KeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cust?: boolean | Key$custArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }

  export type $KeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Key"
    objects: {
      cust: Prisma.$UserPayload<ExtArgs> | null
      location: Prisma.$LocationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      locationId: number
      issueDate: Date
      returnDate: Date | null
      CUST_ID: number | null
    }, ExtArgs["result"]["key"]>
    composites: {}
  }

  type KeyGetPayload<S extends boolean | null | undefined | KeyDefaultArgs> = $Result.GetResult<Prisma.$KeyPayload, S>

  type KeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<KeyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: KeyCountAggregateInputType | true
    }

  export interface KeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Key'], meta: { name: 'Key' } }
    /**
     * Find zero or one Key that matches the filter.
     * @param {KeyFindUniqueArgs} args - Arguments to find a Key
     * @example
     * // Get one Key
     * const key = await prisma.key.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KeyFindUniqueArgs>(args: SelectSubset<T, KeyFindUniqueArgs<ExtArgs>>): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Key that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {KeyFindUniqueOrThrowArgs} args - Arguments to find a Key
     * @example
     * // Get one Key
     * const key = await prisma.key.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KeyFindUniqueOrThrowArgs>(args: SelectSubset<T, KeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Key that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyFindFirstArgs} args - Arguments to find a Key
     * @example
     * // Get one Key
     * const key = await prisma.key.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KeyFindFirstArgs>(args?: SelectSubset<T, KeyFindFirstArgs<ExtArgs>>): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Key that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyFindFirstOrThrowArgs} args - Arguments to find a Key
     * @example
     * // Get one Key
     * const key = await prisma.key.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KeyFindFirstOrThrowArgs>(args?: SelectSubset<T, KeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Keys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Keys
     * const keys = await prisma.key.findMany()
     * 
     * // Get first 10 Keys
     * const keys = await prisma.key.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const keyWithIdOnly = await prisma.key.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KeyFindManyArgs>(args?: SelectSubset<T, KeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Key.
     * @param {KeyCreateArgs} args - Arguments to create a Key.
     * @example
     * // Create one Key
     * const Key = await prisma.key.create({
     *   data: {
     *     // ... data to create a Key
     *   }
     * })
     * 
     */
    create<T extends KeyCreateArgs>(args: SelectSubset<T, KeyCreateArgs<ExtArgs>>): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Keys.
     * @param {KeyCreateManyArgs} args - Arguments to create many Keys.
     * @example
     * // Create many Keys
     * const key = await prisma.key.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KeyCreateManyArgs>(args?: SelectSubset<T, KeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Key.
     * @param {KeyDeleteArgs} args - Arguments to delete one Key.
     * @example
     * // Delete one Key
     * const Key = await prisma.key.delete({
     *   where: {
     *     // ... filter to delete one Key
     *   }
     * })
     * 
     */
    delete<T extends KeyDeleteArgs>(args: SelectSubset<T, KeyDeleteArgs<ExtArgs>>): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Key.
     * @param {KeyUpdateArgs} args - Arguments to update one Key.
     * @example
     * // Update one Key
     * const key = await prisma.key.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KeyUpdateArgs>(args: SelectSubset<T, KeyUpdateArgs<ExtArgs>>): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Keys.
     * @param {KeyDeleteManyArgs} args - Arguments to filter Keys to delete.
     * @example
     * // Delete a few Keys
     * const { count } = await prisma.key.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KeyDeleteManyArgs>(args?: SelectSubset<T, KeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Keys
     * const key = await prisma.key.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KeyUpdateManyArgs>(args: SelectSubset<T, KeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Key.
     * @param {KeyUpsertArgs} args - Arguments to update or create a Key.
     * @example
     * // Update or create a Key
     * const key = await prisma.key.upsert({
     *   create: {
     *     // ... data to create a Key
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Key we want to update
     *   }
     * })
     */
    upsert<T extends KeyUpsertArgs>(args: SelectSubset<T, KeyUpsertArgs<ExtArgs>>): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyCountArgs} args - Arguments to filter Keys to count.
     * @example
     * // Count the number of Keys
     * const count = await prisma.key.count({
     *   where: {
     *     // ... the filter for the Keys we want to count
     *   }
     * })
    **/
    count<T extends KeyCountArgs>(
      args?: Subset<T, KeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Key.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KeyAggregateArgs>(args: Subset<T, KeyAggregateArgs>): Prisma.PrismaPromise<GetKeyAggregateType<T>>

    /**
     * Group by Key.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KeyGroupByArgs['orderBy'] }
        : { orderBy?: KeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Key model
   */
  readonly fields: KeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Key.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cust<T extends Key$custArgs<ExtArgs> = {}>(args?: Subset<T, Key$custArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Key model
   */ 
  interface KeyFieldRefs {
    readonly id: FieldRef<"Key", 'Int'>
    readonly locationId: FieldRef<"Key", 'Int'>
    readonly issueDate: FieldRef<"Key", 'DateTime'>
    readonly returnDate: FieldRef<"Key", 'DateTime'>
    readonly CUST_ID: FieldRef<"Key", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Key findUnique
   */
  export type KeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyInclude<ExtArgs> | null
    /**
     * Filter, which Key to fetch.
     */
    where: KeyWhereUniqueInput
  }

  /**
   * Key findUniqueOrThrow
   */
  export type KeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyInclude<ExtArgs> | null
    /**
     * Filter, which Key to fetch.
     */
    where: KeyWhereUniqueInput
  }

  /**
   * Key findFirst
   */
  export type KeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyInclude<ExtArgs> | null
    /**
     * Filter, which Key to fetch.
     */
    where?: KeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keys to fetch.
     */
    orderBy?: KeyOrderByWithRelationInput | KeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Keys.
     */
    cursor?: KeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Keys.
     */
    distinct?: KeyScalarFieldEnum | KeyScalarFieldEnum[]
  }

  /**
   * Key findFirstOrThrow
   */
  export type KeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyInclude<ExtArgs> | null
    /**
     * Filter, which Key to fetch.
     */
    where?: KeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keys to fetch.
     */
    orderBy?: KeyOrderByWithRelationInput | KeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Keys.
     */
    cursor?: KeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Keys.
     */
    distinct?: KeyScalarFieldEnum | KeyScalarFieldEnum[]
  }

  /**
   * Key findMany
   */
  export type KeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyInclude<ExtArgs> | null
    /**
     * Filter, which Keys to fetch.
     */
    where?: KeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keys to fetch.
     */
    orderBy?: KeyOrderByWithRelationInput | KeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Keys.
     */
    cursor?: KeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keys.
     */
    skip?: number
    distinct?: KeyScalarFieldEnum | KeyScalarFieldEnum[]
  }

  /**
   * Key create
   */
  export type KeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyInclude<ExtArgs> | null
    /**
     * The data needed to create a Key.
     */
    data: XOR<KeyCreateInput, KeyUncheckedCreateInput>
  }

  /**
   * Key createMany
   */
  export type KeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Keys.
     */
    data: KeyCreateManyInput | KeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Key update
   */
  export type KeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyInclude<ExtArgs> | null
    /**
     * The data needed to update a Key.
     */
    data: XOR<KeyUpdateInput, KeyUncheckedUpdateInput>
    /**
     * Choose, which Key to update.
     */
    where: KeyWhereUniqueInput
  }

  /**
   * Key updateMany
   */
  export type KeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Keys.
     */
    data: XOR<KeyUpdateManyMutationInput, KeyUncheckedUpdateManyInput>
    /**
     * Filter which Keys to update
     */
    where?: KeyWhereInput
  }

  /**
   * Key upsert
   */
  export type KeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyInclude<ExtArgs> | null
    /**
     * The filter to search for the Key to update in case it exists.
     */
    where: KeyWhereUniqueInput
    /**
     * In case the Key found by the `where` argument doesn't exist, create a new Key with this data.
     */
    create: XOR<KeyCreateInput, KeyUncheckedCreateInput>
    /**
     * In case the Key was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KeyUpdateInput, KeyUncheckedUpdateInput>
  }

  /**
   * Key delete
   */
  export type KeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyInclude<ExtArgs> | null
    /**
     * Filter which Key to delete.
     */
    where: KeyWhereUniqueInput
  }

  /**
   * Key deleteMany
   */
  export type KeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Keys to delete
     */
    where?: KeyWhereInput
  }

  /**
   * Key.cust
   */
  export type Key$custArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Key without action
   */
  export type KeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyInclude<ExtArgs> | null
  }


  /**
   * Model PriceAdjustment
   */

  export type AggregatePriceAdjustment = {
    _count: PriceAdjustmentCountAggregateOutputType | null
    _avg: PriceAdjustmentAvgAggregateOutputType | null
    _sum: PriceAdjustmentSumAggregateOutputType | null
    _min: PriceAdjustmentMinAggregateOutputType | null
    _max: PriceAdjustmentMaxAggregateOutputType | null
  }

  export type PriceAdjustmentAvgAggregateOutputType = {
    id: number | null
    CUST_ID: number | null
    amount: number | null
    period: number | null
    status: number | null
    type: number | null
  }

  export type PriceAdjustmentSumAggregateOutputType = {
    id: number | null
    CUST_ID: number | null
    amount: number | null
    period: number | null
    status: number | null
    type: number | null
  }

  export type PriceAdjustmentMinAggregateOutputType = {
    id: number | null
    CUST_ID: number | null
    amount: number | null
    period: number | null
    status: number | null
    applyToAll: boolean | null
    type: number | null
    createdAt: Date | null
    lastExecutedAt: Date | null
    updatedAt: Date | null
  }

  export type PriceAdjustmentMaxAggregateOutputType = {
    id: number | null
    CUST_ID: number | null
    amount: number | null
    period: number | null
    status: number | null
    applyToAll: boolean | null
    type: number | null
    createdAt: Date | null
    lastExecutedAt: Date | null
    updatedAt: Date | null
  }

  export type PriceAdjustmentCountAggregateOutputType = {
    id: number
    CUST_ID: number
    amount: number
    period: number
    status: number
    applyToAll: number
    type: number
    createdAt: number
    lastExecutedAt: number
    updatedAt: number
    _all: number
  }


  export type PriceAdjustmentAvgAggregateInputType = {
    id?: true
    CUST_ID?: true
    amount?: true
    period?: true
    status?: true
    type?: true
  }

  export type PriceAdjustmentSumAggregateInputType = {
    id?: true
    CUST_ID?: true
    amount?: true
    period?: true
    status?: true
    type?: true
  }

  export type PriceAdjustmentMinAggregateInputType = {
    id?: true
    CUST_ID?: true
    amount?: true
    period?: true
    status?: true
    applyToAll?: true
    type?: true
    createdAt?: true
    lastExecutedAt?: true
    updatedAt?: true
  }

  export type PriceAdjustmentMaxAggregateInputType = {
    id?: true
    CUST_ID?: true
    amount?: true
    period?: true
    status?: true
    applyToAll?: true
    type?: true
    createdAt?: true
    lastExecutedAt?: true
    updatedAt?: true
  }

  export type PriceAdjustmentCountAggregateInputType = {
    id?: true
    CUST_ID?: true
    amount?: true
    period?: true
    status?: true
    applyToAll?: true
    type?: true
    createdAt?: true
    lastExecutedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PriceAdjustmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceAdjustment to aggregate.
     */
    where?: PriceAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceAdjustments to fetch.
     */
    orderBy?: PriceAdjustmentOrderByWithRelationInput | PriceAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PriceAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceAdjustments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PriceAdjustments
    **/
    _count?: true | PriceAdjustmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PriceAdjustmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PriceAdjustmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriceAdjustmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriceAdjustmentMaxAggregateInputType
  }

  export type GetPriceAdjustmentAggregateType<T extends PriceAdjustmentAggregateArgs> = {
        [P in keyof T & keyof AggregatePriceAdjustment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePriceAdjustment[P]>
      : GetScalarType<T[P], AggregatePriceAdjustment[P]>
  }




  export type PriceAdjustmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceAdjustmentWhereInput
    orderBy?: PriceAdjustmentOrderByWithAggregationInput | PriceAdjustmentOrderByWithAggregationInput[]
    by: PriceAdjustmentScalarFieldEnum[] | PriceAdjustmentScalarFieldEnum
    having?: PriceAdjustmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriceAdjustmentCountAggregateInputType | true
    _avg?: PriceAdjustmentAvgAggregateInputType
    _sum?: PriceAdjustmentSumAggregateInputType
    _min?: PriceAdjustmentMinAggregateInputType
    _max?: PriceAdjustmentMaxAggregateInputType
  }

  export type PriceAdjustmentGroupByOutputType = {
    id: number
    CUST_ID: number | null
    amount: number
    period: number
    status: number
    applyToAll: boolean
    type: number
    createdAt: Date
    lastExecutedAt: Date | null
    updatedAt: Date
    _count: PriceAdjustmentCountAggregateOutputType | null
    _avg: PriceAdjustmentAvgAggregateOutputType | null
    _sum: PriceAdjustmentSumAggregateOutputType | null
    _min: PriceAdjustmentMinAggregateOutputType | null
    _max: PriceAdjustmentMaxAggregateOutputType | null
  }

  type GetPriceAdjustmentGroupByPayload<T extends PriceAdjustmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PriceAdjustmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriceAdjustmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriceAdjustmentGroupByOutputType[P]>
            : GetScalarType<T[P], PriceAdjustmentGroupByOutputType[P]>
        }
      >
    >


  export type PriceAdjustmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    CUST_ID?: boolean
    amount?: boolean
    period?: boolean
    status?: boolean
    applyToAll?: boolean
    type?: boolean
    createdAt?: boolean
    lastExecutedAt?: boolean
    updatedAt?: boolean
    AdjustmentLocation?: boolean | PriceAdjustment$AdjustmentLocationArgs<ExtArgs>
    cust?: boolean | PriceAdjustment$custArgs<ExtArgs>
    locations?: boolean | PriceAdjustment$locationsArgs<ExtArgs>
    _count?: boolean | PriceAdjustmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priceAdjustment"]>


  export type PriceAdjustmentSelectScalar = {
    id?: boolean
    CUST_ID?: boolean
    amount?: boolean
    period?: boolean
    status?: boolean
    applyToAll?: boolean
    type?: boolean
    createdAt?: boolean
    lastExecutedAt?: boolean
    updatedAt?: boolean
  }

  export type PriceAdjustmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AdjustmentLocation?: boolean | PriceAdjustment$AdjustmentLocationArgs<ExtArgs>
    cust?: boolean | PriceAdjustment$custArgs<ExtArgs>
    locations?: boolean | PriceAdjustment$locationsArgs<ExtArgs>
    _count?: boolean | PriceAdjustmentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PriceAdjustmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PriceAdjustment"
    objects: {
      AdjustmentLocation: Prisma.$AdjustmentLocationPayload<ExtArgs>[]
      cust: Prisma.$UserPayload<ExtArgs> | null
      locations: Prisma.$LocationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      CUST_ID: number | null
      amount: number
      period: number
      status: number
      applyToAll: boolean
      type: number
      createdAt: Date
      lastExecutedAt: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["priceAdjustment"]>
    composites: {}
  }

  type PriceAdjustmentGetPayload<S extends boolean | null | undefined | PriceAdjustmentDefaultArgs> = $Result.GetResult<Prisma.$PriceAdjustmentPayload, S>

  type PriceAdjustmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PriceAdjustmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PriceAdjustmentCountAggregateInputType | true
    }

  export interface PriceAdjustmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PriceAdjustment'], meta: { name: 'PriceAdjustment' } }
    /**
     * Find zero or one PriceAdjustment that matches the filter.
     * @param {PriceAdjustmentFindUniqueArgs} args - Arguments to find a PriceAdjustment
     * @example
     * // Get one PriceAdjustment
     * const priceAdjustment = await prisma.priceAdjustment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriceAdjustmentFindUniqueArgs>(args: SelectSubset<T, PriceAdjustmentFindUniqueArgs<ExtArgs>>): Prisma__PriceAdjustmentClient<$Result.GetResult<Prisma.$PriceAdjustmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PriceAdjustment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PriceAdjustmentFindUniqueOrThrowArgs} args - Arguments to find a PriceAdjustment
     * @example
     * // Get one PriceAdjustment
     * const priceAdjustment = await prisma.priceAdjustment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriceAdjustmentFindUniqueOrThrowArgs>(args: SelectSubset<T, PriceAdjustmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PriceAdjustmentClient<$Result.GetResult<Prisma.$PriceAdjustmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PriceAdjustment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAdjustmentFindFirstArgs} args - Arguments to find a PriceAdjustment
     * @example
     * // Get one PriceAdjustment
     * const priceAdjustment = await prisma.priceAdjustment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriceAdjustmentFindFirstArgs>(args?: SelectSubset<T, PriceAdjustmentFindFirstArgs<ExtArgs>>): Prisma__PriceAdjustmentClient<$Result.GetResult<Prisma.$PriceAdjustmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PriceAdjustment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAdjustmentFindFirstOrThrowArgs} args - Arguments to find a PriceAdjustment
     * @example
     * // Get one PriceAdjustment
     * const priceAdjustment = await prisma.priceAdjustment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriceAdjustmentFindFirstOrThrowArgs>(args?: SelectSubset<T, PriceAdjustmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PriceAdjustmentClient<$Result.GetResult<Prisma.$PriceAdjustmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PriceAdjustments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAdjustmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PriceAdjustments
     * const priceAdjustments = await prisma.priceAdjustment.findMany()
     * 
     * // Get first 10 PriceAdjustments
     * const priceAdjustments = await prisma.priceAdjustment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const priceAdjustmentWithIdOnly = await prisma.priceAdjustment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PriceAdjustmentFindManyArgs>(args?: SelectSubset<T, PriceAdjustmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceAdjustmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PriceAdjustment.
     * @param {PriceAdjustmentCreateArgs} args - Arguments to create a PriceAdjustment.
     * @example
     * // Create one PriceAdjustment
     * const PriceAdjustment = await prisma.priceAdjustment.create({
     *   data: {
     *     // ... data to create a PriceAdjustment
     *   }
     * })
     * 
     */
    create<T extends PriceAdjustmentCreateArgs>(args: SelectSubset<T, PriceAdjustmentCreateArgs<ExtArgs>>): Prisma__PriceAdjustmentClient<$Result.GetResult<Prisma.$PriceAdjustmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PriceAdjustments.
     * @param {PriceAdjustmentCreateManyArgs} args - Arguments to create many PriceAdjustments.
     * @example
     * // Create many PriceAdjustments
     * const priceAdjustment = await prisma.priceAdjustment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PriceAdjustmentCreateManyArgs>(args?: SelectSubset<T, PriceAdjustmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PriceAdjustment.
     * @param {PriceAdjustmentDeleteArgs} args - Arguments to delete one PriceAdjustment.
     * @example
     * // Delete one PriceAdjustment
     * const PriceAdjustment = await prisma.priceAdjustment.delete({
     *   where: {
     *     // ... filter to delete one PriceAdjustment
     *   }
     * })
     * 
     */
    delete<T extends PriceAdjustmentDeleteArgs>(args: SelectSubset<T, PriceAdjustmentDeleteArgs<ExtArgs>>): Prisma__PriceAdjustmentClient<$Result.GetResult<Prisma.$PriceAdjustmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PriceAdjustment.
     * @param {PriceAdjustmentUpdateArgs} args - Arguments to update one PriceAdjustment.
     * @example
     * // Update one PriceAdjustment
     * const priceAdjustment = await prisma.priceAdjustment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PriceAdjustmentUpdateArgs>(args: SelectSubset<T, PriceAdjustmentUpdateArgs<ExtArgs>>): Prisma__PriceAdjustmentClient<$Result.GetResult<Prisma.$PriceAdjustmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PriceAdjustments.
     * @param {PriceAdjustmentDeleteManyArgs} args - Arguments to filter PriceAdjustments to delete.
     * @example
     * // Delete a few PriceAdjustments
     * const { count } = await prisma.priceAdjustment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PriceAdjustmentDeleteManyArgs>(args?: SelectSubset<T, PriceAdjustmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceAdjustments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAdjustmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PriceAdjustments
     * const priceAdjustment = await prisma.priceAdjustment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PriceAdjustmentUpdateManyArgs>(args: SelectSubset<T, PriceAdjustmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PriceAdjustment.
     * @param {PriceAdjustmentUpsertArgs} args - Arguments to update or create a PriceAdjustment.
     * @example
     * // Update or create a PriceAdjustment
     * const priceAdjustment = await prisma.priceAdjustment.upsert({
     *   create: {
     *     // ... data to create a PriceAdjustment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PriceAdjustment we want to update
     *   }
     * })
     */
    upsert<T extends PriceAdjustmentUpsertArgs>(args: SelectSubset<T, PriceAdjustmentUpsertArgs<ExtArgs>>): Prisma__PriceAdjustmentClient<$Result.GetResult<Prisma.$PriceAdjustmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PriceAdjustments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAdjustmentCountArgs} args - Arguments to filter PriceAdjustments to count.
     * @example
     * // Count the number of PriceAdjustments
     * const count = await prisma.priceAdjustment.count({
     *   where: {
     *     // ... the filter for the PriceAdjustments we want to count
     *   }
     * })
    **/
    count<T extends PriceAdjustmentCountArgs>(
      args?: Subset<T, PriceAdjustmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceAdjustmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PriceAdjustment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAdjustmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PriceAdjustmentAggregateArgs>(args: Subset<T, PriceAdjustmentAggregateArgs>): Prisma.PrismaPromise<GetPriceAdjustmentAggregateType<T>>

    /**
     * Group by PriceAdjustment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAdjustmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PriceAdjustmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceAdjustmentGroupByArgs['orderBy'] }
        : { orderBy?: PriceAdjustmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PriceAdjustmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceAdjustmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PriceAdjustment model
   */
  readonly fields: PriceAdjustmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PriceAdjustment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PriceAdjustmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    AdjustmentLocation<T extends PriceAdjustment$AdjustmentLocationArgs<ExtArgs> = {}>(args?: Subset<T, PriceAdjustment$AdjustmentLocationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdjustmentLocationPayload<ExtArgs>, T, "findMany"> | Null>
    cust<T extends PriceAdjustment$custArgs<ExtArgs> = {}>(args?: Subset<T, PriceAdjustment$custArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    locations<T extends PriceAdjustment$locationsArgs<ExtArgs> = {}>(args?: Subset<T, PriceAdjustment$locationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PriceAdjustment model
   */ 
  interface PriceAdjustmentFieldRefs {
    readonly id: FieldRef<"PriceAdjustment", 'Int'>
    readonly CUST_ID: FieldRef<"PriceAdjustment", 'Int'>
    readonly amount: FieldRef<"PriceAdjustment", 'Int'>
    readonly period: FieldRef<"PriceAdjustment", 'Int'>
    readonly status: FieldRef<"PriceAdjustment", 'Int'>
    readonly applyToAll: FieldRef<"PriceAdjustment", 'Boolean'>
    readonly type: FieldRef<"PriceAdjustment", 'Int'>
    readonly createdAt: FieldRef<"PriceAdjustment", 'DateTime'>
    readonly lastExecutedAt: FieldRef<"PriceAdjustment", 'DateTime'>
    readonly updatedAt: FieldRef<"PriceAdjustment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PriceAdjustment findUnique
   */
  export type PriceAdjustmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAdjustment
     */
    select?: PriceAdjustmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which PriceAdjustment to fetch.
     */
    where: PriceAdjustmentWhereUniqueInput
  }

  /**
   * PriceAdjustment findUniqueOrThrow
   */
  export type PriceAdjustmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAdjustment
     */
    select?: PriceAdjustmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which PriceAdjustment to fetch.
     */
    where: PriceAdjustmentWhereUniqueInput
  }

  /**
   * PriceAdjustment findFirst
   */
  export type PriceAdjustmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAdjustment
     */
    select?: PriceAdjustmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which PriceAdjustment to fetch.
     */
    where?: PriceAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceAdjustments to fetch.
     */
    orderBy?: PriceAdjustmentOrderByWithRelationInput | PriceAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceAdjustments.
     */
    cursor?: PriceAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceAdjustments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceAdjustments.
     */
    distinct?: PriceAdjustmentScalarFieldEnum | PriceAdjustmentScalarFieldEnum[]
  }

  /**
   * PriceAdjustment findFirstOrThrow
   */
  export type PriceAdjustmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAdjustment
     */
    select?: PriceAdjustmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which PriceAdjustment to fetch.
     */
    where?: PriceAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceAdjustments to fetch.
     */
    orderBy?: PriceAdjustmentOrderByWithRelationInput | PriceAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceAdjustments.
     */
    cursor?: PriceAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceAdjustments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceAdjustments.
     */
    distinct?: PriceAdjustmentScalarFieldEnum | PriceAdjustmentScalarFieldEnum[]
  }

  /**
   * PriceAdjustment findMany
   */
  export type PriceAdjustmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAdjustment
     */
    select?: PriceAdjustmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which PriceAdjustments to fetch.
     */
    where?: PriceAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceAdjustments to fetch.
     */
    orderBy?: PriceAdjustmentOrderByWithRelationInput | PriceAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PriceAdjustments.
     */
    cursor?: PriceAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceAdjustments.
     */
    skip?: number
    distinct?: PriceAdjustmentScalarFieldEnum | PriceAdjustmentScalarFieldEnum[]
  }

  /**
   * PriceAdjustment create
   */
  export type PriceAdjustmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAdjustment
     */
    select?: PriceAdjustmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAdjustmentInclude<ExtArgs> | null
    /**
     * The data needed to create a PriceAdjustment.
     */
    data: XOR<PriceAdjustmentCreateInput, PriceAdjustmentUncheckedCreateInput>
  }

  /**
   * PriceAdjustment createMany
   */
  export type PriceAdjustmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PriceAdjustments.
     */
    data: PriceAdjustmentCreateManyInput | PriceAdjustmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PriceAdjustment update
   */
  export type PriceAdjustmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAdjustment
     */
    select?: PriceAdjustmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAdjustmentInclude<ExtArgs> | null
    /**
     * The data needed to update a PriceAdjustment.
     */
    data: XOR<PriceAdjustmentUpdateInput, PriceAdjustmentUncheckedUpdateInput>
    /**
     * Choose, which PriceAdjustment to update.
     */
    where: PriceAdjustmentWhereUniqueInput
  }

  /**
   * PriceAdjustment updateMany
   */
  export type PriceAdjustmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PriceAdjustments.
     */
    data: XOR<PriceAdjustmentUpdateManyMutationInput, PriceAdjustmentUncheckedUpdateManyInput>
    /**
     * Filter which PriceAdjustments to update
     */
    where?: PriceAdjustmentWhereInput
  }

  /**
   * PriceAdjustment upsert
   */
  export type PriceAdjustmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAdjustment
     */
    select?: PriceAdjustmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAdjustmentInclude<ExtArgs> | null
    /**
     * The filter to search for the PriceAdjustment to update in case it exists.
     */
    where: PriceAdjustmentWhereUniqueInput
    /**
     * In case the PriceAdjustment found by the `where` argument doesn't exist, create a new PriceAdjustment with this data.
     */
    create: XOR<PriceAdjustmentCreateInput, PriceAdjustmentUncheckedCreateInput>
    /**
     * In case the PriceAdjustment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PriceAdjustmentUpdateInput, PriceAdjustmentUncheckedUpdateInput>
  }

  /**
   * PriceAdjustment delete
   */
  export type PriceAdjustmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAdjustment
     */
    select?: PriceAdjustmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAdjustmentInclude<ExtArgs> | null
    /**
     * Filter which PriceAdjustment to delete.
     */
    where: PriceAdjustmentWhereUniqueInput
  }

  /**
   * PriceAdjustment deleteMany
   */
  export type PriceAdjustmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceAdjustments to delete
     */
    where?: PriceAdjustmentWhereInput
  }

  /**
   * PriceAdjustment.AdjustmentLocation
   */
  export type PriceAdjustment$AdjustmentLocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdjustmentLocation
     */
    select?: AdjustmentLocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdjustmentLocationInclude<ExtArgs> | null
    where?: AdjustmentLocationWhereInput
    orderBy?: AdjustmentLocationOrderByWithRelationInput | AdjustmentLocationOrderByWithRelationInput[]
    cursor?: AdjustmentLocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdjustmentLocationScalarFieldEnum | AdjustmentLocationScalarFieldEnum[]
  }

  /**
   * PriceAdjustment.cust
   */
  export type PriceAdjustment$custArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * PriceAdjustment.locations
   */
  export type PriceAdjustment$locationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    cursor?: LocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * PriceAdjustment without action
   */
  export type PriceAdjustmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAdjustment
     */
    select?: PriceAdjustmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAdjustmentInclude<ExtArgs> | null
  }


  /**
   * Model AdjustmentLocation
   */

  export type AggregateAdjustmentLocation = {
    _count: AdjustmentLocationCountAggregateOutputType | null
    _avg: AdjustmentLocationAvgAggregateOutputType | null
    _sum: AdjustmentLocationSumAggregateOutputType | null
    _min: AdjustmentLocationMinAggregateOutputType | null
    _max: AdjustmentLocationMaxAggregateOutputType | null
  }

  export type AdjustmentLocationAvgAggregateOutputType = {
    id: number | null
    priceAdjustmentId: number | null
    locationId: number | null
  }

  export type AdjustmentLocationSumAggregateOutputType = {
    id: number | null
    priceAdjustmentId: number | null
    locationId: number | null
  }

  export type AdjustmentLocationMinAggregateOutputType = {
    id: number | null
    priceAdjustmentId: number | null
    locationId: number | null
  }

  export type AdjustmentLocationMaxAggregateOutputType = {
    id: number | null
    priceAdjustmentId: number | null
    locationId: number | null
  }

  export type AdjustmentLocationCountAggregateOutputType = {
    id: number
    priceAdjustmentId: number
    locationId: number
    _all: number
  }


  export type AdjustmentLocationAvgAggregateInputType = {
    id?: true
    priceAdjustmentId?: true
    locationId?: true
  }

  export type AdjustmentLocationSumAggregateInputType = {
    id?: true
    priceAdjustmentId?: true
    locationId?: true
  }

  export type AdjustmentLocationMinAggregateInputType = {
    id?: true
    priceAdjustmentId?: true
    locationId?: true
  }

  export type AdjustmentLocationMaxAggregateInputType = {
    id?: true
    priceAdjustmentId?: true
    locationId?: true
  }

  export type AdjustmentLocationCountAggregateInputType = {
    id?: true
    priceAdjustmentId?: true
    locationId?: true
    _all?: true
  }

  export type AdjustmentLocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdjustmentLocation to aggregate.
     */
    where?: AdjustmentLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdjustmentLocations to fetch.
     */
    orderBy?: AdjustmentLocationOrderByWithRelationInput | AdjustmentLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdjustmentLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdjustmentLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdjustmentLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdjustmentLocations
    **/
    _count?: true | AdjustmentLocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdjustmentLocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdjustmentLocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdjustmentLocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdjustmentLocationMaxAggregateInputType
  }

  export type GetAdjustmentLocationAggregateType<T extends AdjustmentLocationAggregateArgs> = {
        [P in keyof T & keyof AggregateAdjustmentLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdjustmentLocation[P]>
      : GetScalarType<T[P], AggregateAdjustmentLocation[P]>
  }




  export type AdjustmentLocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdjustmentLocationWhereInput
    orderBy?: AdjustmentLocationOrderByWithAggregationInput | AdjustmentLocationOrderByWithAggregationInput[]
    by: AdjustmentLocationScalarFieldEnum[] | AdjustmentLocationScalarFieldEnum
    having?: AdjustmentLocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdjustmentLocationCountAggregateInputType | true
    _avg?: AdjustmentLocationAvgAggregateInputType
    _sum?: AdjustmentLocationSumAggregateInputType
    _min?: AdjustmentLocationMinAggregateInputType
    _max?: AdjustmentLocationMaxAggregateInputType
  }

  export type AdjustmentLocationGroupByOutputType = {
    id: number
    priceAdjustmentId: number
    locationId: number
    _count: AdjustmentLocationCountAggregateOutputType | null
    _avg: AdjustmentLocationAvgAggregateOutputType | null
    _sum: AdjustmentLocationSumAggregateOutputType | null
    _min: AdjustmentLocationMinAggregateOutputType | null
    _max: AdjustmentLocationMaxAggregateOutputType | null
  }

  type GetAdjustmentLocationGroupByPayload<T extends AdjustmentLocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdjustmentLocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdjustmentLocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdjustmentLocationGroupByOutputType[P]>
            : GetScalarType<T[P], AdjustmentLocationGroupByOutputType[P]>
        }
      >
    >


  export type AdjustmentLocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    priceAdjustmentId?: boolean
    locationId?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    priceAdjustment?: boolean | PriceAdjustmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adjustmentLocation"]>


  export type AdjustmentLocationSelectScalar = {
    id?: boolean
    priceAdjustmentId?: boolean
    locationId?: boolean
  }

  export type AdjustmentLocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    priceAdjustment?: boolean | PriceAdjustmentDefaultArgs<ExtArgs>
  }

  export type $AdjustmentLocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdjustmentLocation"
    objects: {
      location: Prisma.$LocationPayload<ExtArgs>
      priceAdjustment: Prisma.$PriceAdjustmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      priceAdjustmentId: number
      locationId: number
    }, ExtArgs["result"]["adjustmentLocation"]>
    composites: {}
  }

  type AdjustmentLocationGetPayload<S extends boolean | null | undefined | AdjustmentLocationDefaultArgs> = $Result.GetResult<Prisma.$AdjustmentLocationPayload, S>

  type AdjustmentLocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdjustmentLocationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdjustmentLocationCountAggregateInputType | true
    }

  export interface AdjustmentLocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdjustmentLocation'], meta: { name: 'AdjustmentLocation' } }
    /**
     * Find zero or one AdjustmentLocation that matches the filter.
     * @param {AdjustmentLocationFindUniqueArgs} args - Arguments to find a AdjustmentLocation
     * @example
     * // Get one AdjustmentLocation
     * const adjustmentLocation = await prisma.adjustmentLocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdjustmentLocationFindUniqueArgs>(args: SelectSubset<T, AdjustmentLocationFindUniqueArgs<ExtArgs>>): Prisma__AdjustmentLocationClient<$Result.GetResult<Prisma.$AdjustmentLocationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AdjustmentLocation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdjustmentLocationFindUniqueOrThrowArgs} args - Arguments to find a AdjustmentLocation
     * @example
     * // Get one AdjustmentLocation
     * const adjustmentLocation = await prisma.adjustmentLocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdjustmentLocationFindUniqueOrThrowArgs>(args: SelectSubset<T, AdjustmentLocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdjustmentLocationClient<$Result.GetResult<Prisma.$AdjustmentLocationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AdjustmentLocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdjustmentLocationFindFirstArgs} args - Arguments to find a AdjustmentLocation
     * @example
     * // Get one AdjustmentLocation
     * const adjustmentLocation = await prisma.adjustmentLocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdjustmentLocationFindFirstArgs>(args?: SelectSubset<T, AdjustmentLocationFindFirstArgs<ExtArgs>>): Prisma__AdjustmentLocationClient<$Result.GetResult<Prisma.$AdjustmentLocationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AdjustmentLocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdjustmentLocationFindFirstOrThrowArgs} args - Arguments to find a AdjustmentLocation
     * @example
     * // Get one AdjustmentLocation
     * const adjustmentLocation = await prisma.adjustmentLocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdjustmentLocationFindFirstOrThrowArgs>(args?: SelectSubset<T, AdjustmentLocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdjustmentLocationClient<$Result.GetResult<Prisma.$AdjustmentLocationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AdjustmentLocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdjustmentLocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdjustmentLocations
     * const adjustmentLocations = await prisma.adjustmentLocation.findMany()
     * 
     * // Get first 10 AdjustmentLocations
     * const adjustmentLocations = await prisma.adjustmentLocation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adjustmentLocationWithIdOnly = await prisma.adjustmentLocation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdjustmentLocationFindManyArgs>(args?: SelectSubset<T, AdjustmentLocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdjustmentLocationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AdjustmentLocation.
     * @param {AdjustmentLocationCreateArgs} args - Arguments to create a AdjustmentLocation.
     * @example
     * // Create one AdjustmentLocation
     * const AdjustmentLocation = await prisma.adjustmentLocation.create({
     *   data: {
     *     // ... data to create a AdjustmentLocation
     *   }
     * })
     * 
     */
    create<T extends AdjustmentLocationCreateArgs>(args: SelectSubset<T, AdjustmentLocationCreateArgs<ExtArgs>>): Prisma__AdjustmentLocationClient<$Result.GetResult<Prisma.$AdjustmentLocationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AdjustmentLocations.
     * @param {AdjustmentLocationCreateManyArgs} args - Arguments to create many AdjustmentLocations.
     * @example
     * // Create many AdjustmentLocations
     * const adjustmentLocation = await prisma.adjustmentLocation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdjustmentLocationCreateManyArgs>(args?: SelectSubset<T, AdjustmentLocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AdjustmentLocation.
     * @param {AdjustmentLocationDeleteArgs} args - Arguments to delete one AdjustmentLocation.
     * @example
     * // Delete one AdjustmentLocation
     * const AdjustmentLocation = await prisma.adjustmentLocation.delete({
     *   where: {
     *     // ... filter to delete one AdjustmentLocation
     *   }
     * })
     * 
     */
    delete<T extends AdjustmentLocationDeleteArgs>(args: SelectSubset<T, AdjustmentLocationDeleteArgs<ExtArgs>>): Prisma__AdjustmentLocationClient<$Result.GetResult<Prisma.$AdjustmentLocationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AdjustmentLocation.
     * @param {AdjustmentLocationUpdateArgs} args - Arguments to update one AdjustmentLocation.
     * @example
     * // Update one AdjustmentLocation
     * const adjustmentLocation = await prisma.adjustmentLocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdjustmentLocationUpdateArgs>(args: SelectSubset<T, AdjustmentLocationUpdateArgs<ExtArgs>>): Prisma__AdjustmentLocationClient<$Result.GetResult<Prisma.$AdjustmentLocationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AdjustmentLocations.
     * @param {AdjustmentLocationDeleteManyArgs} args - Arguments to filter AdjustmentLocations to delete.
     * @example
     * // Delete a few AdjustmentLocations
     * const { count } = await prisma.adjustmentLocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdjustmentLocationDeleteManyArgs>(args?: SelectSubset<T, AdjustmentLocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdjustmentLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdjustmentLocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdjustmentLocations
     * const adjustmentLocation = await prisma.adjustmentLocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdjustmentLocationUpdateManyArgs>(args: SelectSubset<T, AdjustmentLocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdjustmentLocation.
     * @param {AdjustmentLocationUpsertArgs} args - Arguments to update or create a AdjustmentLocation.
     * @example
     * // Update or create a AdjustmentLocation
     * const adjustmentLocation = await prisma.adjustmentLocation.upsert({
     *   create: {
     *     // ... data to create a AdjustmentLocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdjustmentLocation we want to update
     *   }
     * })
     */
    upsert<T extends AdjustmentLocationUpsertArgs>(args: SelectSubset<T, AdjustmentLocationUpsertArgs<ExtArgs>>): Prisma__AdjustmentLocationClient<$Result.GetResult<Prisma.$AdjustmentLocationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AdjustmentLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdjustmentLocationCountArgs} args - Arguments to filter AdjustmentLocations to count.
     * @example
     * // Count the number of AdjustmentLocations
     * const count = await prisma.adjustmentLocation.count({
     *   where: {
     *     // ... the filter for the AdjustmentLocations we want to count
     *   }
     * })
    **/
    count<T extends AdjustmentLocationCountArgs>(
      args?: Subset<T, AdjustmentLocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdjustmentLocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdjustmentLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdjustmentLocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdjustmentLocationAggregateArgs>(args: Subset<T, AdjustmentLocationAggregateArgs>): Prisma.PrismaPromise<GetAdjustmentLocationAggregateType<T>>

    /**
     * Group by AdjustmentLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdjustmentLocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdjustmentLocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdjustmentLocationGroupByArgs['orderBy'] }
        : { orderBy?: AdjustmentLocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdjustmentLocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdjustmentLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdjustmentLocation model
   */
  readonly fields: AdjustmentLocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdjustmentLocation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdjustmentLocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    priceAdjustment<T extends PriceAdjustmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PriceAdjustmentDefaultArgs<ExtArgs>>): Prisma__PriceAdjustmentClient<$Result.GetResult<Prisma.$PriceAdjustmentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdjustmentLocation model
   */ 
  interface AdjustmentLocationFieldRefs {
    readonly id: FieldRef<"AdjustmentLocation", 'Int'>
    readonly priceAdjustmentId: FieldRef<"AdjustmentLocation", 'Int'>
    readonly locationId: FieldRef<"AdjustmentLocation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AdjustmentLocation findUnique
   */
  export type AdjustmentLocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdjustmentLocation
     */
    select?: AdjustmentLocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdjustmentLocationInclude<ExtArgs> | null
    /**
     * Filter, which AdjustmentLocation to fetch.
     */
    where: AdjustmentLocationWhereUniqueInput
  }

  /**
   * AdjustmentLocation findUniqueOrThrow
   */
  export type AdjustmentLocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdjustmentLocation
     */
    select?: AdjustmentLocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdjustmentLocationInclude<ExtArgs> | null
    /**
     * Filter, which AdjustmentLocation to fetch.
     */
    where: AdjustmentLocationWhereUniqueInput
  }

  /**
   * AdjustmentLocation findFirst
   */
  export type AdjustmentLocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdjustmentLocation
     */
    select?: AdjustmentLocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdjustmentLocationInclude<ExtArgs> | null
    /**
     * Filter, which AdjustmentLocation to fetch.
     */
    where?: AdjustmentLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdjustmentLocations to fetch.
     */
    orderBy?: AdjustmentLocationOrderByWithRelationInput | AdjustmentLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdjustmentLocations.
     */
    cursor?: AdjustmentLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdjustmentLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdjustmentLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdjustmentLocations.
     */
    distinct?: AdjustmentLocationScalarFieldEnum | AdjustmentLocationScalarFieldEnum[]
  }

  /**
   * AdjustmentLocation findFirstOrThrow
   */
  export type AdjustmentLocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdjustmentLocation
     */
    select?: AdjustmentLocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdjustmentLocationInclude<ExtArgs> | null
    /**
     * Filter, which AdjustmentLocation to fetch.
     */
    where?: AdjustmentLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdjustmentLocations to fetch.
     */
    orderBy?: AdjustmentLocationOrderByWithRelationInput | AdjustmentLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdjustmentLocations.
     */
    cursor?: AdjustmentLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdjustmentLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdjustmentLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdjustmentLocations.
     */
    distinct?: AdjustmentLocationScalarFieldEnum | AdjustmentLocationScalarFieldEnum[]
  }

  /**
   * AdjustmentLocation findMany
   */
  export type AdjustmentLocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdjustmentLocation
     */
    select?: AdjustmentLocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdjustmentLocationInclude<ExtArgs> | null
    /**
     * Filter, which AdjustmentLocations to fetch.
     */
    where?: AdjustmentLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdjustmentLocations to fetch.
     */
    orderBy?: AdjustmentLocationOrderByWithRelationInput | AdjustmentLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdjustmentLocations.
     */
    cursor?: AdjustmentLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdjustmentLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdjustmentLocations.
     */
    skip?: number
    distinct?: AdjustmentLocationScalarFieldEnum | AdjustmentLocationScalarFieldEnum[]
  }

  /**
   * AdjustmentLocation create
   */
  export type AdjustmentLocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdjustmentLocation
     */
    select?: AdjustmentLocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdjustmentLocationInclude<ExtArgs> | null
    /**
     * The data needed to create a AdjustmentLocation.
     */
    data: XOR<AdjustmentLocationCreateInput, AdjustmentLocationUncheckedCreateInput>
  }

  /**
   * AdjustmentLocation createMany
   */
  export type AdjustmentLocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdjustmentLocations.
     */
    data: AdjustmentLocationCreateManyInput | AdjustmentLocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdjustmentLocation update
   */
  export type AdjustmentLocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdjustmentLocation
     */
    select?: AdjustmentLocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdjustmentLocationInclude<ExtArgs> | null
    /**
     * The data needed to update a AdjustmentLocation.
     */
    data: XOR<AdjustmentLocationUpdateInput, AdjustmentLocationUncheckedUpdateInput>
    /**
     * Choose, which AdjustmentLocation to update.
     */
    where: AdjustmentLocationWhereUniqueInput
  }

  /**
   * AdjustmentLocation updateMany
   */
  export type AdjustmentLocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdjustmentLocations.
     */
    data: XOR<AdjustmentLocationUpdateManyMutationInput, AdjustmentLocationUncheckedUpdateManyInput>
    /**
     * Filter which AdjustmentLocations to update
     */
    where?: AdjustmentLocationWhereInput
  }

  /**
   * AdjustmentLocation upsert
   */
  export type AdjustmentLocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdjustmentLocation
     */
    select?: AdjustmentLocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdjustmentLocationInclude<ExtArgs> | null
    /**
     * The filter to search for the AdjustmentLocation to update in case it exists.
     */
    where: AdjustmentLocationWhereUniqueInput
    /**
     * In case the AdjustmentLocation found by the `where` argument doesn't exist, create a new AdjustmentLocation with this data.
     */
    create: XOR<AdjustmentLocationCreateInput, AdjustmentLocationUncheckedCreateInput>
    /**
     * In case the AdjustmentLocation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdjustmentLocationUpdateInput, AdjustmentLocationUncheckedUpdateInput>
  }

  /**
   * AdjustmentLocation delete
   */
  export type AdjustmentLocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdjustmentLocation
     */
    select?: AdjustmentLocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdjustmentLocationInclude<ExtArgs> | null
    /**
     * Filter which AdjustmentLocation to delete.
     */
    where: AdjustmentLocationWhereUniqueInput
  }

  /**
   * AdjustmentLocation deleteMany
   */
  export type AdjustmentLocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdjustmentLocations to delete
     */
    where?: AdjustmentLocationWhereInput
  }

  /**
   * AdjustmentLocation without action
   */
  export type AdjustmentLocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdjustmentLocation
     */
    select?: AdjustmentLocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdjustmentLocationInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    locationId: number | null
    amount: number | null
    paymentMethodId: number | null
    CUST_ID: number | null
    paymentRecordId: number | null
    month: number | null
    year: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    locationId: number | null
    amount: number | null
    paymentMethodId: number | null
    CUST_ID: number | null
    paymentRecordId: number | null
    month: number | null
    year: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    locationId: number | null
    date: Date | null
    amount: number | null
    paymentMethodId: number | null
    CUST_ID: number | null
    paymentRecordId: number | null
    month: number | null
    year: number | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    locationId: number | null
    date: Date | null
    amount: number | null
    paymentMethodId: number | null
    CUST_ID: number | null
    paymentRecordId: number | null
    month: number | null
    year: number | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    locationId: number
    date: number
    amount: number
    paymentMethodId: number
    CUST_ID: number
    paymentRecordId: number
    month: number
    year: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    locationId?: true
    amount?: true
    paymentMethodId?: true
    CUST_ID?: true
    paymentRecordId?: true
    month?: true
    year?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    locationId?: true
    amount?: true
    paymentMethodId?: true
    CUST_ID?: true
    paymentRecordId?: true
    month?: true
    year?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    locationId?: true
    date?: true
    amount?: true
    paymentMethodId?: true
    CUST_ID?: true
    paymentRecordId?: true
    month?: true
    year?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    locationId?: true
    date?: true
    amount?: true
    paymentMethodId?: true
    CUST_ID?: true
    paymentRecordId?: true
    month?: true
    year?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    locationId?: true
    date?: true
    amount?: true
    paymentMethodId?: true
    CUST_ID?: true
    paymentRecordId?: true
    month?: true
    year?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    locationId: number
    date: Date
    amount: number
    paymentMethodId: number
    CUST_ID: number | null
    paymentRecordId: number
    month: number
    year: number
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    date?: boolean
    amount?: boolean
    paymentMethodId?: boolean
    CUST_ID?: boolean
    paymentRecordId?: boolean
    month?: boolean
    year?: boolean
    cust?: boolean | Payment$custArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
    paymentMethod?: boolean | PaymentMethodDefaultArgs<ExtArgs>
    paymentRecord?: boolean | PaymentRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>


  export type PaymentSelectScalar = {
    id?: boolean
    locationId?: boolean
    date?: boolean
    amount?: boolean
    paymentMethodId?: boolean
    CUST_ID?: boolean
    paymentRecordId?: boolean
    month?: boolean
    year?: boolean
  }

  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cust?: boolean | Payment$custArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
    paymentMethod?: boolean | PaymentMethodDefaultArgs<ExtArgs>
    paymentRecord?: boolean | PaymentRecordDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      cust: Prisma.$UserPayload<ExtArgs> | null
      location: Prisma.$LocationPayload<ExtArgs>
      paymentMethod: Prisma.$PaymentMethodPayload<ExtArgs>
      paymentRecord: Prisma.$PaymentRecordPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      locationId: number
      date: Date
      amount: number
      paymentMethodId: number
      CUST_ID: number | null
      paymentRecordId: number
      month: number
      year: number
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cust<T extends Payment$custArgs<ExtArgs> = {}>(args?: Subset<T, Payment$custArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    paymentMethod<T extends PaymentMethodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentMethodDefaultArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    paymentRecord<T extends PaymentRecordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentRecordDefaultArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */ 
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly locationId: FieldRef<"Payment", 'Int'>
    readonly date: FieldRef<"Payment", 'DateTime'>
    readonly amount: FieldRef<"Payment", 'Int'>
    readonly paymentMethodId: FieldRef<"Payment", 'Int'>
    readonly CUST_ID: FieldRef<"Payment", 'Int'>
    readonly paymentRecordId: FieldRef<"Payment", 'Int'>
    readonly month: FieldRef<"Payment", 'Int'>
    readonly year: FieldRef<"Payment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
  }

  /**
   * Payment.cust
   */
  export type Payment$custArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model PaymentRecord
   */

  export type AggregatePaymentRecord = {
    _count: PaymentRecordCountAggregateOutputType | null
    _avg: PaymentRecordAvgAggregateOutputType | null
    _sum: PaymentRecordSumAggregateOutputType | null
    _min: PaymentRecordMinAggregateOutputType | null
    _max: PaymentRecordMaxAggregateOutputType | null
  }

  export type PaymentRecordAvgAggregateOutputType = {
    id: number | null
    locationId: number | null
    month: number | null
    year: number | null
    CUST_ID: number | null
    remainingAmount: number | null
    totalPaid: number | null
    totalRent: number | null
  }

  export type PaymentRecordSumAggregateOutputType = {
    id: number | null
    locationId: number | null
    month: number | null
    year: number | null
    CUST_ID: number | null
    remainingAmount: number | null
    totalPaid: number | null
    totalRent: number | null
  }

  export type PaymentRecordMinAggregateOutputType = {
    id: number | null
    locationId: number | null
    month: number | null
    year: number | null
    CUST_ID: number | null
    remainingAmount: number | null
    totalPaid: number | null
    totalRent: number | null
  }

  export type PaymentRecordMaxAggregateOutputType = {
    id: number | null
    locationId: number | null
    month: number | null
    year: number | null
    CUST_ID: number | null
    remainingAmount: number | null
    totalPaid: number | null
    totalRent: number | null
  }

  export type PaymentRecordCountAggregateOutputType = {
    id: number
    locationId: number
    month: number
    year: number
    CUST_ID: number
    remainingAmount: number
    totalPaid: number
    totalRent: number
    _all: number
  }


  export type PaymentRecordAvgAggregateInputType = {
    id?: true
    locationId?: true
    month?: true
    year?: true
    CUST_ID?: true
    remainingAmount?: true
    totalPaid?: true
    totalRent?: true
  }

  export type PaymentRecordSumAggregateInputType = {
    id?: true
    locationId?: true
    month?: true
    year?: true
    CUST_ID?: true
    remainingAmount?: true
    totalPaid?: true
    totalRent?: true
  }

  export type PaymentRecordMinAggregateInputType = {
    id?: true
    locationId?: true
    month?: true
    year?: true
    CUST_ID?: true
    remainingAmount?: true
    totalPaid?: true
    totalRent?: true
  }

  export type PaymentRecordMaxAggregateInputType = {
    id?: true
    locationId?: true
    month?: true
    year?: true
    CUST_ID?: true
    remainingAmount?: true
    totalPaid?: true
    totalRent?: true
  }

  export type PaymentRecordCountAggregateInputType = {
    id?: true
    locationId?: true
    month?: true
    year?: true
    CUST_ID?: true
    remainingAmount?: true
    totalPaid?: true
    totalRent?: true
    _all?: true
  }

  export type PaymentRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentRecord to aggregate.
     */
    where?: PaymentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRecords to fetch.
     */
    orderBy?: PaymentRecordOrderByWithRelationInput | PaymentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentRecords
    **/
    _count?: true | PaymentRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentRecordMaxAggregateInputType
  }

  export type GetPaymentRecordAggregateType<T extends PaymentRecordAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentRecord[P]>
      : GetScalarType<T[P], AggregatePaymentRecord[P]>
  }




  export type PaymentRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentRecordWhereInput
    orderBy?: PaymentRecordOrderByWithAggregationInput | PaymentRecordOrderByWithAggregationInput[]
    by: PaymentRecordScalarFieldEnum[] | PaymentRecordScalarFieldEnum
    having?: PaymentRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentRecordCountAggregateInputType | true
    _avg?: PaymentRecordAvgAggregateInputType
    _sum?: PaymentRecordSumAggregateInputType
    _min?: PaymentRecordMinAggregateInputType
    _max?: PaymentRecordMaxAggregateInputType
  }

  export type PaymentRecordGroupByOutputType = {
    id: number
    locationId: number
    month: number
    year: number
    CUST_ID: number | null
    remainingAmount: number
    totalPaid: number
    totalRent: number
    _count: PaymentRecordCountAggregateOutputType | null
    _avg: PaymentRecordAvgAggregateOutputType | null
    _sum: PaymentRecordSumAggregateOutputType | null
    _min: PaymentRecordMinAggregateOutputType | null
    _max: PaymentRecordMaxAggregateOutputType | null
  }

  type GetPaymentRecordGroupByPayload<T extends PaymentRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentRecordGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentRecordGroupByOutputType[P]>
        }
      >
    >


  export type PaymentRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    month?: boolean
    year?: boolean
    CUST_ID?: boolean
    remainingAmount?: boolean
    totalPaid?: boolean
    totalRent?: boolean
    payments?: boolean | PaymentRecord$paymentsArgs<ExtArgs>
    cust?: boolean | PaymentRecord$custArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
    _count?: boolean | PaymentRecordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentRecord"]>


  export type PaymentRecordSelectScalar = {
    id?: boolean
    locationId?: boolean
    month?: boolean
    year?: boolean
    CUST_ID?: boolean
    remainingAmount?: boolean
    totalPaid?: boolean
    totalRent?: boolean
  }

  export type PaymentRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | PaymentRecord$paymentsArgs<ExtArgs>
    cust?: boolean | PaymentRecord$custArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
    _count?: boolean | PaymentRecordCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PaymentRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentRecord"
    objects: {
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      cust: Prisma.$UserPayload<ExtArgs> | null
      location: Prisma.$LocationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      locationId: number
      month: number
      year: number
      CUST_ID: number | null
      remainingAmount: number
      totalPaid: number
      totalRent: number
    }, ExtArgs["result"]["paymentRecord"]>
    composites: {}
  }

  type PaymentRecordGetPayload<S extends boolean | null | undefined | PaymentRecordDefaultArgs> = $Result.GetResult<Prisma.$PaymentRecordPayload, S>

  type PaymentRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentRecordFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentRecordCountAggregateInputType | true
    }

  export interface PaymentRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentRecord'], meta: { name: 'PaymentRecord' } }
    /**
     * Find zero or one PaymentRecord that matches the filter.
     * @param {PaymentRecordFindUniqueArgs} args - Arguments to find a PaymentRecord
     * @example
     * // Get one PaymentRecord
     * const paymentRecord = await prisma.paymentRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentRecordFindUniqueArgs>(args: SelectSubset<T, PaymentRecordFindUniqueArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PaymentRecord that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PaymentRecordFindUniqueOrThrowArgs} args - Arguments to find a PaymentRecord
     * @example
     * // Get one PaymentRecord
     * const paymentRecord = await prisma.paymentRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PaymentRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordFindFirstArgs} args - Arguments to find a PaymentRecord
     * @example
     * // Get one PaymentRecord
     * const paymentRecord = await prisma.paymentRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentRecordFindFirstArgs>(args?: SelectSubset<T, PaymentRecordFindFirstArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PaymentRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordFindFirstOrThrowArgs} args - Arguments to find a PaymentRecord
     * @example
     * // Get one PaymentRecord
     * const paymentRecord = await prisma.paymentRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PaymentRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentRecords
     * const paymentRecords = await prisma.paymentRecord.findMany()
     * 
     * // Get first 10 PaymentRecords
     * const paymentRecords = await prisma.paymentRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentRecordWithIdOnly = await prisma.paymentRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentRecordFindManyArgs>(args?: SelectSubset<T, PaymentRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PaymentRecord.
     * @param {PaymentRecordCreateArgs} args - Arguments to create a PaymentRecord.
     * @example
     * // Create one PaymentRecord
     * const PaymentRecord = await prisma.paymentRecord.create({
     *   data: {
     *     // ... data to create a PaymentRecord
     *   }
     * })
     * 
     */
    create<T extends PaymentRecordCreateArgs>(args: SelectSubset<T, PaymentRecordCreateArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PaymentRecords.
     * @param {PaymentRecordCreateManyArgs} args - Arguments to create many PaymentRecords.
     * @example
     * // Create many PaymentRecords
     * const paymentRecord = await prisma.paymentRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentRecordCreateManyArgs>(args?: SelectSubset<T, PaymentRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PaymentRecord.
     * @param {PaymentRecordDeleteArgs} args - Arguments to delete one PaymentRecord.
     * @example
     * // Delete one PaymentRecord
     * const PaymentRecord = await prisma.paymentRecord.delete({
     *   where: {
     *     // ... filter to delete one PaymentRecord
     *   }
     * })
     * 
     */
    delete<T extends PaymentRecordDeleteArgs>(args: SelectSubset<T, PaymentRecordDeleteArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PaymentRecord.
     * @param {PaymentRecordUpdateArgs} args - Arguments to update one PaymentRecord.
     * @example
     * // Update one PaymentRecord
     * const paymentRecord = await prisma.paymentRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentRecordUpdateArgs>(args: SelectSubset<T, PaymentRecordUpdateArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PaymentRecords.
     * @param {PaymentRecordDeleteManyArgs} args - Arguments to filter PaymentRecords to delete.
     * @example
     * // Delete a few PaymentRecords
     * const { count } = await prisma.paymentRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentRecordDeleteManyArgs>(args?: SelectSubset<T, PaymentRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentRecords
     * const paymentRecord = await prisma.paymentRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentRecordUpdateManyArgs>(args: SelectSubset<T, PaymentRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentRecord.
     * @param {PaymentRecordUpsertArgs} args - Arguments to update or create a PaymentRecord.
     * @example
     * // Update or create a PaymentRecord
     * const paymentRecord = await prisma.paymentRecord.upsert({
     *   create: {
     *     // ... data to create a PaymentRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentRecord we want to update
     *   }
     * })
     */
    upsert<T extends PaymentRecordUpsertArgs>(args: SelectSubset<T, PaymentRecordUpsertArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PaymentRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordCountArgs} args - Arguments to filter PaymentRecords to count.
     * @example
     * // Count the number of PaymentRecords
     * const count = await prisma.paymentRecord.count({
     *   where: {
     *     // ... the filter for the PaymentRecords we want to count
     *   }
     * })
    **/
    count<T extends PaymentRecordCountArgs>(
      args?: Subset<T, PaymentRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentRecordAggregateArgs>(args: Subset<T, PaymentRecordAggregateArgs>): Prisma.PrismaPromise<GetPaymentRecordAggregateType<T>>

    /**
     * Group by PaymentRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentRecordGroupByArgs['orderBy'] }
        : { orderBy?: PaymentRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentRecord model
   */
  readonly fields: PaymentRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payments<T extends PaymentRecord$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, PaymentRecord$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany"> | Null>
    cust<T extends PaymentRecord$custArgs<ExtArgs> = {}>(args?: Subset<T, PaymentRecord$custArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentRecord model
   */ 
  interface PaymentRecordFieldRefs {
    readonly id: FieldRef<"PaymentRecord", 'Int'>
    readonly locationId: FieldRef<"PaymentRecord", 'Int'>
    readonly month: FieldRef<"PaymentRecord", 'Int'>
    readonly year: FieldRef<"PaymentRecord", 'Int'>
    readonly CUST_ID: FieldRef<"PaymentRecord", 'Int'>
    readonly remainingAmount: FieldRef<"PaymentRecord", 'Int'>
    readonly totalPaid: FieldRef<"PaymentRecord", 'Int'>
    readonly totalRent: FieldRef<"PaymentRecord", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PaymentRecord findUnique
   */
  export type PaymentRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRecord to fetch.
     */
    where: PaymentRecordWhereUniqueInput
  }

  /**
   * PaymentRecord findUniqueOrThrow
   */
  export type PaymentRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRecord to fetch.
     */
    where: PaymentRecordWhereUniqueInput
  }

  /**
   * PaymentRecord findFirst
   */
  export type PaymentRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRecord to fetch.
     */
    where?: PaymentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRecords to fetch.
     */
    orderBy?: PaymentRecordOrderByWithRelationInput | PaymentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentRecords.
     */
    cursor?: PaymentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentRecords.
     */
    distinct?: PaymentRecordScalarFieldEnum | PaymentRecordScalarFieldEnum[]
  }

  /**
   * PaymentRecord findFirstOrThrow
   */
  export type PaymentRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRecord to fetch.
     */
    where?: PaymentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRecords to fetch.
     */
    orderBy?: PaymentRecordOrderByWithRelationInput | PaymentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentRecords.
     */
    cursor?: PaymentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentRecords.
     */
    distinct?: PaymentRecordScalarFieldEnum | PaymentRecordScalarFieldEnum[]
  }

  /**
   * PaymentRecord findMany
   */
  export type PaymentRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRecords to fetch.
     */
    where?: PaymentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRecords to fetch.
     */
    orderBy?: PaymentRecordOrderByWithRelationInput | PaymentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentRecords.
     */
    cursor?: PaymentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRecords.
     */
    skip?: number
    distinct?: PaymentRecordScalarFieldEnum | PaymentRecordScalarFieldEnum[]
  }

  /**
   * PaymentRecord create
   */
  export type PaymentRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentRecord.
     */
    data: XOR<PaymentRecordCreateInput, PaymentRecordUncheckedCreateInput>
  }

  /**
   * PaymentRecord createMany
   */
  export type PaymentRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentRecords.
     */
    data: PaymentRecordCreateManyInput | PaymentRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentRecord update
   */
  export type PaymentRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentRecord.
     */
    data: XOR<PaymentRecordUpdateInput, PaymentRecordUncheckedUpdateInput>
    /**
     * Choose, which PaymentRecord to update.
     */
    where: PaymentRecordWhereUniqueInput
  }

  /**
   * PaymentRecord updateMany
   */
  export type PaymentRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentRecords.
     */
    data: XOR<PaymentRecordUpdateManyMutationInput, PaymentRecordUncheckedUpdateManyInput>
    /**
     * Filter which PaymentRecords to update
     */
    where?: PaymentRecordWhereInput
  }

  /**
   * PaymentRecord upsert
   */
  export type PaymentRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentRecord to update in case it exists.
     */
    where: PaymentRecordWhereUniqueInput
    /**
     * In case the PaymentRecord found by the `where` argument doesn't exist, create a new PaymentRecord with this data.
     */
    create: XOR<PaymentRecordCreateInput, PaymentRecordUncheckedCreateInput>
    /**
     * In case the PaymentRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentRecordUpdateInput, PaymentRecordUncheckedUpdateInput>
  }

  /**
   * PaymentRecord delete
   */
  export type PaymentRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * Filter which PaymentRecord to delete.
     */
    where: PaymentRecordWhereUniqueInput
  }

  /**
   * PaymentRecord deleteMany
   */
  export type PaymentRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentRecords to delete
     */
    where?: PaymentRecordWhereInput
  }

  /**
   * PaymentRecord.payments
   */
  export type PaymentRecord$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * PaymentRecord.cust
   */
  export type PaymentRecord$custArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * PaymentRecord without action
   */
  export type PaymentRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
  }


  /**
   * Model PaymentMethod
   */

  export type AggregatePaymentMethod = {
    _count: PaymentMethodCountAggregateOutputType | null
    _avg: PaymentMethodAvgAggregateOutputType | null
    _sum: PaymentMethodSumAggregateOutputType | null
    _min: PaymentMethodMinAggregateOutputType | null
    _max: PaymentMethodMaxAggregateOutputType | null
  }

  export type PaymentMethodAvgAggregateOutputType = {
    id: number | null
  }

  export type PaymentMethodSumAggregateOutputType = {
    id: number | null
  }

  export type PaymentMethodMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type PaymentMethodMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type PaymentMethodCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type PaymentMethodAvgAggregateInputType = {
    id?: true
  }

  export type PaymentMethodSumAggregateInputType = {
    id?: true
  }

  export type PaymentMethodMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type PaymentMethodMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type PaymentMethodCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type PaymentMethodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMethod to aggregate.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentMethods
    **/
    _count?: true | PaymentMethodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentMethodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentMethodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMethodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMethodMaxAggregateInputType
  }

  export type GetPaymentMethodAggregateType<T extends PaymentMethodAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentMethod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentMethod[P]>
      : GetScalarType<T[P], AggregatePaymentMethod[P]>
  }




  export type PaymentMethodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentMethodWhereInput
    orderBy?: PaymentMethodOrderByWithAggregationInput | PaymentMethodOrderByWithAggregationInput[]
    by: PaymentMethodScalarFieldEnum[] | PaymentMethodScalarFieldEnum
    having?: PaymentMethodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentMethodCountAggregateInputType | true
    _avg?: PaymentMethodAvgAggregateInputType
    _sum?: PaymentMethodSumAggregateInputType
    _min?: PaymentMethodMinAggregateInputType
    _max?: PaymentMethodMaxAggregateInputType
  }

  export type PaymentMethodGroupByOutputType = {
    id: number
    name: string
    _count: PaymentMethodCountAggregateOutputType | null
    _avg: PaymentMethodAvgAggregateOutputType | null
    _sum: PaymentMethodSumAggregateOutputType | null
    _min: PaymentMethodMinAggregateOutputType | null
    _max: PaymentMethodMaxAggregateOutputType | null
  }

  type GetPaymentMethodGroupByPayload<T extends PaymentMethodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentMethodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentMethodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentMethodGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentMethodGroupByOutputType[P]>
        }
      >
    >


  export type PaymentMethodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    payments?: boolean | PaymentMethod$paymentsArgs<ExtArgs>
    _count?: boolean | PaymentMethodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentMethod"]>


  export type PaymentMethodSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type PaymentMethodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | PaymentMethod$paymentsArgs<ExtArgs>
    _count?: boolean | PaymentMethodCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PaymentMethodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentMethod"
    objects: {
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["paymentMethod"]>
    composites: {}
  }

  type PaymentMethodGetPayload<S extends boolean | null | undefined | PaymentMethodDefaultArgs> = $Result.GetResult<Prisma.$PaymentMethodPayload, S>

  type PaymentMethodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentMethodFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentMethodCountAggregateInputType | true
    }

  export interface PaymentMethodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentMethod'], meta: { name: 'PaymentMethod' } }
    /**
     * Find zero or one PaymentMethod that matches the filter.
     * @param {PaymentMethodFindUniqueArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentMethodFindUniqueArgs>(args: SelectSubset<T, PaymentMethodFindUniqueArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PaymentMethod that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PaymentMethodFindUniqueOrThrowArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentMethodFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentMethodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PaymentMethod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindFirstArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentMethodFindFirstArgs>(args?: SelectSubset<T, PaymentMethodFindFirstArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PaymentMethod that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindFirstOrThrowArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentMethodFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentMethodFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PaymentMethods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentMethods
     * const paymentMethods = await prisma.paymentMethod.findMany()
     * 
     * // Get first 10 PaymentMethods
     * const paymentMethods = await prisma.paymentMethod.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentMethodWithIdOnly = await prisma.paymentMethod.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentMethodFindManyArgs>(args?: SelectSubset<T, PaymentMethodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PaymentMethod.
     * @param {PaymentMethodCreateArgs} args - Arguments to create a PaymentMethod.
     * @example
     * // Create one PaymentMethod
     * const PaymentMethod = await prisma.paymentMethod.create({
     *   data: {
     *     // ... data to create a PaymentMethod
     *   }
     * })
     * 
     */
    create<T extends PaymentMethodCreateArgs>(args: SelectSubset<T, PaymentMethodCreateArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PaymentMethods.
     * @param {PaymentMethodCreateManyArgs} args - Arguments to create many PaymentMethods.
     * @example
     * // Create many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentMethodCreateManyArgs>(args?: SelectSubset<T, PaymentMethodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PaymentMethod.
     * @param {PaymentMethodDeleteArgs} args - Arguments to delete one PaymentMethod.
     * @example
     * // Delete one PaymentMethod
     * const PaymentMethod = await prisma.paymentMethod.delete({
     *   where: {
     *     // ... filter to delete one PaymentMethod
     *   }
     * })
     * 
     */
    delete<T extends PaymentMethodDeleteArgs>(args: SelectSubset<T, PaymentMethodDeleteArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PaymentMethod.
     * @param {PaymentMethodUpdateArgs} args - Arguments to update one PaymentMethod.
     * @example
     * // Update one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentMethodUpdateArgs>(args: SelectSubset<T, PaymentMethodUpdateArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PaymentMethods.
     * @param {PaymentMethodDeleteManyArgs} args - Arguments to filter PaymentMethods to delete.
     * @example
     * // Delete a few PaymentMethods
     * const { count } = await prisma.paymentMethod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentMethodDeleteManyArgs>(args?: SelectSubset<T, PaymentMethodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentMethodUpdateManyArgs>(args: SelectSubset<T, PaymentMethodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentMethod.
     * @param {PaymentMethodUpsertArgs} args - Arguments to update or create a PaymentMethod.
     * @example
     * // Update or create a PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.upsert({
     *   create: {
     *     // ... data to create a PaymentMethod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentMethod we want to update
     *   }
     * })
     */
    upsert<T extends PaymentMethodUpsertArgs>(args: SelectSubset<T, PaymentMethodUpsertArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodCountArgs} args - Arguments to filter PaymentMethods to count.
     * @example
     * // Count the number of PaymentMethods
     * const count = await prisma.paymentMethod.count({
     *   where: {
     *     // ... the filter for the PaymentMethods we want to count
     *   }
     * })
    **/
    count<T extends PaymentMethodCountArgs>(
      args?: Subset<T, PaymentMethodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentMethodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentMethodAggregateArgs>(args: Subset<T, PaymentMethodAggregateArgs>): Prisma.PrismaPromise<GetPaymentMethodAggregateType<T>>

    /**
     * Group by PaymentMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentMethodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentMethodGroupByArgs['orderBy'] }
        : { orderBy?: PaymentMethodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentMethodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentMethodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentMethod model
   */
  readonly fields: PaymentMethodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentMethod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentMethodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payments<T extends PaymentMethod$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, PaymentMethod$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentMethod model
   */ 
  interface PaymentMethodFieldRefs {
    readonly id: FieldRef<"PaymentMethod", 'Int'>
    readonly name: FieldRef<"PaymentMethod", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PaymentMethod findUnique
   */
  export type PaymentMethodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod findUniqueOrThrow
   */
  export type PaymentMethodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod findFirst
   */
  export type PaymentMethodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethods.
     */
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * PaymentMethod findFirstOrThrow
   */
  export type PaymentMethodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethods.
     */
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * PaymentMethod findMany
   */
  export type PaymentMethodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethods to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * PaymentMethod create
   */
  export type PaymentMethodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentMethod.
     */
    data: XOR<PaymentMethodCreateInput, PaymentMethodUncheckedCreateInput>
  }

  /**
   * PaymentMethod createMany
   */
  export type PaymentMethodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentMethods.
     */
    data: PaymentMethodCreateManyInput | PaymentMethodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentMethod update
   */
  export type PaymentMethodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentMethod.
     */
    data: XOR<PaymentMethodUpdateInput, PaymentMethodUncheckedUpdateInput>
    /**
     * Choose, which PaymentMethod to update.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod updateMany
   */
  export type PaymentMethodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentMethods.
     */
    data: XOR<PaymentMethodUpdateManyMutationInput, PaymentMethodUncheckedUpdateManyInput>
    /**
     * Filter which PaymentMethods to update
     */
    where?: PaymentMethodWhereInput
  }

  /**
   * PaymentMethod upsert
   */
  export type PaymentMethodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentMethod to update in case it exists.
     */
    where: PaymentMethodWhereUniqueInput
    /**
     * In case the PaymentMethod found by the `where` argument doesn't exist, create a new PaymentMethod with this data.
     */
    create: XOR<PaymentMethodCreateInput, PaymentMethodUncheckedCreateInput>
    /**
     * In case the PaymentMethod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentMethodUpdateInput, PaymentMethodUncheckedUpdateInput>
  }

  /**
   * PaymentMethod delete
   */
  export type PaymentMethodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter which PaymentMethod to delete.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod deleteMany
   */
  export type PaymentMethodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMethods to delete
     */
    where?: PaymentMethodWhereInput
  }

  /**
   * PaymentMethod.payments
   */
  export type PaymentMethod$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * PaymentMethod without action
   */
  export type PaymentMethodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    id: number | null
    locationId: number | null
    CUST_ID: number | null
  }

  export type InvoiceSumAggregateOutputType = {
    id: number | null
    locationId: number | null
    CUST_ID: number | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: number | null
    locationId: number | null
    date: Date | null
    CUST_ID: number | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: number | null
    locationId: number | null
    date: Date | null
    CUST_ID: number | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    locationId: number
    date: number
    CUST_ID: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    id?: true
    locationId?: true
    CUST_ID?: true
  }

  export type InvoiceSumAggregateInputType = {
    id?: true
    locationId?: true
    CUST_ID?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    locationId?: true
    date?: true
    CUST_ID?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    locationId?: true
    date?: true
    CUST_ID?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    locationId?: true
    date?: true
    CUST_ID?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: number
    locationId: number
    date: Date
    CUST_ID: number | null
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    date?: boolean
    CUST_ID?: boolean
    cust?: boolean | Invoice$custArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>


  export type InvoiceSelectScalar = {
    id?: boolean
    locationId?: boolean
    date?: boolean
    CUST_ID?: boolean
  }

  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cust?: boolean | Invoice$custArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      cust: Prisma.$UserPayload<ExtArgs> | null
      location: Prisma.$LocationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      locationId: number
      date: Date
      CUST_ID: number | null
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cust<T extends Invoice$custArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$custArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Invoice model
   */ 
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'Int'>
    readonly locationId: FieldRef<"Invoice", 'Int'>
    readonly date: FieldRef<"Invoice", 'DateTime'>
    readonly CUST_ID: FieldRef<"Invoice", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
  }

  /**
   * Invoice.cust
   */
  export type Invoice$custArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model PaymentSchedule
   */

  export type AggregatePaymentSchedule = {
    _count: PaymentScheduleCountAggregateOutputType | null
    _avg: PaymentScheduleAvgAggregateOutputType | null
    _sum: PaymentScheduleSumAggregateOutputType | null
    _min: PaymentScheduleMinAggregateOutputType | null
    _max: PaymentScheduleMaxAggregateOutputType | null
  }

  export type PaymentScheduleAvgAggregateOutputType = {
    id: number | null
    locationId: number | null
    CUST_ID: number | null
  }

  export type PaymentScheduleSumAggregateOutputType = {
    id: number | null
    locationId: number | null
    CUST_ID: number | null
  }

  export type PaymentScheduleMinAggregateOutputType = {
    id: number | null
    locationId: number | null
    dueDate: Date | null
    CUST_ID: number | null
  }

  export type PaymentScheduleMaxAggregateOutputType = {
    id: number | null
    locationId: number | null
    dueDate: Date | null
    CUST_ID: number | null
  }

  export type PaymentScheduleCountAggregateOutputType = {
    id: number
    locationId: number
    dueDate: number
    CUST_ID: number
    _all: number
  }


  export type PaymentScheduleAvgAggregateInputType = {
    id?: true
    locationId?: true
    CUST_ID?: true
  }

  export type PaymentScheduleSumAggregateInputType = {
    id?: true
    locationId?: true
    CUST_ID?: true
  }

  export type PaymentScheduleMinAggregateInputType = {
    id?: true
    locationId?: true
    dueDate?: true
    CUST_ID?: true
  }

  export type PaymentScheduleMaxAggregateInputType = {
    id?: true
    locationId?: true
    dueDate?: true
    CUST_ID?: true
  }

  export type PaymentScheduleCountAggregateInputType = {
    id?: true
    locationId?: true
    dueDate?: true
    CUST_ID?: true
    _all?: true
  }

  export type PaymentScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentSchedule to aggregate.
     */
    where?: PaymentScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentSchedules to fetch.
     */
    orderBy?: PaymentScheduleOrderByWithRelationInput | PaymentScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentSchedules
    **/
    _count?: true | PaymentScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentScheduleMaxAggregateInputType
  }

  export type GetPaymentScheduleAggregateType<T extends PaymentScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentSchedule[P]>
      : GetScalarType<T[P], AggregatePaymentSchedule[P]>
  }




  export type PaymentScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentScheduleWhereInput
    orderBy?: PaymentScheduleOrderByWithAggregationInput | PaymentScheduleOrderByWithAggregationInput[]
    by: PaymentScheduleScalarFieldEnum[] | PaymentScheduleScalarFieldEnum
    having?: PaymentScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentScheduleCountAggregateInputType | true
    _avg?: PaymentScheduleAvgAggregateInputType
    _sum?: PaymentScheduleSumAggregateInputType
    _min?: PaymentScheduleMinAggregateInputType
    _max?: PaymentScheduleMaxAggregateInputType
  }

  export type PaymentScheduleGroupByOutputType = {
    id: number
    locationId: number
    dueDate: Date
    CUST_ID: number | null
    _count: PaymentScheduleCountAggregateOutputType | null
    _avg: PaymentScheduleAvgAggregateOutputType | null
    _sum: PaymentScheduleSumAggregateOutputType | null
    _min: PaymentScheduleMinAggregateOutputType | null
    _max: PaymentScheduleMaxAggregateOutputType | null
  }

  type GetPaymentScheduleGroupByPayload<T extends PaymentScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentScheduleGroupByOutputType[P]>
        }
      >
    >


  export type PaymentScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    dueDate?: boolean
    CUST_ID?: boolean
    cust?: boolean | PaymentSchedule$custArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentSchedule"]>


  export type PaymentScheduleSelectScalar = {
    id?: boolean
    locationId?: boolean
    dueDate?: boolean
    CUST_ID?: boolean
  }

  export type PaymentScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cust?: boolean | PaymentSchedule$custArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }

  export type $PaymentSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentSchedule"
    objects: {
      cust: Prisma.$UserPayload<ExtArgs> | null
      location: Prisma.$LocationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      locationId: number
      dueDate: Date
      CUST_ID: number | null
    }, ExtArgs["result"]["paymentSchedule"]>
    composites: {}
  }

  type PaymentScheduleGetPayload<S extends boolean | null | undefined | PaymentScheduleDefaultArgs> = $Result.GetResult<Prisma.$PaymentSchedulePayload, S>

  type PaymentScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentScheduleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentScheduleCountAggregateInputType | true
    }

  export interface PaymentScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentSchedule'], meta: { name: 'PaymentSchedule' } }
    /**
     * Find zero or one PaymentSchedule that matches the filter.
     * @param {PaymentScheduleFindUniqueArgs} args - Arguments to find a PaymentSchedule
     * @example
     * // Get one PaymentSchedule
     * const paymentSchedule = await prisma.paymentSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentScheduleFindUniqueArgs>(args: SelectSubset<T, PaymentScheduleFindUniqueArgs<ExtArgs>>): Prisma__PaymentScheduleClient<$Result.GetResult<Prisma.$PaymentSchedulePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PaymentSchedule that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PaymentScheduleFindUniqueOrThrowArgs} args - Arguments to find a PaymentSchedule
     * @example
     * // Get one PaymentSchedule
     * const paymentSchedule = await prisma.paymentSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentScheduleClient<$Result.GetResult<Prisma.$PaymentSchedulePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PaymentSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentScheduleFindFirstArgs} args - Arguments to find a PaymentSchedule
     * @example
     * // Get one PaymentSchedule
     * const paymentSchedule = await prisma.paymentSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentScheduleFindFirstArgs>(args?: SelectSubset<T, PaymentScheduleFindFirstArgs<ExtArgs>>): Prisma__PaymentScheduleClient<$Result.GetResult<Prisma.$PaymentSchedulePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PaymentSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentScheduleFindFirstOrThrowArgs} args - Arguments to find a PaymentSchedule
     * @example
     * // Get one PaymentSchedule
     * const paymentSchedule = await prisma.paymentSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentScheduleClient<$Result.GetResult<Prisma.$PaymentSchedulePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PaymentSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentSchedules
     * const paymentSchedules = await prisma.paymentSchedule.findMany()
     * 
     * // Get first 10 PaymentSchedules
     * const paymentSchedules = await prisma.paymentSchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentScheduleWithIdOnly = await prisma.paymentSchedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentScheduleFindManyArgs>(args?: SelectSubset<T, PaymentScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentSchedulePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PaymentSchedule.
     * @param {PaymentScheduleCreateArgs} args - Arguments to create a PaymentSchedule.
     * @example
     * // Create one PaymentSchedule
     * const PaymentSchedule = await prisma.paymentSchedule.create({
     *   data: {
     *     // ... data to create a PaymentSchedule
     *   }
     * })
     * 
     */
    create<T extends PaymentScheduleCreateArgs>(args: SelectSubset<T, PaymentScheduleCreateArgs<ExtArgs>>): Prisma__PaymentScheduleClient<$Result.GetResult<Prisma.$PaymentSchedulePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PaymentSchedules.
     * @param {PaymentScheduleCreateManyArgs} args - Arguments to create many PaymentSchedules.
     * @example
     * // Create many PaymentSchedules
     * const paymentSchedule = await prisma.paymentSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentScheduleCreateManyArgs>(args?: SelectSubset<T, PaymentScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PaymentSchedule.
     * @param {PaymentScheduleDeleteArgs} args - Arguments to delete one PaymentSchedule.
     * @example
     * // Delete one PaymentSchedule
     * const PaymentSchedule = await prisma.paymentSchedule.delete({
     *   where: {
     *     // ... filter to delete one PaymentSchedule
     *   }
     * })
     * 
     */
    delete<T extends PaymentScheduleDeleteArgs>(args: SelectSubset<T, PaymentScheduleDeleteArgs<ExtArgs>>): Prisma__PaymentScheduleClient<$Result.GetResult<Prisma.$PaymentSchedulePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PaymentSchedule.
     * @param {PaymentScheduleUpdateArgs} args - Arguments to update one PaymentSchedule.
     * @example
     * // Update one PaymentSchedule
     * const paymentSchedule = await prisma.paymentSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentScheduleUpdateArgs>(args: SelectSubset<T, PaymentScheduleUpdateArgs<ExtArgs>>): Prisma__PaymentScheduleClient<$Result.GetResult<Prisma.$PaymentSchedulePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PaymentSchedules.
     * @param {PaymentScheduleDeleteManyArgs} args - Arguments to filter PaymentSchedules to delete.
     * @example
     * // Delete a few PaymentSchedules
     * const { count } = await prisma.paymentSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentScheduleDeleteManyArgs>(args?: SelectSubset<T, PaymentScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentSchedules
     * const paymentSchedule = await prisma.paymentSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentScheduleUpdateManyArgs>(args: SelectSubset<T, PaymentScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentSchedule.
     * @param {PaymentScheduleUpsertArgs} args - Arguments to update or create a PaymentSchedule.
     * @example
     * // Update or create a PaymentSchedule
     * const paymentSchedule = await prisma.paymentSchedule.upsert({
     *   create: {
     *     // ... data to create a PaymentSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentSchedule we want to update
     *   }
     * })
     */
    upsert<T extends PaymentScheduleUpsertArgs>(args: SelectSubset<T, PaymentScheduleUpsertArgs<ExtArgs>>): Prisma__PaymentScheduleClient<$Result.GetResult<Prisma.$PaymentSchedulePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PaymentSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentScheduleCountArgs} args - Arguments to filter PaymentSchedules to count.
     * @example
     * // Count the number of PaymentSchedules
     * const count = await prisma.paymentSchedule.count({
     *   where: {
     *     // ... the filter for the PaymentSchedules we want to count
     *   }
     * })
    **/
    count<T extends PaymentScheduleCountArgs>(
      args?: Subset<T, PaymentScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentScheduleAggregateArgs>(args: Subset<T, PaymentScheduleAggregateArgs>): Prisma.PrismaPromise<GetPaymentScheduleAggregateType<T>>

    /**
     * Group by PaymentSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentScheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentScheduleGroupByArgs['orderBy'] }
        : { orderBy?: PaymentScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentSchedule model
   */
  readonly fields: PaymentScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cust<T extends PaymentSchedule$custArgs<ExtArgs> = {}>(args?: Subset<T, PaymentSchedule$custArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentSchedule model
   */ 
  interface PaymentScheduleFieldRefs {
    readonly id: FieldRef<"PaymentSchedule", 'Int'>
    readonly locationId: FieldRef<"PaymentSchedule", 'Int'>
    readonly dueDate: FieldRef<"PaymentSchedule", 'DateTime'>
    readonly CUST_ID: FieldRef<"PaymentSchedule", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PaymentSchedule findUnique
   */
  export type PaymentScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentSchedule
     */
    select?: PaymentScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentScheduleInclude<ExtArgs> | null
    /**
     * Filter, which PaymentSchedule to fetch.
     */
    where: PaymentScheduleWhereUniqueInput
  }

  /**
   * PaymentSchedule findUniqueOrThrow
   */
  export type PaymentScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentSchedule
     */
    select?: PaymentScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentScheduleInclude<ExtArgs> | null
    /**
     * Filter, which PaymentSchedule to fetch.
     */
    where: PaymentScheduleWhereUniqueInput
  }

  /**
   * PaymentSchedule findFirst
   */
  export type PaymentScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentSchedule
     */
    select?: PaymentScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentScheduleInclude<ExtArgs> | null
    /**
     * Filter, which PaymentSchedule to fetch.
     */
    where?: PaymentScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentSchedules to fetch.
     */
    orderBy?: PaymentScheduleOrderByWithRelationInput | PaymentScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentSchedules.
     */
    cursor?: PaymentScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentSchedules.
     */
    distinct?: PaymentScheduleScalarFieldEnum | PaymentScheduleScalarFieldEnum[]
  }

  /**
   * PaymentSchedule findFirstOrThrow
   */
  export type PaymentScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentSchedule
     */
    select?: PaymentScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentScheduleInclude<ExtArgs> | null
    /**
     * Filter, which PaymentSchedule to fetch.
     */
    where?: PaymentScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentSchedules to fetch.
     */
    orderBy?: PaymentScheduleOrderByWithRelationInput | PaymentScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentSchedules.
     */
    cursor?: PaymentScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentSchedules.
     */
    distinct?: PaymentScheduleScalarFieldEnum | PaymentScheduleScalarFieldEnum[]
  }

  /**
   * PaymentSchedule findMany
   */
  export type PaymentScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentSchedule
     */
    select?: PaymentScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentScheduleInclude<ExtArgs> | null
    /**
     * Filter, which PaymentSchedules to fetch.
     */
    where?: PaymentScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentSchedules to fetch.
     */
    orderBy?: PaymentScheduleOrderByWithRelationInput | PaymentScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentSchedules.
     */
    cursor?: PaymentScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentSchedules.
     */
    skip?: number
    distinct?: PaymentScheduleScalarFieldEnum | PaymentScheduleScalarFieldEnum[]
  }

  /**
   * PaymentSchedule create
   */
  export type PaymentScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentSchedule
     */
    select?: PaymentScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentSchedule.
     */
    data: XOR<PaymentScheduleCreateInput, PaymentScheduleUncheckedCreateInput>
  }

  /**
   * PaymentSchedule createMany
   */
  export type PaymentScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentSchedules.
     */
    data: PaymentScheduleCreateManyInput | PaymentScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentSchedule update
   */
  export type PaymentScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentSchedule
     */
    select?: PaymentScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentSchedule.
     */
    data: XOR<PaymentScheduleUpdateInput, PaymentScheduleUncheckedUpdateInput>
    /**
     * Choose, which PaymentSchedule to update.
     */
    where: PaymentScheduleWhereUniqueInput
  }

  /**
   * PaymentSchedule updateMany
   */
  export type PaymentScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentSchedules.
     */
    data: XOR<PaymentScheduleUpdateManyMutationInput, PaymentScheduleUncheckedUpdateManyInput>
    /**
     * Filter which PaymentSchedules to update
     */
    where?: PaymentScheduleWhereInput
  }

  /**
   * PaymentSchedule upsert
   */
  export type PaymentScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentSchedule
     */
    select?: PaymentScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentSchedule to update in case it exists.
     */
    where: PaymentScheduleWhereUniqueInput
    /**
     * In case the PaymentSchedule found by the `where` argument doesn't exist, create a new PaymentSchedule with this data.
     */
    create: XOR<PaymentScheduleCreateInput, PaymentScheduleUncheckedCreateInput>
    /**
     * In case the PaymentSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentScheduleUpdateInput, PaymentScheduleUncheckedUpdateInput>
  }

  /**
   * PaymentSchedule delete
   */
  export type PaymentScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentSchedule
     */
    select?: PaymentScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentScheduleInclude<ExtArgs> | null
    /**
     * Filter which PaymentSchedule to delete.
     */
    where: PaymentScheduleWhereUniqueInput
  }

  /**
   * PaymentSchedule deleteMany
   */
  export type PaymentScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentSchedules to delete
     */
    where?: PaymentScheduleWhereInput
  }

  /**
   * PaymentSchedule.cust
   */
  export type PaymentSchedule$custArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * PaymentSchedule without action
   */
  export type PaymentScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentSchedule
     */
    select?: PaymentScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentScheduleInclude<ExtArgs> | null
  }


  /**
   * Model RentHistory
   */

  export type AggregateRentHistory = {
    _count: RentHistoryCountAggregateOutputType | null
    _avg: RentHistoryAvgAggregateOutputType | null
    _sum: RentHistorySumAggregateOutputType | null
    _min: RentHistoryMinAggregateOutputType | null
    _max: RentHistoryMaxAggregateOutputType | null
  }

  export type RentHistoryAvgAggregateOutputType = {
    id: number | null
    locationId: number | null
    month: number | null
    year: number | null
    rentAmount: number | null
    CUST_ID: number | null
  }

  export type RentHistorySumAggregateOutputType = {
    id: number | null
    locationId: number | null
    month: number | null
    year: number | null
    rentAmount: number | null
    CUST_ID: number | null
  }

  export type RentHistoryMinAggregateOutputType = {
    id: number | null
    locationId: number | null
    month: number | null
    year: number | null
    rentAmount: number | null
    createdAt: Date | null
    CUST_ID: number | null
  }

  export type RentHistoryMaxAggregateOutputType = {
    id: number | null
    locationId: number | null
    month: number | null
    year: number | null
    rentAmount: number | null
    createdAt: Date | null
    CUST_ID: number | null
  }

  export type RentHistoryCountAggregateOutputType = {
    id: number
    locationId: number
    month: number
    year: number
    rentAmount: number
    createdAt: number
    CUST_ID: number
    _all: number
  }


  export type RentHistoryAvgAggregateInputType = {
    id?: true
    locationId?: true
    month?: true
    year?: true
    rentAmount?: true
    CUST_ID?: true
  }

  export type RentHistorySumAggregateInputType = {
    id?: true
    locationId?: true
    month?: true
    year?: true
    rentAmount?: true
    CUST_ID?: true
  }

  export type RentHistoryMinAggregateInputType = {
    id?: true
    locationId?: true
    month?: true
    year?: true
    rentAmount?: true
    createdAt?: true
    CUST_ID?: true
  }

  export type RentHistoryMaxAggregateInputType = {
    id?: true
    locationId?: true
    month?: true
    year?: true
    rentAmount?: true
    createdAt?: true
    CUST_ID?: true
  }

  export type RentHistoryCountAggregateInputType = {
    id?: true
    locationId?: true
    month?: true
    year?: true
    rentAmount?: true
    createdAt?: true
    CUST_ID?: true
    _all?: true
  }

  export type RentHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RentHistory to aggregate.
     */
    where?: RentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentHistories to fetch.
     */
    orderBy?: RentHistoryOrderByWithRelationInput | RentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RentHistories
    **/
    _count?: true | RentHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RentHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RentHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RentHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RentHistoryMaxAggregateInputType
  }

  export type GetRentHistoryAggregateType<T extends RentHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateRentHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRentHistory[P]>
      : GetScalarType<T[P], AggregateRentHistory[P]>
  }




  export type RentHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentHistoryWhereInput
    orderBy?: RentHistoryOrderByWithAggregationInput | RentHistoryOrderByWithAggregationInput[]
    by: RentHistoryScalarFieldEnum[] | RentHistoryScalarFieldEnum
    having?: RentHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RentHistoryCountAggregateInputType | true
    _avg?: RentHistoryAvgAggregateInputType
    _sum?: RentHistorySumAggregateInputType
    _min?: RentHistoryMinAggregateInputType
    _max?: RentHistoryMaxAggregateInputType
  }

  export type RentHistoryGroupByOutputType = {
    id: number
    locationId: number
    month: number
    year: number
    rentAmount: number
    createdAt: Date
    CUST_ID: number | null
    _count: RentHistoryCountAggregateOutputType | null
    _avg: RentHistoryAvgAggregateOutputType | null
    _sum: RentHistorySumAggregateOutputType | null
    _min: RentHistoryMinAggregateOutputType | null
    _max: RentHistoryMaxAggregateOutputType | null
  }

  type GetRentHistoryGroupByPayload<T extends RentHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RentHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RentHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RentHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], RentHistoryGroupByOutputType[P]>
        }
      >
    >


  export type RentHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    month?: boolean
    year?: boolean
    rentAmount?: boolean
    createdAt?: boolean
    CUST_ID?: boolean
    cust?: boolean | RentHistory$custArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentHistory"]>


  export type RentHistorySelectScalar = {
    id?: boolean
    locationId?: boolean
    month?: boolean
    year?: boolean
    rentAmount?: boolean
    createdAt?: boolean
    CUST_ID?: boolean
  }

  export type RentHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cust?: boolean | RentHistory$custArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }

  export type $RentHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RentHistory"
    objects: {
      cust: Prisma.$UserPayload<ExtArgs> | null
      location: Prisma.$LocationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      locationId: number
      month: number
      year: number
      rentAmount: number
      createdAt: Date
      CUST_ID: number | null
    }, ExtArgs["result"]["rentHistory"]>
    composites: {}
  }

  type RentHistoryGetPayload<S extends boolean | null | undefined | RentHistoryDefaultArgs> = $Result.GetResult<Prisma.$RentHistoryPayload, S>

  type RentHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RentHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RentHistoryCountAggregateInputType | true
    }

  export interface RentHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RentHistory'], meta: { name: 'RentHistory' } }
    /**
     * Find zero or one RentHistory that matches the filter.
     * @param {RentHistoryFindUniqueArgs} args - Arguments to find a RentHistory
     * @example
     * // Get one RentHistory
     * const rentHistory = await prisma.rentHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RentHistoryFindUniqueArgs>(args: SelectSubset<T, RentHistoryFindUniqueArgs<ExtArgs>>): Prisma__RentHistoryClient<$Result.GetResult<Prisma.$RentHistoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RentHistory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RentHistoryFindUniqueOrThrowArgs} args - Arguments to find a RentHistory
     * @example
     * // Get one RentHistory
     * const rentHistory = await prisma.rentHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RentHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, RentHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RentHistoryClient<$Result.GetResult<Prisma.$RentHistoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RentHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentHistoryFindFirstArgs} args - Arguments to find a RentHistory
     * @example
     * // Get one RentHistory
     * const rentHistory = await prisma.rentHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RentHistoryFindFirstArgs>(args?: SelectSubset<T, RentHistoryFindFirstArgs<ExtArgs>>): Prisma__RentHistoryClient<$Result.GetResult<Prisma.$RentHistoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RentHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentHistoryFindFirstOrThrowArgs} args - Arguments to find a RentHistory
     * @example
     * // Get one RentHistory
     * const rentHistory = await prisma.rentHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RentHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, RentHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__RentHistoryClient<$Result.GetResult<Prisma.$RentHistoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RentHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RentHistories
     * const rentHistories = await prisma.rentHistory.findMany()
     * 
     * // Get first 10 RentHistories
     * const rentHistories = await prisma.rentHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rentHistoryWithIdOnly = await prisma.rentHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RentHistoryFindManyArgs>(args?: SelectSubset<T, RentHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentHistoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RentHistory.
     * @param {RentHistoryCreateArgs} args - Arguments to create a RentHistory.
     * @example
     * // Create one RentHistory
     * const RentHistory = await prisma.rentHistory.create({
     *   data: {
     *     // ... data to create a RentHistory
     *   }
     * })
     * 
     */
    create<T extends RentHistoryCreateArgs>(args: SelectSubset<T, RentHistoryCreateArgs<ExtArgs>>): Prisma__RentHistoryClient<$Result.GetResult<Prisma.$RentHistoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RentHistories.
     * @param {RentHistoryCreateManyArgs} args - Arguments to create many RentHistories.
     * @example
     * // Create many RentHistories
     * const rentHistory = await prisma.rentHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RentHistoryCreateManyArgs>(args?: SelectSubset<T, RentHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RentHistory.
     * @param {RentHistoryDeleteArgs} args - Arguments to delete one RentHistory.
     * @example
     * // Delete one RentHistory
     * const RentHistory = await prisma.rentHistory.delete({
     *   where: {
     *     // ... filter to delete one RentHistory
     *   }
     * })
     * 
     */
    delete<T extends RentHistoryDeleteArgs>(args: SelectSubset<T, RentHistoryDeleteArgs<ExtArgs>>): Prisma__RentHistoryClient<$Result.GetResult<Prisma.$RentHistoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RentHistory.
     * @param {RentHistoryUpdateArgs} args - Arguments to update one RentHistory.
     * @example
     * // Update one RentHistory
     * const rentHistory = await prisma.rentHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RentHistoryUpdateArgs>(args: SelectSubset<T, RentHistoryUpdateArgs<ExtArgs>>): Prisma__RentHistoryClient<$Result.GetResult<Prisma.$RentHistoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RentHistories.
     * @param {RentHistoryDeleteManyArgs} args - Arguments to filter RentHistories to delete.
     * @example
     * // Delete a few RentHistories
     * const { count } = await prisma.rentHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RentHistoryDeleteManyArgs>(args?: SelectSubset<T, RentHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RentHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RentHistories
     * const rentHistory = await prisma.rentHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RentHistoryUpdateManyArgs>(args: SelectSubset<T, RentHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RentHistory.
     * @param {RentHistoryUpsertArgs} args - Arguments to update or create a RentHistory.
     * @example
     * // Update or create a RentHistory
     * const rentHistory = await prisma.rentHistory.upsert({
     *   create: {
     *     // ... data to create a RentHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RentHistory we want to update
     *   }
     * })
     */
    upsert<T extends RentHistoryUpsertArgs>(args: SelectSubset<T, RentHistoryUpsertArgs<ExtArgs>>): Prisma__RentHistoryClient<$Result.GetResult<Prisma.$RentHistoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RentHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentHistoryCountArgs} args - Arguments to filter RentHistories to count.
     * @example
     * // Count the number of RentHistories
     * const count = await prisma.rentHistory.count({
     *   where: {
     *     // ... the filter for the RentHistories we want to count
     *   }
     * })
    **/
    count<T extends RentHistoryCountArgs>(
      args?: Subset<T, RentHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RentHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RentHistoryAggregateArgs>(args: Subset<T, RentHistoryAggregateArgs>): Prisma.PrismaPromise<GetRentHistoryAggregateType<T>>

    /**
     * Group by RentHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RentHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RentHistoryGroupByArgs['orderBy'] }
        : { orderBy?: RentHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RentHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RentHistory model
   */
  readonly fields: RentHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RentHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RentHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cust<T extends RentHistory$custArgs<ExtArgs> = {}>(args?: Subset<T, RentHistory$custArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RentHistory model
   */ 
  interface RentHistoryFieldRefs {
    readonly id: FieldRef<"RentHistory", 'Int'>
    readonly locationId: FieldRef<"RentHistory", 'Int'>
    readonly month: FieldRef<"RentHistory", 'Int'>
    readonly year: FieldRef<"RentHistory", 'Int'>
    readonly rentAmount: FieldRef<"RentHistory", 'Int'>
    readonly createdAt: FieldRef<"RentHistory", 'DateTime'>
    readonly CUST_ID: FieldRef<"RentHistory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RentHistory findUnique
   */
  export type RentHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentHistory
     */
    select?: RentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RentHistory to fetch.
     */
    where: RentHistoryWhereUniqueInput
  }

  /**
   * RentHistory findUniqueOrThrow
   */
  export type RentHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentHistory
     */
    select?: RentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RentHistory to fetch.
     */
    where: RentHistoryWhereUniqueInput
  }

  /**
   * RentHistory findFirst
   */
  export type RentHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentHistory
     */
    select?: RentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RentHistory to fetch.
     */
    where?: RentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentHistories to fetch.
     */
    orderBy?: RentHistoryOrderByWithRelationInput | RentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RentHistories.
     */
    cursor?: RentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentHistories.
     */
    distinct?: RentHistoryScalarFieldEnum | RentHistoryScalarFieldEnum[]
  }

  /**
   * RentHistory findFirstOrThrow
   */
  export type RentHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentHistory
     */
    select?: RentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RentHistory to fetch.
     */
    where?: RentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentHistories to fetch.
     */
    orderBy?: RentHistoryOrderByWithRelationInput | RentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RentHistories.
     */
    cursor?: RentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentHistories.
     */
    distinct?: RentHistoryScalarFieldEnum | RentHistoryScalarFieldEnum[]
  }

  /**
   * RentHistory findMany
   */
  export type RentHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentHistory
     */
    select?: RentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RentHistories to fetch.
     */
    where?: RentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentHistories to fetch.
     */
    orderBy?: RentHistoryOrderByWithRelationInput | RentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RentHistories.
     */
    cursor?: RentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentHistories.
     */
    skip?: number
    distinct?: RentHistoryScalarFieldEnum | RentHistoryScalarFieldEnum[]
  }

  /**
   * RentHistory create
   */
  export type RentHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentHistory
     */
    select?: RentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a RentHistory.
     */
    data: XOR<RentHistoryCreateInput, RentHistoryUncheckedCreateInput>
  }

  /**
   * RentHistory createMany
   */
  export type RentHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RentHistories.
     */
    data: RentHistoryCreateManyInput | RentHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RentHistory update
   */
  export type RentHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentHistory
     */
    select?: RentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a RentHistory.
     */
    data: XOR<RentHistoryUpdateInput, RentHistoryUncheckedUpdateInput>
    /**
     * Choose, which RentHistory to update.
     */
    where: RentHistoryWhereUniqueInput
  }

  /**
   * RentHistory updateMany
   */
  export type RentHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RentHistories.
     */
    data: XOR<RentHistoryUpdateManyMutationInput, RentHistoryUncheckedUpdateManyInput>
    /**
     * Filter which RentHistories to update
     */
    where?: RentHistoryWhereInput
  }

  /**
   * RentHistory upsert
   */
  export type RentHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentHistory
     */
    select?: RentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the RentHistory to update in case it exists.
     */
    where: RentHistoryWhereUniqueInput
    /**
     * In case the RentHistory found by the `where` argument doesn't exist, create a new RentHistory with this data.
     */
    create: XOR<RentHistoryCreateInput, RentHistoryUncheckedCreateInput>
    /**
     * In case the RentHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RentHistoryUpdateInput, RentHistoryUncheckedUpdateInput>
  }

  /**
   * RentHistory delete
   */
  export type RentHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentHistory
     */
    select?: RentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentHistoryInclude<ExtArgs> | null
    /**
     * Filter which RentHistory to delete.
     */
    where: RentHistoryWhereUniqueInput
  }

  /**
   * RentHistory deleteMany
   */
  export type RentHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RentHistories to delete
     */
    where?: RentHistoryWhereInput
  }

  /**
   * RentHistory.cust
   */
  export type RentHistory$custArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * RentHistory without action
   */
  export type RentHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentHistory
     */
    select?: RentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentHistoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    renterId: 'renterId',
    CUST_ID: 'CUST_ID',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const LeaseContractScalarFieldEnum: {
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

  export type LeaseContractScalarFieldEnum = (typeof LeaseContractScalarFieldEnum)[keyof typeof LeaseContractScalarFieldEnum]


  export const KeyScalarFieldEnum: {
    id: 'id',
    locationId: 'locationId',
    issueDate: 'issueDate',
    returnDate: 'returnDate',
    CUST_ID: 'CUST_ID'
  };

  export type KeyScalarFieldEnum = (typeof KeyScalarFieldEnum)[keyof typeof KeyScalarFieldEnum]


  export const PriceAdjustmentScalarFieldEnum: {
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

  export type PriceAdjustmentScalarFieldEnum = (typeof PriceAdjustmentScalarFieldEnum)[keyof typeof PriceAdjustmentScalarFieldEnum]


  export const AdjustmentLocationScalarFieldEnum: {
    id: 'id',
    priceAdjustmentId: 'priceAdjustmentId',
    locationId: 'locationId'
  };

  export type AdjustmentLocationScalarFieldEnum = (typeof AdjustmentLocationScalarFieldEnum)[keyof typeof AdjustmentLocationScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
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

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const PaymentRecordScalarFieldEnum: {
    id: 'id',
    locationId: 'locationId',
    month: 'month',
    year: 'year',
    CUST_ID: 'CUST_ID',
    remainingAmount: 'remainingAmount',
    totalPaid: 'totalPaid',
    totalRent: 'totalRent'
  };

  export type PaymentRecordScalarFieldEnum = (typeof PaymentRecordScalarFieldEnum)[keyof typeof PaymentRecordScalarFieldEnum]


  export const PaymentMethodScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type PaymentMethodScalarFieldEnum = (typeof PaymentMethodScalarFieldEnum)[keyof typeof PaymentMethodScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    locationId: 'locationId',
    date: 'date',
    CUST_ID: 'CUST_ID'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const PaymentScheduleScalarFieldEnum: {
    id: 'id',
    locationId: 'locationId',
    dueDate: 'dueDate',
    CUST_ID: 'CUST_ID'
  };

  export type PaymentScheduleScalarFieldEnum = (typeof PaymentScheduleScalarFieldEnum)[keyof typeof PaymentScheduleScalarFieldEnum]


  export const RentHistoryScalarFieldEnum: {
    id: 'id',
    locationId: 'locationId',
    month: 'month',
    year: 'year',
    rentAmount: 'rentAmount',
    createdAt: 'createdAt',
    CUST_ID: 'CUST_ID'
  };

  export type RentHistoryScalarFieldEnum = (typeof RentHistoryScalarFieldEnum)[keyof typeof RentHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    isRenter?: BoolFilter<"User"> | boolean
    accessToken?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    picture?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    password?: StringNullableFilter<"User"> | string | null
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    CUST_ID?: IntNullableFilter<"User"> | number | null
    dni?: IntFilter<"User"> | number
    invoices?: InvoiceListRelationFilter
    keys?: KeyListRelationFilter
    leaseContractsAsCust?: LeaseContractListRelationFilter
    leaseContractsAsRenter?: LeaseContractListRelationFilter
    Location?: LocationListRelationFilter
    rentedLocations?: LocationListRelationFilter
    payments?: PaymentListRelationFilter
    PaymentRecord?: PaymentRecordListRelationFilter
    paymentSchedules?: PaymentScheduleListRelationFilter
    priceAdjustments?: PriceAdjustmentListRelationFilter
    RentHistory?: RentHistoryListRelationFilter
    cust?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    createdUsers?: UserListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    isRenter?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    password?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    CUST_ID?: SortOrderInput | SortOrder
    dni?: SortOrder
    invoices?: InvoiceOrderByRelationAggregateInput
    keys?: KeyOrderByRelationAggregateInput
    leaseContractsAsCust?: LeaseContractOrderByRelationAggregateInput
    leaseContractsAsRenter?: LeaseContractOrderByRelationAggregateInput
    Location?: LocationOrderByRelationAggregateInput
    rentedLocations?: LocationOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    PaymentRecord?: PaymentRecordOrderByRelationAggregateInput
    paymentSchedules?: PaymentScheduleOrderByRelationAggregateInput
    priceAdjustments?: PriceAdjustmentOrderByRelationAggregateInput
    RentHistory?: RentHistoryOrderByRelationAggregateInput
    cust?: UserOrderByWithRelationInput
    createdUsers?: UserOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    dni?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    isRenter?: BoolFilter<"User"> | boolean
    accessToken?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    picture?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    password?: StringNullableFilter<"User"> | string | null
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    CUST_ID?: IntNullableFilter<"User"> | number | null
    invoices?: InvoiceListRelationFilter
    keys?: KeyListRelationFilter
    leaseContractsAsCust?: LeaseContractListRelationFilter
    leaseContractsAsRenter?: LeaseContractListRelationFilter
    Location?: LocationListRelationFilter
    rentedLocations?: LocationListRelationFilter
    payments?: PaymentListRelationFilter
    PaymentRecord?: PaymentRecordListRelationFilter
    paymentSchedules?: PaymentScheduleListRelationFilter
    priceAdjustments?: PriceAdjustmentListRelationFilter
    RentHistory?: RentHistoryListRelationFilter
    cust?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    createdUsers?: UserListRelationFilter
  }, "id" | "email" | "dni">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    isRenter?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    password?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    CUST_ID?: SortOrderInput | SortOrder
    dni?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    isRenter?: BoolWithAggregatesFilter<"User"> | boolean
    accessToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    picture?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    CUST_ID?: IntNullableWithAggregatesFilter<"User"> | number | null
    dni?: IntWithAggregatesFilter<"User"> | number
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: IntFilter<"Location"> | number
    name?: StringFilter<"Location"> | string
    address?: StringFilter<"Location"> | string
    renterId?: IntFilter<"Location"> | number
    CUST_ID?: IntNullableFilter<"Location"> | number | null
    createdAt?: DateTimeNullableFilter<"Location"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Location"> | Date | string | null
    AdjustmentLocation?: AdjustmentLocationListRelationFilter
    invoices?: InvoiceListRelationFilter
    keys?: KeyListRelationFilter
    contracts?: LeaseContractListRelationFilter
    cust?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    renter?: XOR<UserRelationFilter, UserWhereInput>
    payments?: PaymentListRelationFilter
    PaymentRecord?: PaymentRecordListRelationFilter
    paymentSchedules?: PaymentScheduleListRelationFilter
    rentHistory?: RentHistoryListRelationFilter
    adjustments?: PriceAdjustmentListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    renterId?: SortOrder
    CUST_ID?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    AdjustmentLocation?: AdjustmentLocationOrderByRelationAggregateInput
    invoices?: InvoiceOrderByRelationAggregateInput
    keys?: KeyOrderByRelationAggregateInput
    contracts?: LeaseContractOrderByRelationAggregateInput
    cust?: UserOrderByWithRelationInput
    renter?: UserOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
    PaymentRecord?: PaymentRecordOrderByRelationAggregateInput
    paymentSchedules?: PaymentScheduleOrderByRelationAggregateInput
    rentHistory?: RentHistoryOrderByRelationAggregateInput
    adjustments?: PriceAdjustmentOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    name?: StringFilter<"Location"> | string
    address?: StringFilter<"Location"> | string
    renterId?: IntFilter<"Location"> | number
    CUST_ID?: IntNullableFilter<"Location"> | number | null
    createdAt?: DateTimeNullableFilter<"Location"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Location"> | Date | string | null
    AdjustmentLocation?: AdjustmentLocationListRelationFilter
    invoices?: InvoiceListRelationFilter
    keys?: KeyListRelationFilter
    contracts?: LeaseContractListRelationFilter
    cust?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    renter?: XOR<UserRelationFilter, UserWhereInput>
    payments?: PaymentListRelationFilter
    PaymentRecord?: PaymentRecordListRelationFilter
    paymentSchedules?: PaymentScheduleListRelationFilter
    rentHistory?: RentHistoryListRelationFilter
    adjustments?: PriceAdjustmentListRelationFilter
  }, "id">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    renterId?: SortOrder
    CUST_ID?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: LocationCountOrderByAggregateInput
    _avg?: LocationAvgOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
    _sum?: LocationSumOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Location"> | number
    name?: StringWithAggregatesFilter<"Location"> | string
    address?: StringWithAggregatesFilter<"Location"> | string
    renterId?: IntWithAggregatesFilter<"Location"> | number
    CUST_ID?: IntNullableWithAggregatesFilter<"Location"> | number | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Location"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Location"> | Date | string | null
  }

  export type LeaseContractWhereInput = {
    AND?: LeaseContractWhereInput | LeaseContractWhereInput[]
    OR?: LeaseContractWhereInput[]
    NOT?: LeaseContractWhereInput | LeaseContractWhereInput[]
    id?: IntFilter<"LeaseContract"> | number
    locationId?: IntFilter<"LeaseContract"> | number
    startDate?: DateTimeFilter<"LeaseContract"> | Date | string
    endDate?: DateTimeFilter<"LeaseContract"> | Date | string
    finishedDate?: DateTimeNullableFilter<"LeaseContract"> | Date | string | null
    rentAmount?: IntFilter<"LeaseContract"> | number
    active?: BoolFilter<"LeaseContract"> | boolean
    cancelled?: BoolFilter<"LeaseContract"> | boolean
    createdAt?: DateTimeFilter<"LeaseContract"> | Date | string
    pdfPath?: StringNullableFilter<"LeaseContract"> | string | null
    CUST_ID?: IntNullableFilter<"LeaseContract"> | number | null
    renterId?: IntFilter<"LeaseContract"> | number
    cust?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    location?: XOR<LocationRelationFilter, LocationWhereInput>
    renter?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type LeaseContractOrderByWithRelationInput = {
    id?: SortOrder
    locationId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    finishedDate?: SortOrderInput | SortOrder
    rentAmount?: SortOrder
    active?: SortOrder
    cancelled?: SortOrder
    createdAt?: SortOrder
    pdfPath?: SortOrderInput | SortOrder
    CUST_ID?: SortOrderInput | SortOrder
    renterId?: SortOrder
    cust?: UserOrderByWithRelationInput
    location?: LocationOrderByWithRelationInput
    renter?: UserOrderByWithRelationInput
  }

  export type LeaseContractWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LeaseContractWhereInput | LeaseContractWhereInput[]
    OR?: LeaseContractWhereInput[]
    NOT?: LeaseContractWhereInput | LeaseContractWhereInput[]
    locationId?: IntFilter<"LeaseContract"> | number
    startDate?: DateTimeFilter<"LeaseContract"> | Date | string
    endDate?: DateTimeFilter<"LeaseContract"> | Date | string
    finishedDate?: DateTimeNullableFilter<"LeaseContract"> | Date | string | null
    rentAmount?: IntFilter<"LeaseContract"> | number
    active?: BoolFilter<"LeaseContract"> | boolean
    cancelled?: BoolFilter<"LeaseContract"> | boolean
    createdAt?: DateTimeFilter<"LeaseContract"> | Date | string
    pdfPath?: StringNullableFilter<"LeaseContract"> | string | null
    CUST_ID?: IntNullableFilter<"LeaseContract"> | number | null
    renterId?: IntFilter<"LeaseContract"> | number
    cust?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    location?: XOR<LocationRelationFilter, LocationWhereInput>
    renter?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type LeaseContractOrderByWithAggregationInput = {
    id?: SortOrder
    locationId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    finishedDate?: SortOrderInput | SortOrder
    rentAmount?: SortOrder
    active?: SortOrder
    cancelled?: SortOrder
    createdAt?: SortOrder
    pdfPath?: SortOrderInput | SortOrder
    CUST_ID?: SortOrderInput | SortOrder
    renterId?: SortOrder
    _count?: LeaseContractCountOrderByAggregateInput
    _avg?: LeaseContractAvgOrderByAggregateInput
    _max?: LeaseContractMaxOrderByAggregateInput
    _min?: LeaseContractMinOrderByAggregateInput
    _sum?: LeaseContractSumOrderByAggregateInput
  }

  export type LeaseContractScalarWhereWithAggregatesInput = {
    AND?: LeaseContractScalarWhereWithAggregatesInput | LeaseContractScalarWhereWithAggregatesInput[]
    OR?: LeaseContractScalarWhereWithAggregatesInput[]
    NOT?: LeaseContractScalarWhereWithAggregatesInput | LeaseContractScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LeaseContract"> | number
    locationId?: IntWithAggregatesFilter<"LeaseContract"> | number
    startDate?: DateTimeWithAggregatesFilter<"LeaseContract"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"LeaseContract"> | Date | string
    finishedDate?: DateTimeNullableWithAggregatesFilter<"LeaseContract"> | Date | string | null
    rentAmount?: IntWithAggregatesFilter<"LeaseContract"> | number
    active?: BoolWithAggregatesFilter<"LeaseContract"> | boolean
    cancelled?: BoolWithAggregatesFilter<"LeaseContract"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"LeaseContract"> | Date | string
    pdfPath?: StringNullableWithAggregatesFilter<"LeaseContract"> | string | null
    CUST_ID?: IntNullableWithAggregatesFilter<"LeaseContract"> | number | null
    renterId?: IntWithAggregatesFilter<"LeaseContract"> | number
  }

  export type KeyWhereInput = {
    AND?: KeyWhereInput | KeyWhereInput[]
    OR?: KeyWhereInput[]
    NOT?: KeyWhereInput | KeyWhereInput[]
    id?: IntFilter<"Key"> | number
    locationId?: IntFilter<"Key"> | number
    issueDate?: DateTimeFilter<"Key"> | Date | string
    returnDate?: DateTimeNullableFilter<"Key"> | Date | string | null
    CUST_ID?: IntNullableFilter<"Key"> | number | null
    cust?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    location?: XOR<LocationRelationFilter, LocationWhereInput>
  }

  export type KeyOrderByWithRelationInput = {
    id?: SortOrder
    locationId?: SortOrder
    issueDate?: SortOrder
    returnDate?: SortOrderInput | SortOrder
    CUST_ID?: SortOrderInput | SortOrder
    cust?: UserOrderByWithRelationInput
    location?: LocationOrderByWithRelationInput
  }

  export type KeyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: KeyWhereInput | KeyWhereInput[]
    OR?: KeyWhereInput[]
    NOT?: KeyWhereInput | KeyWhereInput[]
    locationId?: IntFilter<"Key"> | number
    issueDate?: DateTimeFilter<"Key"> | Date | string
    returnDate?: DateTimeNullableFilter<"Key"> | Date | string | null
    CUST_ID?: IntNullableFilter<"Key"> | number | null
    cust?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    location?: XOR<LocationRelationFilter, LocationWhereInput>
  }, "id">

  export type KeyOrderByWithAggregationInput = {
    id?: SortOrder
    locationId?: SortOrder
    issueDate?: SortOrder
    returnDate?: SortOrderInput | SortOrder
    CUST_ID?: SortOrderInput | SortOrder
    _count?: KeyCountOrderByAggregateInput
    _avg?: KeyAvgOrderByAggregateInput
    _max?: KeyMaxOrderByAggregateInput
    _min?: KeyMinOrderByAggregateInput
    _sum?: KeySumOrderByAggregateInput
  }

  export type KeyScalarWhereWithAggregatesInput = {
    AND?: KeyScalarWhereWithAggregatesInput | KeyScalarWhereWithAggregatesInput[]
    OR?: KeyScalarWhereWithAggregatesInput[]
    NOT?: KeyScalarWhereWithAggregatesInput | KeyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Key"> | number
    locationId?: IntWithAggregatesFilter<"Key"> | number
    issueDate?: DateTimeWithAggregatesFilter<"Key"> | Date | string
    returnDate?: DateTimeNullableWithAggregatesFilter<"Key"> | Date | string | null
    CUST_ID?: IntNullableWithAggregatesFilter<"Key"> | number | null
  }

  export type PriceAdjustmentWhereInput = {
    AND?: PriceAdjustmentWhereInput | PriceAdjustmentWhereInput[]
    OR?: PriceAdjustmentWhereInput[]
    NOT?: PriceAdjustmentWhereInput | PriceAdjustmentWhereInput[]
    id?: IntFilter<"PriceAdjustment"> | number
    CUST_ID?: IntNullableFilter<"PriceAdjustment"> | number | null
    amount?: IntFilter<"PriceAdjustment"> | number
    period?: IntFilter<"PriceAdjustment"> | number
    status?: IntFilter<"PriceAdjustment"> | number
    applyToAll?: BoolFilter<"PriceAdjustment"> | boolean
    type?: IntFilter<"PriceAdjustment"> | number
    createdAt?: DateTimeFilter<"PriceAdjustment"> | Date | string
    lastExecutedAt?: DateTimeNullableFilter<"PriceAdjustment"> | Date | string | null
    updatedAt?: DateTimeFilter<"PriceAdjustment"> | Date | string
    AdjustmentLocation?: AdjustmentLocationListRelationFilter
    cust?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    locations?: LocationListRelationFilter
  }

  export type PriceAdjustmentOrderByWithRelationInput = {
    id?: SortOrder
    CUST_ID?: SortOrderInput | SortOrder
    amount?: SortOrder
    period?: SortOrder
    status?: SortOrder
    applyToAll?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    lastExecutedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    AdjustmentLocation?: AdjustmentLocationOrderByRelationAggregateInput
    cust?: UserOrderByWithRelationInput
    locations?: LocationOrderByRelationAggregateInput
  }

  export type PriceAdjustmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PriceAdjustmentWhereInput | PriceAdjustmentWhereInput[]
    OR?: PriceAdjustmentWhereInput[]
    NOT?: PriceAdjustmentWhereInput | PriceAdjustmentWhereInput[]
    CUST_ID?: IntNullableFilter<"PriceAdjustment"> | number | null
    amount?: IntFilter<"PriceAdjustment"> | number
    period?: IntFilter<"PriceAdjustment"> | number
    status?: IntFilter<"PriceAdjustment"> | number
    applyToAll?: BoolFilter<"PriceAdjustment"> | boolean
    type?: IntFilter<"PriceAdjustment"> | number
    createdAt?: DateTimeFilter<"PriceAdjustment"> | Date | string
    lastExecutedAt?: DateTimeNullableFilter<"PriceAdjustment"> | Date | string | null
    updatedAt?: DateTimeFilter<"PriceAdjustment"> | Date | string
    AdjustmentLocation?: AdjustmentLocationListRelationFilter
    cust?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    locations?: LocationListRelationFilter
  }, "id">

  export type PriceAdjustmentOrderByWithAggregationInput = {
    id?: SortOrder
    CUST_ID?: SortOrderInput | SortOrder
    amount?: SortOrder
    period?: SortOrder
    status?: SortOrder
    applyToAll?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    lastExecutedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: PriceAdjustmentCountOrderByAggregateInput
    _avg?: PriceAdjustmentAvgOrderByAggregateInput
    _max?: PriceAdjustmentMaxOrderByAggregateInput
    _min?: PriceAdjustmentMinOrderByAggregateInput
    _sum?: PriceAdjustmentSumOrderByAggregateInput
  }

  export type PriceAdjustmentScalarWhereWithAggregatesInput = {
    AND?: PriceAdjustmentScalarWhereWithAggregatesInput | PriceAdjustmentScalarWhereWithAggregatesInput[]
    OR?: PriceAdjustmentScalarWhereWithAggregatesInput[]
    NOT?: PriceAdjustmentScalarWhereWithAggregatesInput | PriceAdjustmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PriceAdjustment"> | number
    CUST_ID?: IntNullableWithAggregatesFilter<"PriceAdjustment"> | number | null
    amount?: IntWithAggregatesFilter<"PriceAdjustment"> | number
    period?: IntWithAggregatesFilter<"PriceAdjustment"> | number
    status?: IntWithAggregatesFilter<"PriceAdjustment"> | number
    applyToAll?: BoolWithAggregatesFilter<"PriceAdjustment"> | boolean
    type?: IntWithAggregatesFilter<"PriceAdjustment"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PriceAdjustment"> | Date | string
    lastExecutedAt?: DateTimeNullableWithAggregatesFilter<"PriceAdjustment"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"PriceAdjustment"> | Date | string
  }

  export type AdjustmentLocationWhereInput = {
    AND?: AdjustmentLocationWhereInput | AdjustmentLocationWhereInput[]
    OR?: AdjustmentLocationWhereInput[]
    NOT?: AdjustmentLocationWhereInput | AdjustmentLocationWhereInput[]
    id?: IntFilter<"AdjustmentLocation"> | number
    priceAdjustmentId?: IntFilter<"AdjustmentLocation"> | number
    locationId?: IntFilter<"AdjustmentLocation"> | number
    location?: XOR<LocationRelationFilter, LocationWhereInput>
    priceAdjustment?: XOR<PriceAdjustmentRelationFilter, PriceAdjustmentWhereInput>
  }

  export type AdjustmentLocationOrderByWithRelationInput = {
    id?: SortOrder
    priceAdjustmentId?: SortOrder
    locationId?: SortOrder
    location?: LocationOrderByWithRelationInput
    priceAdjustment?: PriceAdjustmentOrderByWithRelationInput
  }

  export type AdjustmentLocationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AdjustmentLocationWhereInput | AdjustmentLocationWhereInput[]
    OR?: AdjustmentLocationWhereInput[]
    NOT?: AdjustmentLocationWhereInput | AdjustmentLocationWhereInput[]
    priceAdjustmentId?: IntFilter<"AdjustmentLocation"> | number
    locationId?: IntFilter<"AdjustmentLocation"> | number
    location?: XOR<LocationRelationFilter, LocationWhereInput>
    priceAdjustment?: XOR<PriceAdjustmentRelationFilter, PriceAdjustmentWhereInput>
  }, "id">

  export type AdjustmentLocationOrderByWithAggregationInput = {
    id?: SortOrder
    priceAdjustmentId?: SortOrder
    locationId?: SortOrder
    _count?: AdjustmentLocationCountOrderByAggregateInput
    _avg?: AdjustmentLocationAvgOrderByAggregateInput
    _max?: AdjustmentLocationMaxOrderByAggregateInput
    _min?: AdjustmentLocationMinOrderByAggregateInput
    _sum?: AdjustmentLocationSumOrderByAggregateInput
  }

  export type AdjustmentLocationScalarWhereWithAggregatesInput = {
    AND?: AdjustmentLocationScalarWhereWithAggregatesInput | AdjustmentLocationScalarWhereWithAggregatesInput[]
    OR?: AdjustmentLocationScalarWhereWithAggregatesInput[]
    NOT?: AdjustmentLocationScalarWhereWithAggregatesInput | AdjustmentLocationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AdjustmentLocation"> | number
    priceAdjustmentId?: IntWithAggregatesFilter<"AdjustmentLocation"> | number
    locationId?: IntWithAggregatesFilter<"AdjustmentLocation"> | number
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    locationId?: IntFilter<"Payment"> | number
    date?: DateTimeFilter<"Payment"> | Date | string
    amount?: IntFilter<"Payment"> | number
    paymentMethodId?: IntFilter<"Payment"> | number
    CUST_ID?: IntNullableFilter<"Payment"> | number | null
    paymentRecordId?: IntFilter<"Payment"> | number
    month?: IntFilter<"Payment"> | number
    year?: IntFilter<"Payment"> | number
    cust?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    location?: XOR<LocationRelationFilter, LocationWhereInput>
    paymentMethod?: XOR<PaymentMethodRelationFilter, PaymentMethodWhereInput>
    paymentRecord?: XOR<PaymentRecordRelationFilter, PaymentRecordWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    locationId?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    paymentMethodId?: SortOrder
    CUST_ID?: SortOrderInput | SortOrder
    paymentRecordId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    cust?: UserOrderByWithRelationInput
    location?: LocationOrderByWithRelationInput
    paymentMethod?: PaymentMethodOrderByWithRelationInput
    paymentRecord?: PaymentRecordOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    locationId?: IntFilter<"Payment"> | number
    date?: DateTimeFilter<"Payment"> | Date | string
    amount?: IntFilter<"Payment"> | number
    paymentMethodId?: IntFilter<"Payment"> | number
    CUST_ID?: IntNullableFilter<"Payment"> | number | null
    paymentRecordId?: IntFilter<"Payment"> | number
    month?: IntFilter<"Payment"> | number
    year?: IntFilter<"Payment"> | number
    cust?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    location?: XOR<LocationRelationFilter, LocationWhereInput>
    paymentMethod?: XOR<PaymentMethodRelationFilter, PaymentMethodWhereInput>
    paymentRecord?: XOR<PaymentRecordRelationFilter, PaymentRecordWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    locationId?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    paymentMethodId?: SortOrder
    CUST_ID?: SortOrderInput | SortOrder
    paymentRecordId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    locationId?: IntWithAggregatesFilter<"Payment"> | number
    date?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    amount?: IntWithAggregatesFilter<"Payment"> | number
    paymentMethodId?: IntWithAggregatesFilter<"Payment"> | number
    CUST_ID?: IntNullableWithAggregatesFilter<"Payment"> | number | null
    paymentRecordId?: IntWithAggregatesFilter<"Payment"> | number
    month?: IntWithAggregatesFilter<"Payment"> | number
    year?: IntWithAggregatesFilter<"Payment"> | number
  }

  export type PaymentRecordWhereInput = {
    AND?: PaymentRecordWhereInput | PaymentRecordWhereInput[]
    OR?: PaymentRecordWhereInput[]
    NOT?: PaymentRecordWhereInput | PaymentRecordWhereInput[]
    id?: IntFilter<"PaymentRecord"> | number
    locationId?: IntFilter<"PaymentRecord"> | number
    month?: IntFilter<"PaymentRecord"> | number
    year?: IntFilter<"PaymentRecord"> | number
    CUST_ID?: IntNullableFilter<"PaymentRecord"> | number | null
    remainingAmount?: IntFilter<"PaymentRecord"> | number
    totalPaid?: IntFilter<"PaymentRecord"> | number
    totalRent?: IntFilter<"PaymentRecord"> | number
    payments?: PaymentListRelationFilter
    cust?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    location?: XOR<LocationRelationFilter, LocationWhereInput>
  }

  export type PaymentRecordOrderByWithRelationInput = {
    id?: SortOrder
    locationId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    CUST_ID?: SortOrderInput | SortOrder
    remainingAmount?: SortOrder
    totalPaid?: SortOrder
    totalRent?: SortOrder
    payments?: PaymentOrderByRelationAggregateInput
    cust?: UserOrderByWithRelationInput
    location?: LocationOrderByWithRelationInput
  }

  export type PaymentRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentRecordWhereInput | PaymentRecordWhereInput[]
    OR?: PaymentRecordWhereInput[]
    NOT?: PaymentRecordWhereInput | PaymentRecordWhereInput[]
    locationId?: IntFilter<"PaymentRecord"> | number
    month?: IntFilter<"PaymentRecord"> | number
    year?: IntFilter<"PaymentRecord"> | number
    CUST_ID?: IntNullableFilter<"PaymentRecord"> | number | null
    remainingAmount?: IntFilter<"PaymentRecord"> | number
    totalPaid?: IntFilter<"PaymentRecord"> | number
    totalRent?: IntFilter<"PaymentRecord"> | number
    payments?: PaymentListRelationFilter
    cust?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    location?: XOR<LocationRelationFilter, LocationWhereInput>
  }, "id">

  export type PaymentRecordOrderByWithAggregationInput = {
    id?: SortOrder
    locationId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    CUST_ID?: SortOrderInput | SortOrder
    remainingAmount?: SortOrder
    totalPaid?: SortOrder
    totalRent?: SortOrder
    _count?: PaymentRecordCountOrderByAggregateInput
    _avg?: PaymentRecordAvgOrderByAggregateInput
    _max?: PaymentRecordMaxOrderByAggregateInput
    _min?: PaymentRecordMinOrderByAggregateInput
    _sum?: PaymentRecordSumOrderByAggregateInput
  }

  export type PaymentRecordScalarWhereWithAggregatesInput = {
    AND?: PaymentRecordScalarWhereWithAggregatesInput | PaymentRecordScalarWhereWithAggregatesInput[]
    OR?: PaymentRecordScalarWhereWithAggregatesInput[]
    NOT?: PaymentRecordScalarWhereWithAggregatesInput | PaymentRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PaymentRecord"> | number
    locationId?: IntWithAggregatesFilter<"PaymentRecord"> | number
    month?: IntWithAggregatesFilter<"PaymentRecord"> | number
    year?: IntWithAggregatesFilter<"PaymentRecord"> | number
    CUST_ID?: IntNullableWithAggregatesFilter<"PaymentRecord"> | number | null
    remainingAmount?: IntWithAggregatesFilter<"PaymentRecord"> | number
    totalPaid?: IntWithAggregatesFilter<"PaymentRecord"> | number
    totalRent?: IntWithAggregatesFilter<"PaymentRecord"> | number
  }

  export type PaymentMethodWhereInput = {
    AND?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    OR?: PaymentMethodWhereInput[]
    NOT?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    id?: IntFilter<"PaymentMethod"> | number
    name?: StringFilter<"PaymentMethod"> | string
    payments?: PaymentListRelationFilter
  }

  export type PaymentMethodOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type PaymentMethodWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    OR?: PaymentMethodWhereInput[]
    NOT?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    payments?: PaymentListRelationFilter
  }, "id" | "name">

  export type PaymentMethodOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: PaymentMethodCountOrderByAggregateInput
    _avg?: PaymentMethodAvgOrderByAggregateInput
    _max?: PaymentMethodMaxOrderByAggregateInput
    _min?: PaymentMethodMinOrderByAggregateInput
    _sum?: PaymentMethodSumOrderByAggregateInput
  }

  export type PaymentMethodScalarWhereWithAggregatesInput = {
    AND?: PaymentMethodScalarWhereWithAggregatesInput | PaymentMethodScalarWhereWithAggregatesInput[]
    OR?: PaymentMethodScalarWhereWithAggregatesInput[]
    NOT?: PaymentMethodScalarWhereWithAggregatesInput | PaymentMethodScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PaymentMethod"> | number
    name?: StringWithAggregatesFilter<"PaymentMethod"> | string
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: IntFilter<"Invoice"> | number
    locationId?: IntFilter<"Invoice"> | number
    date?: DateTimeFilter<"Invoice"> | Date | string
    CUST_ID?: IntNullableFilter<"Invoice"> | number | null
    cust?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    location?: XOR<LocationRelationFilter, LocationWhereInput>
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    locationId?: SortOrder
    date?: SortOrder
    CUST_ID?: SortOrderInput | SortOrder
    cust?: UserOrderByWithRelationInput
    location?: LocationOrderByWithRelationInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    locationId?: IntFilter<"Invoice"> | number
    date?: DateTimeFilter<"Invoice"> | Date | string
    CUST_ID?: IntNullableFilter<"Invoice"> | number | null
    cust?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    location?: XOR<LocationRelationFilter, LocationWhereInput>
  }, "id">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    locationId?: SortOrder
    date?: SortOrder
    CUST_ID?: SortOrderInput | SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Invoice"> | number
    locationId?: IntWithAggregatesFilter<"Invoice"> | number
    date?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    CUST_ID?: IntNullableWithAggregatesFilter<"Invoice"> | number | null
  }

  export type PaymentScheduleWhereInput = {
    AND?: PaymentScheduleWhereInput | PaymentScheduleWhereInput[]
    OR?: PaymentScheduleWhereInput[]
    NOT?: PaymentScheduleWhereInput | PaymentScheduleWhereInput[]
    id?: IntFilter<"PaymentSchedule"> | number
    locationId?: IntFilter<"PaymentSchedule"> | number
    dueDate?: DateTimeFilter<"PaymentSchedule"> | Date | string
    CUST_ID?: IntNullableFilter<"PaymentSchedule"> | number | null
    cust?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    location?: XOR<LocationRelationFilter, LocationWhereInput>
  }

  export type PaymentScheduleOrderByWithRelationInput = {
    id?: SortOrder
    locationId?: SortOrder
    dueDate?: SortOrder
    CUST_ID?: SortOrderInput | SortOrder
    cust?: UserOrderByWithRelationInput
    location?: LocationOrderByWithRelationInput
  }

  export type PaymentScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentScheduleWhereInput | PaymentScheduleWhereInput[]
    OR?: PaymentScheduleWhereInput[]
    NOT?: PaymentScheduleWhereInput | PaymentScheduleWhereInput[]
    locationId?: IntFilter<"PaymentSchedule"> | number
    dueDate?: DateTimeFilter<"PaymentSchedule"> | Date | string
    CUST_ID?: IntNullableFilter<"PaymentSchedule"> | number | null
    cust?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    location?: XOR<LocationRelationFilter, LocationWhereInput>
  }, "id">

  export type PaymentScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    locationId?: SortOrder
    dueDate?: SortOrder
    CUST_ID?: SortOrderInput | SortOrder
    _count?: PaymentScheduleCountOrderByAggregateInput
    _avg?: PaymentScheduleAvgOrderByAggregateInput
    _max?: PaymentScheduleMaxOrderByAggregateInput
    _min?: PaymentScheduleMinOrderByAggregateInput
    _sum?: PaymentScheduleSumOrderByAggregateInput
  }

  export type PaymentScheduleScalarWhereWithAggregatesInput = {
    AND?: PaymentScheduleScalarWhereWithAggregatesInput | PaymentScheduleScalarWhereWithAggregatesInput[]
    OR?: PaymentScheduleScalarWhereWithAggregatesInput[]
    NOT?: PaymentScheduleScalarWhereWithAggregatesInput | PaymentScheduleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PaymentSchedule"> | number
    locationId?: IntWithAggregatesFilter<"PaymentSchedule"> | number
    dueDate?: DateTimeWithAggregatesFilter<"PaymentSchedule"> | Date | string
    CUST_ID?: IntNullableWithAggregatesFilter<"PaymentSchedule"> | number | null
  }

  export type RentHistoryWhereInput = {
    AND?: RentHistoryWhereInput | RentHistoryWhereInput[]
    OR?: RentHistoryWhereInput[]
    NOT?: RentHistoryWhereInput | RentHistoryWhereInput[]
    id?: IntFilter<"RentHistory"> | number
    locationId?: IntFilter<"RentHistory"> | number
    month?: IntFilter<"RentHistory"> | number
    year?: IntFilter<"RentHistory"> | number
    rentAmount?: IntFilter<"RentHistory"> | number
    createdAt?: DateTimeFilter<"RentHistory"> | Date | string
    CUST_ID?: IntNullableFilter<"RentHistory"> | number | null
    cust?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    location?: XOR<LocationRelationFilter, LocationWhereInput>
  }

  export type RentHistoryOrderByWithRelationInput = {
    id?: SortOrder
    locationId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    rentAmount?: SortOrder
    createdAt?: SortOrder
    CUST_ID?: SortOrderInput | SortOrder
    cust?: UserOrderByWithRelationInput
    location?: LocationOrderByWithRelationInput
  }

  export type RentHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    locationId_month_year?: RentHistoryLocationIdMonthYearCompoundUniqueInput
    AND?: RentHistoryWhereInput | RentHistoryWhereInput[]
    OR?: RentHistoryWhereInput[]
    NOT?: RentHistoryWhereInput | RentHistoryWhereInput[]
    locationId?: IntFilter<"RentHistory"> | number
    month?: IntFilter<"RentHistory"> | number
    year?: IntFilter<"RentHistory"> | number
    rentAmount?: IntFilter<"RentHistory"> | number
    createdAt?: DateTimeFilter<"RentHistory"> | Date | string
    CUST_ID?: IntNullableFilter<"RentHistory"> | number | null
    cust?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    location?: XOR<LocationRelationFilter, LocationWhereInput>
  }, "id" | "locationId_month_year">

  export type RentHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    locationId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    rentAmount?: SortOrder
    createdAt?: SortOrder
    CUST_ID?: SortOrderInput | SortOrder
    _count?: RentHistoryCountOrderByAggregateInput
    _avg?: RentHistoryAvgOrderByAggregateInput
    _max?: RentHistoryMaxOrderByAggregateInput
    _min?: RentHistoryMinOrderByAggregateInput
    _sum?: RentHistorySumOrderByAggregateInput
  }

  export type RentHistoryScalarWhereWithAggregatesInput = {
    AND?: RentHistoryScalarWhereWithAggregatesInput | RentHistoryScalarWhereWithAggregatesInput[]
    OR?: RentHistoryScalarWhereWithAggregatesInput[]
    NOT?: RentHistoryScalarWhereWithAggregatesInput | RentHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RentHistory"> | number
    locationId?: IntWithAggregatesFilter<"RentHistory"> | number
    month?: IntWithAggregatesFilter<"RentHistory"> | number
    year?: IntWithAggregatesFilter<"RentHistory"> | number
    rentAmount?: IntWithAggregatesFilter<"RentHistory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RentHistory"> | Date | string
    CUST_ID?: IntNullableWithAggregatesFilter<"RentHistory"> | number | null
  }

  export type UserCreateInput = {
    email: string
    isRenter?: boolean
    accessToken?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    createdAt?: Date | string
    password?: string | null
    updatedAt?: Date | string | null
    dni: number
    invoices?: InvoiceCreateNestedManyWithoutCustInput
    keys?: KeyCreateNestedManyWithoutCustInput
    leaseContractsAsCust?: LeaseContractCreateNestedManyWithoutCustInput
    leaseContractsAsRenter?: LeaseContractCreateNestedManyWithoutRenterInput
    Location?: LocationCreateNestedManyWithoutCustInput
    rentedLocations?: LocationCreateNestedManyWithoutRenterInput
    payments?: PaymentCreateNestedManyWithoutCustInput
    PaymentRecord?: PaymentRecordCreateNestedManyWithoutCustInput
    paymentSchedules?: PaymentScheduleCreateNestedManyWithoutCustInput
    priceAdjustments?: PriceAdjustmentCreateNestedManyWithoutCustInput
    RentHistory?: RentHistoryCreateNestedManyWithoutCustInput
    cust?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCustInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    isRenter?: boolean
    accessToken?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    createdAt?: Date | string
    password?: string | null
    updatedAt?: Date | string | null
    CUST_ID?: number | null
    dni: number
    invoices?: InvoiceUncheckedCreateNestedManyWithoutCustInput
    keys?: KeyUncheckedCreateNestedManyWithoutCustInput
    leaseContractsAsCust?: LeaseContractUncheckedCreateNestedManyWithoutCustInput
    leaseContractsAsRenter?: LeaseContractUncheckedCreateNestedManyWithoutRenterInput
    Location?: LocationUncheckedCreateNestedManyWithoutCustInput
    rentedLocations?: LocationUncheckedCreateNestedManyWithoutRenterInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCustInput
    PaymentRecord?: PaymentRecordUncheckedCreateNestedManyWithoutCustInput
    paymentSchedules?: PaymentScheduleUncheckedCreateNestedManyWithoutCustInput
    priceAdjustments?: PriceAdjustmentUncheckedCreateNestedManyWithoutCustInput
    RentHistory?: RentHistoryUncheckedCreateNestedManyWithoutCustInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCustInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    isRenter?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dni?: IntFieldUpdateOperationsInput | number
    invoices?: InvoiceUpdateManyWithoutCustNestedInput
    keys?: KeyUpdateManyWithoutCustNestedInput
    leaseContractsAsCust?: LeaseContractUpdateManyWithoutCustNestedInput
    leaseContractsAsRenter?: LeaseContractUpdateManyWithoutRenterNestedInput
    Location?: LocationUpdateManyWithoutCustNestedInput
    rentedLocations?: LocationUpdateManyWithoutRenterNestedInput
    payments?: PaymentUpdateManyWithoutCustNestedInput
    PaymentRecord?: PaymentRecordUpdateManyWithoutCustNestedInput
    paymentSchedules?: PaymentScheduleUpdateManyWithoutCustNestedInput
    priceAdjustments?: PriceAdjustmentUpdateManyWithoutCustNestedInput
    RentHistory?: RentHistoryUpdateManyWithoutCustNestedInput
    cust?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCustNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    isRenter?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    dni?: IntFieldUpdateOperationsInput | number
    invoices?: InvoiceUncheckedUpdateManyWithoutCustNestedInput
    keys?: KeyUncheckedUpdateManyWithoutCustNestedInput
    leaseContractsAsCust?: LeaseContractUncheckedUpdateManyWithoutCustNestedInput
    leaseContractsAsRenter?: LeaseContractUncheckedUpdateManyWithoutRenterNestedInput
    Location?: LocationUncheckedUpdateManyWithoutCustNestedInput
    rentedLocations?: LocationUncheckedUpdateManyWithoutRenterNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCustNestedInput
    PaymentRecord?: PaymentRecordUncheckedUpdateManyWithoutCustNestedInput
    paymentSchedules?: PaymentScheduleUncheckedUpdateManyWithoutCustNestedInput
    priceAdjustments?: PriceAdjustmentUncheckedUpdateManyWithoutCustNestedInput
    RentHistory?: RentHistoryUncheckedUpdateManyWithoutCustNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCustNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    isRenter?: boolean
    accessToken?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    createdAt?: Date | string
    password?: string | null
    updatedAt?: Date | string | null
    CUST_ID?: number | null
    dni: number
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    isRenter?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dni?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    isRenter?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    dni?: IntFieldUpdateOperationsInput | number
  }

  export type LocationCreateInput = {
    name: string
    address: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    AdjustmentLocation?: AdjustmentLocationCreateNestedManyWithoutLocationInput
    invoices?: InvoiceCreateNestedManyWithoutLocationInput
    keys?: KeyCreateNestedManyWithoutLocationInput
    contracts?: LeaseContractCreateNestedManyWithoutLocationInput
    cust?: UserCreateNestedOneWithoutLocationInput
    renter: UserCreateNestedOneWithoutRentedLocationsInput
    payments?: PaymentCreateNestedManyWithoutLocationInput
    PaymentRecord?: PaymentRecordCreateNestedManyWithoutLocationInput
    paymentSchedules?: PaymentScheduleCreateNestedManyWithoutLocationInput
    rentHistory?: RentHistoryCreateNestedManyWithoutLocationInput
    adjustments?: PriceAdjustmentCreateNestedManyWithoutLocationsInput
  }

  export type LocationUncheckedCreateInput = {
    id?: number
    name: string
    address: string
    renterId: number
    CUST_ID?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    AdjustmentLocation?: AdjustmentLocationUncheckedCreateNestedManyWithoutLocationInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutLocationInput
    keys?: KeyUncheckedCreateNestedManyWithoutLocationInput
    contracts?: LeaseContractUncheckedCreateNestedManyWithoutLocationInput
    payments?: PaymentUncheckedCreateNestedManyWithoutLocationInput
    PaymentRecord?: PaymentRecordUncheckedCreateNestedManyWithoutLocationInput
    paymentSchedules?: PaymentScheduleUncheckedCreateNestedManyWithoutLocationInput
    rentHistory?: RentHistoryUncheckedCreateNestedManyWithoutLocationInput
    adjustments?: PriceAdjustmentUncheckedCreateNestedManyWithoutLocationsInput
  }

  export type LocationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AdjustmentLocation?: AdjustmentLocationUpdateManyWithoutLocationNestedInput
    invoices?: InvoiceUpdateManyWithoutLocationNestedInput
    keys?: KeyUpdateManyWithoutLocationNestedInput
    contracts?: LeaseContractUpdateManyWithoutLocationNestedInput
    cust?: UserUpdateOneWithoutLocationNestedInput
    renter?: UserUpdateOneRequiredWithoutRentedLocationsNestedInput
    payments?: PaymentUpdateManyWithoutLocationNestedInput
    PaymentRecord?: PaymentRecordUpdateManyWithoutLocationNestedInput
    paymentSchedules?: PaymentScheduleUpdateManyWithoutLocationNestedInput
    rentHistory?: RentHistoryUpdateManyWithoutLocationNestedInput
    adjustments?: PriceAdjustmentUpdateManyWithoutLocationsNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    renterId?: IntFieldUpdateOperationsInput | number
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AdjustmentLocation?: AdjustmentLocationUncheckedUpdateManyWithoutLocationNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutLocationNestedInput
    keys?: KeyUncheckedUpdateManyWithoutLocationNestedInput
    contracts?: LeaseContractUncheckedUpdateManyWithoutLocationNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutLocationNestedInput
    PaymentRecord?: PaymentRecordUncheckedUpdateManyWithoutLocationNestedInput
    paymentSchedules?: PaymentScheduleUncheckedUpdateManyWithoutLocationNestedInput
    rentHistory?: RentHistoryUncheckedUpdateManyWithoutLocationNestedInput
    adjustments?: PriceAdjustmentUncheckedUpdateManyWithoutLocationsNestedInput
  }

  export type LocationCreateManyInput = {
    id?: number
    name: string
    address: string
    renterId: number
    CUST_ID?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type LocationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    renterId?: IntFieldUpdateOperationsInput | number
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LeaseContractCreateInput = {
    startDate: Date | string
    endDate: Date | string
    finishedDate?: Date | string | null
    rentAmount: number
    active?: boolean
    cancelled?: boolean
    createdAt?: Date | string
    pdfPath?: string | null
    cust?: UserCreateNestedOneWithoutLeaseContractsAsCustInput
    location: LocationCreateNestedOneWithoutContractsInput
    renter: UserCreateNestedOneWithoutLeaseContractsAsRenterInput
  }

  export type LeaseContractUncheckedCreateInput = {
    id?: number
    locationId: number
    startDate: Date | string
    endDate: Date | string
    finishedDate?: Date | string | null
    rentAmount: number
    active?: boolean
    cancelled?: boolean
    createdAt?: Date | string
    pdfPath?: string | null
    CUST_ID?: number | null
    renterId: number
  }

  export type LeaseContractUpdateInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rentAmount?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pdfPath?: NullableStringFieldUpdateOperationsInput | string | null
    cust?: UserUpdateOneWithoutLeaseContractsAsCustNestedInput
    location?: LocationUpdateOneRequiredWithoutContractsNestedInput
    renter?: UserUpdateOneRequiredWithoutLeaseContractsAsRenterNestedInput
  }

  export type LeaseContractUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rentAmount?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pdfPath?: NullableStringFieldUpdateOperationsInput | string | null
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    renterId?: IntFieldUpdateOperationsInput | number
  }

  export type LeaseContractCreateManyInput = {
    id?: number
    locationId: number
    startDate: Date | string
    endDate: Date | string
    finishedDate?: Date | string | null
    rentAmount: number
    active?: boolean
    cancelled?: boolean
    createdAt?: Date | string
    pdfPath?: string | null
    CUST_ID?: number | null
    renterId: number
  }

  export type LeaseContractUpdateManyMutationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rentAmount?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pdfPath?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeaseContractUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rentAmount?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pdfPath?: NullableStringFieldUpdateOperationsInput | string | null
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    renterId?: IntFieldUpdateOperationsInput | number
  }

  export type KeyCreateInput = {
    issueDate: Date | string
    returnDate?: Date | string | null
    cust?: UserCreateNestedOneWithoutKeysInput
    location: LocationCreateNestedOneWithoutKeysInput
  }

  export type KeyUncheckedCreateInput = {
    id?: number
    locationId: number
    issueDate: Date | string
    returnDate?: Date | string | null
    CUST_ID?: number | null
  }

  export type KeyUpdateInput = {
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cust?: UserUpdateOneWithoutKeysNestedInput
    location?: LocationUpdateOneRequiredWithoutKeysNestedInput
  }

  export type KeyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type KeyCreateManyInput = {
    id?: number
    locationId: number
    issueDate: Date | string
    returnDate?: Date | string | null
    CUST_ID?: number | null
  }

  export type KeyUpdateManyMutationInput = {
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type KeyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PriceAdjustmentCreateInput = {
    amount: number
    period: number
    status: number
    applyToAll: boolean
    type: number
    createdAt?: Date | string
    lastExecutedAt?: Date | string | null
    updatedAt?: Date | string
    AdjustmentLocation?: AdjustmentLocationCreateNestedManyWithoutPriceAdjustmentInput
    cust?: UserCreateNestedOneWithoutPriceAdjustmentsInput
    locations?: LocationCreateNestedManyWithoutAdjustmentsInput
  }

  export type PriceAdjustmentUncheckedCreateInput = {
    id?: number
    CUST_ID?: number | null
    amount: number
    period: number
    status: number
    applyToAll: boolean
    type: number
    createdAt?: Date | string
    lastExecutedAt?: Date | string | null
    updatedAt?: Date | string
    AdjustmentLocation?: AdjustmentLocationUncheckedCreateNestedManyWithoutPriceAdjustmentInput
    locations?: LocationUncheckedCreateNestedManyWithoutAdjustmentsInput
  }

  export type PriceAdjustmentUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    period?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    applyToAll?: BoolFieldUpdateOperationsInput | boolean
    type?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastExecutedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AdjustmentLocation?: AdjustmentLocationUpdateManyWithoutPriceAdjustmentNestedInput
    cust?: UserUpdateOneWithoutPriceAdjustmentsNestedInput
    locations?: LocationUpdateManyWithoutAdjustmentsNestedInput
  }

  export type PriceAdjustmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: IntFieldUpdateOperationsInput | number
    period?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    applyToAll?: BoolFieldUpdateOperationsInput | boolean
    type?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastExecutedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AdjustmentLocation?: AdjustmentLocationUncheckedUpdateManyWithoutPriceAdjustmentNestedInput
    locations?: LocationUncheckedUpdateManyWithoutAdjustmentsNestedInput
  }

  export type PriceAdjustmentCreateManyInput = {
    id?: number
    CUST_ID?: number | null
    amount: number
    period: number
    status: number
    applyToAll: boolean
    type: number
    createdAt?: Date | string
    lastExecutedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type PriceAdjustmentUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
    period?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    applyToAll?: BoolFieldUpdateOperationsInput | boolean
    type?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastExecutedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceAdjustmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: IntFieldUpdateOperationsInput | number
    period?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    applyToAll?: BoolFieldUpdateOperationsInput | boolean
    type?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastExecutedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdjustmentLocationCreateInput = {
    location: LocationCreateNestedOneWithoutAdjustmentLocationInput
    priceAdjustment: PriceAdjustmentCreateNestedOneWithoutAdjustmentLocationInput
  }

  export type AdjustmentLocationUncheckedCreateInput = {
    id?: number
    priceAdjustmentId: number
    locationId: number
  }

  export type AdjustmentLocationUpdateInput = {
    location?: LocationUpdateOneRequiredWithoutAdjustmentLocationNestedInput
    priceAdjustment?: PriceAdjustmentUpdateOneRequiredWithoutAdjustmentLocationNestedInput
  }

  export type AdjustmentLocationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    priceAdjustmentId?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
  }

  export type AdjustmentLocationCreateManyInput = {
    id?: number
    priceAdjustmentId: number
    locationId: number
  }

  export type AdjustmentLocationUpdateManyMutationInput = {

  }

  export type AdjustmentLocationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    priceAdjustmentId?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentCreateInput = {
    date?: Date | string
    amount: number
    month: number
    year: number
    cust?: UserCreateNestedOneWithoutPaymentsInput
    location: LocationCreateNestedOneWithoutPaymentsInput
    paymentMethod: PaymentMethodCreateNestedOneWithoutPaymentsInput
    paymentRecord: PaymentRecordCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    locationId: number
    date?: Date | string
    amount: number
    paymentMethodId: number
    CUST_ID?: number | null
    paymentRecordId: number
    month: number
    year: number
  }

  export type PaymentUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    cust?: UserUpdateOneWithoutPaymentsNestedInput
    location?: LocationUpdateOneRequiredWithoutPaymentsNestedInput
    paymentMethod?: PaymentMethodUpdateOneRequiredWithoutPaymentsNestedInput
    paymentRecord?: PaymentRecordUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    paymentMethodId?: IntFieldUpdateOperationsInput | number
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    paymentRecordId?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentCreateManyInput = {
    id?: number
    locationId: number
    date?: Date | string
    amount: number
    paymentMethodId: number
    CUST_ID?: number | null
    paymentRecordId: number
    month: number
    year: number
  }

  export type PaymentUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    paymentMethodId?: IntFieldUpdateOperationsInput | number
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    paymentRecordId?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentRecordCreateInput = {
    month: number
    year: number
    remainingAmount?: number
    totalPaid?: number
    totalRent: number
    payments?: PaymentCreateNestedManyWithoutPaymentRecordInput
    cust?: UserCreateNestedOneWithoutPaymentRecordInput
    location: LocationCreateNestedOneWithoutPaymentRecordInput
  }

  export type PaymentRecordUncheckedCreateInput = {
    id?: number
    locationId: number
    month: number
    year: number
    CUST_ID?: number | null
    remainingAmount?: number
    totalPaid?: number
    totalRent: number
    payments?: PaymentUncheckedCreateNestedManyWithoutPaymentRecordInput
  }

  export type PaymentRecordUpdateInput = {
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    totalPaid?: IntFieldUpdateOperationsInput | number
    totalRent?: IntFieldUpdateOperationsInput | number
    payments?: PaymentUpdateManyWithoutPaymentRecordNestedInput
    cust?: UserUpdateOneWithoutPaymentRecordNestedInput
    location?: LocationUpdateOneRequiredWithoutPaymentRecordNestedInput
  }

  export type PaymentRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    remainingAmount?: IntFieldUpdateOperationsInput | number
    totalPaid?: IntFieldUpdateOperationsInput | number
    totalRent?: IntFieldUpdateOperationsInput | number
    payments?: PaymentUncheckedUpdateManyWithoutPaymentRecordNestedInput
  }

  export type PaymentRecordCreateManyInput = {
    id?: number
    locationId: number
    month: number
    year: number
    CUST_ID?: number | null
    remainingAmount?: number
    totalPaid?: number
    totalRent: number
  }

  export type PaymentRecordUpdateManyMutationInput = {
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    totalPaid?: IntFieldUpdateOperationsInput | number
    totalRent?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    remainingAmount?: IntFieldUpdateOperationsInput | number
    totalPaid?: IntFieldUpdateOperationsInput | number
    totalRent?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentMethodCreateInput = {
    name: string
    payments?: PaymentCreateNestedManyWithoutPaymentMethodInput
  }

  export type PaymentMethodUncheckedCreateInput = {
    id?: number
    name: string
    payments?: PaymentUncheckedCreateNestedManyWithoutPaymentMethodInput
  }

  export type PaymentMethodUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    payments?: PaymentUpdateManyWithoutPaymentMethodNestedInput
  }

  export type PaymentMethodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    payments?: PaymentUncheckedUpdateManyWithoutPaymentMethodNestedInput
  }

  export type PaymentMethodCreateManyInput = {
    id?: number
    name: string
  }

  export type PaymentMethodUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentMethodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InvoiceCreateInput = {
    date: Date | string
    cust?: UserCreateNestedOneWithoutInvoicesInput
    location: LocationCreateNestedOneWithoutInvoicesInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: number
    locationId: number
    date: Date | string
    CUST_ID?: number | null
  }

  export type InvoiceUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    cust?: UserUpdateOneWithoutInvoicesNestedInput
    location?: LocationUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InvoiceCreateManyInput = {
    id?: number
    locationId: number
    date: Date | string
    CUST_ID?: number | null
  }

  export type InvoiceUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PaymentScheduleCreateInput = {
    dueDate: Date | string
    cust?: UserCreateNestedOneWithoutPaymentSchedulesInput
    location: LocationCreateNestedOneWithoutPaymentSchedulesInput
  }

  export type PaymentScheduleUncheckedCreateInput = {
    id?: number
    locationId: number
    dueDate: Date | string
    CUST_ID?: number | null
  }

  export type PaymentScheduleUpdateInput = {
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cust?: UserUpdateOneWithoutPaymentSchedulesNestedInput
    location?: LocationUpdateOneRequiredWithoutPaymentSchedulesNestedInput
  }

  export type PaymentScheduleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PaymentScheduleCreateManyInput = {
    id?: number
    locationId: number
    dueDate: Date | string
    CUST_ID?: number | null
  }

  export type PaymentScheduleUpdateManyMutationInput = {
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentScheduleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RentHistoryCreateInput = {
    month: number
    year: number
    rentAmount: number
    createdAt?: Date | string
    cust?: UserCreateNestedOneWithoutRentHistoryInput
    location: LocationCreateNestedOneWithoutRentHistoryInput
  }

  export type RentHistoryUncheckedCreateInput = {
    id?: number
    locationId: number
    month: number
    year: number
    rentAmount: number
    createdAt?: Date | string
    CUST_ID?: number | null
  }

  export type RentHistoryUpdateInput = {
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    rentAmount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cust?: UserUpdateOneWithoutRentHistoryNestedInput
    location?: LocationUpdateOneRequiredWithoutRentHistoryNestedInput
  }

  export type RentHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    rentAmount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RentHistoryCreateManyInput = {
    id?: number
    locationId: number
    month: number
    year: number
    rentAmount: number
    createdAt?: Date | string
    CUST_ID?: number | null
  }

  export type RentHistoryUpdateManyMutationInput = {
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    rentAmount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    rentAmount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput
    some?: InvoiceWhereInput
    none?: InvoiceWhereInput
  }

  export type KeyListRelationFilter = {
    every?: KeyWhereInput
    some?: KeyWhereInput
    none?: KeyWhereInput
  }

  export type LeaseContractListRelationFilter = {
    every?: LeaseContractWhereInput
    some?: LeaseContractWhereInput
    none?: LeaseContractWhereInput
  }

  export type LocationListRelationFilter = {
    every?: LocationWhereInput
    some?: LocationWhereInput
    none?: LocationWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type PaymentRecordListRelationFilter = {
    every?: PaymentRecordWhereInput
    some?: PaymentRecordWhereInput
    none?: PaymentRecordWhereInput
  }

  export type PaymentScheduleListRelationFilter = {
    every?: PaymentScheduleWhereInput
    some?: PaymentScheduleWhereInput
    none?: PaymentScheduleWhereInput
  }

  export type PriceAdjustmentListRelationFilter = {
    every?: PriceAdjustmentWhereInput
    some?: PriceAdjustmentWhereInput
    none?: PriceAdjustmentWhereInput
  }

  export type RentHistoryListRelationFilter = {
    every?: RentHistoryWhereInput
    some?: RentHistoryWhereInput
    none?: RentHistoryWhereInput
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeaseContractOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PriceAdjustmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RentHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    isRenter?: SortOrder
    accessToken?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    picture?: SortOrder
    createdAt?: SortOrder
    password?: SortOrder
    updatedAt?: SortOrder
    CUST_ID?: SortOrder
    dni?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    CUST_ID?: SortOrder
    dni?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    isRenter?: SortOrder
    accessToken?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    picture?: SortOrder
    createdAt?: SortOrder
    password?: SortOrder
    updatedAt?: SortOrder
    CUST_ID?: SortOrder
    dni?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    isRenter?: SortOrder
    accessToken?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    picture?: SortOrder
    createdAt?: SortOrder
    password?: SortOrder
    updatedAt?: SortOrder
    CUST_ID?: SortOrder
    dni?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    CUST_ID?: SortOrder
    dni?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AdjustmentLocationListRelationFilter = {
    every?: AdjustmentLocationWhereInput
    some?: AdjustmentLocationWhereInput
    none?: AdjustmentLocationWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AdjustmentLocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    renterId?: SortOrder
    CUST_ID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationAvgOrderByAggregateInput = {
    id?: SortOrder
    renterId?: SortOrder
    CUST_ID?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    renterId?: SortOrder
    CUST_ID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    renterId?: SortOrder
    CUST_ID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationSumOrderByAggregateInput = {
    id?: SortOrder
    renterId?: SortOrder
    CUST_ID?: SortOrder
  }

  export type LocationRelationFilter = {
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type LeaseContractCountOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    finishedDate?: SortOrder
    rentAmount?: SortOrder
    active?: SortOrder
    cancelled?: SortOrder
    createdAt?: SortOrder
    pdfPath?: SortOrder
    CUST_ID?: SortOrder
    renterId?: SortOrder
  }

  export type LeaseContractAvgOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    rentAmount?: SortOrder
    CUST_ID?: SortOrder
    renterId?: SortOrder
  }

  export type LeaseContractMaxOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    finishedDate?: SortOrder
    rentAmount?: SortOrder
    active?: SortOrder
    cancelled?: SortOrder
    createdAt?: SortOrder
    pdfPath?: SortOrder
    CUST_ID?: SortOrder
    renterId?: SortOrder
  }

  export type LeaseContractMinOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    finishedDate?: SortOrder
    rentAmount?: SortOrder
    active?: SortOrder
    cancelled?: SortOrder
    createdAt?: SortOrder
    pdfPath?: SortOrder
    CUST_ID?: SortOrder
    renterId?: SortOrder
  }

  export type LeaseContractSumOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    rentAmount?: SortOrder
    CUST_ID?: SortOrder
    renterId?: SortOrder
  }

  export type KeyCountOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    issueDate?: SortOrder
    returnDate?: SortOrder
    CUST_ID?: SortOrder
  }

  export type KeyAvgOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    CUST_ID?: SortOrder
  }

  export type KeyMaxOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    issueDate?: SortOrder
    returnDate?: SortOrder
    CUST_ID?: SortOrder
  }

  export type KeyMinOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    issueDate?: SortOrder
    returnDate?: SortOrder
    CUST_ID?: SortOrder
  }

  export type KeySumOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    CUST_ID?: SortOrder
  }

  export type PriceAdjustmentCountOrderByAggregateInput = {
    id?: SortOrder
    CUST_ID?: SortOrder
    amount?: SortOrder
    period?: SortOrder
    status?: SortOrder
    applyToAll?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    lastExecutedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PriceAdjustmentAvgOrderByAggregateInput = {
    id?: SortOrder
    CUST_ID?: SortOrder
    amount?: SortOrder
    period?: SortOrder
    status?: SortOrder
    type?: SortOrder
  }

  export type PriceAdjustmentMaxOrderByAggregateInput = {
    id?: SortOrder
    CUST_ID?: SortOrder
    amount?: SortOrder
    period?: SortOrder
    status?: SortOrder
    applyToAll?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    lastExecutedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PriceAdjustmentMinOrderByAggregateInput = {
    id?: SortOrder
    CUST_ID?: SortOrder
    amount?: SortOrder
    period?: SortOrder
    status?: SortOrder
    applyToAll?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    lastExecutedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PriceAdjustmentSumOrderByAggregateInput = {
    id?: SortOrder
    CUST_ID?: SortOrder
    amount?: SortOrder
    period?: SortOrder
    status?: SortOrder
    type?: SortOrder
  }

  export type PriceAdjustmentRelationFilter = {
    is?: PriceAdjustmentWhereInput
    isNot?: PriceAdjustmentWhereInput
  }

  export type AdjustmentLocationCountOrderByAggregateInput = {
    id?: SortOrder
    priceAdjustmentId?: SortOrder
    locationId?: SortOrder
  }

  export type AdjustmentLocationAvgOrderByAggregateInput = {
    id?: SortOrder
    priceAdjustmentId?: SortOrder
    locationId?: SortOrder
  }

  export type AdjustmentLocationMaxOrderByAggregateInput = {
    id?: SortOrder
    priceAdjustmentId?: SortOrder
    locationId?: SortOrder
  }

  export type AdjustmentLocationMinOrderByAggregateInput = {
    id?: SortOrder
    priceAdjustmentId?: SortOrder
    locationId?: SortOrder
  }

  export type AdjustmentLocationSumOrderByAggregateInput = {
    id?: SortOrder
    priceAdjustmentId?: SortOrder
    locationId?: SortOrder
  }

  export type PaymentMethodRelationFilter = {
    is?: PaymentMethodWhereInput
    isNot?: PaymentMethodWhereInput
  }

  export type PaymentRecordRelationFilter = {
    is?: PaymentRecordWhereInput
    isNot?: PaymentRecordWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    paymentMethodId?: SortOrder
    CUST_ID?: SortOrder
    paymentRecordId?: SortOrder
    month?: SortOrder
    year?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    amount?: SortOrder
    paymentMethodId?: SortOrder
    CUST_ID?: SortOrder
    paymentRecordId?: SortOrder
    month?: SortOrder
    year?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    paymentMethodId?: SortOrder
    CUST_ID?: SortOrder
    paymentRecordId?: SortOrder
    month?: SortOrder
    year?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    paymentMethodId?: SortOrder
    CUST_ID?: SortOrder
    paymentRecordId?: SortOrder
    month?: SortOrder
    year?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    amount?: SortOrder
    paymentMethodId?: SortOrder
    CUST_ID?: SortOrder
    paymentRecordId?: SortOrder
    month?: SortOrder
    year?: SortOrder
  }

  export type PaymentRecordCountOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    CUST_ID?: SortOrder
    remainingAmount?: SortOrder
    totalPaid?: SortOrder
    totalRent?: SortOrder
  }

  export type PaymentRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    CUST_ID?: SortOrder
    remainingAmount?: SortOrder
    totalPaid?: SortOrder
    totalRent?: SortOrder
  }

  export type PaymentRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    CUST_ID?: SortOrder
    remainingAmount?: SortOrder
    totalPaid?: SortOrder
    totalRent?: SortOrder
  }

  export type PaymentRecordMinOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    CUST_ID?: SortOrder
    remainingAmount?: SortOrder
    totalPaid?: SortOrder
    totalRent?: SortOrder
  }

  export type PaymentRecordSumOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    CUST_ID?: SortOrder
    remainingAmount?: SortOrder
    totalPaid?: SortOrder
    totalRent?: SortOrder
  }

  export type PaymentMethodCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PaymentMethodAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PaymentMethodMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PaymentMethodMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PaymentMethodSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    date?: SortOrder
    CUST_ID?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    CUST_ID?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    date?: SortOrder
    CUST_ID?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    date?: SortOrder
    CUST_ID?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    CUST_ID?: SortOrder
  }

  export type PaymentScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    dueDate?: SortOrder
    CUST_ID?: SortOrder
  }

  export type PaymentScheduleAvgOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    CUST_ID?: SortOrder
  }

  export type PaymentScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    dueDate?: SortOrder
    CUST_ID?: SortOrder
  }

  export type PaymentScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    dueDate?: SortOrder
    CUST_ID?: SortOrder
  }

  export type PaymentScheduleSumOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    CUST_ID?: SortOrder
  }

  export type RentHistoryLocationIdMonthYearCompoundUniqueInput = {
    locationId: number
    month: number
    year: number
  }

  export type RentHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    rentAmount?: SortOrder
    createdAt?: SortOrder
    CUST_ID?: SortOrder
  }

  export type RentHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    rentAmount?: SortOrder
    CUST_ID?: SortOrder
  }

  export type RentHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    rentAmount?: SortOrder
    createdAt?: SortOrder
    CUST_ID?: SortOrder
  }

  export type RentHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    rentAmount?: SortOrder
    createdAt?: SortOrder
    CUST_ID?: SortOrder
  }

  export type RentHistorySumOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    rentAmount?: SortOrder
    CUST_ID?: SortOrder
  }

  export type InvoiceCreateNestedManyWithoutCustInput = {
    create?: XOR<InvoiceCreateWithoutCustInput, InvoiceUncheckedCreateWithoutCustInput> | InvoiceCreateWithoutCustInput[] | InvoiceUncheckedCreateWithoutCustInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCustInput | InvoiceCreateOrConnectWithoutCustInput[]
    createMany?: InvoiceCreateManyCustInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type KeyCreateNestedManyWithoutCustInput = {
    create?: XOR<KeyCreateWithoutCustInput, KeyUncheckedCreateWithoutCustInput> | KeyCreateWithoutCustInput[] | KeyUncheckedCreateWithoutCustInput[]
    connectOrCreate?: KeyCreateOrConnectWithoutCustInput | KeyCreateOrConnectWithoutCustInput[]
    createMany?: KeyCreateManyCustInputEnvelope
    connect?: KeyWhereUniqueInput | KeyWhereUniqueInput[]
  }

  export type LeaseContractCreateNestedManyWithoutCustInput = {
    create?: XOR<LeaseContractCreateWithoutCustInput, LeaseContractUncheckedCreateWithoutCustInput> | LeaseContractCreateWithoutCustInput[] | LeaseContractUncheckedCreateWithoutCustInput[]
    connectOrCreate?: LeaseContractCreateOrConnectWithoutCustInput | LeaseContractCreateOrConnectWithoutCustInput[]
    createMany?: LeaseContractCreateManyCustInputEnvelope
    connect?: LeaseContractWhereUniqueInput | LeaseContractWhereUniqueInput[]
  }

  export type LeaseContractCreateNestedManyWithoutRenterInput = {
    create?: XOR<LeaseContractCreateWithoutRenterInput, LeaseContractUncheckedCreateWithoutRenterInput> | LeaseContractCreateWithoutRenterInput[] | LeaseContractUncheckedCreateWithoutRenterInput[]
    connectOrCreate?: LeaseContractCreateOrConnectWithoutRenterInput | LeaseContractCreateOrConnectWithoutRenterInput[]
    createMany?: LeaseContractCreateManyRenterInputEnvelope
    connect?: LeaseContractWhereUniqueInput | LeaseContractWhereUniqueInput[]
  }

  export type LocationCreateNestedManyWithoutCustInput = {
    create?: XOR<LocationCreateWithoutCustInput, LocationUncheckedCreateWithoutCustInput> | LocationCreateWithoutCustInput[] | LocationUncheckedCreateWithoutCustInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutCustInput | LocationCreateOrConnectWithoutCustInput[]
    createMany?: LocationCreateManyCustInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type LocationCreateNestedManyWithoutRenterInput = {
    create?: XOR<LocationCreateWithoutRenterInput, LocationUncheckedCreateWithoutRenterInput> | LocationCreateWithoutRenterInput[] | LocationUncheckedCreateWithoutRenterInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutRenterInput | LocationCreateOrConnectWithoutRenterInput[]
    createMany?: LocationCreateManyRenterInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutCustInput = {
    create?: XOR<PaymentCreateWithoutCustInput, PaymentUncheckedCreateWithoutCustInput> | PaymentCreateWithoutCustInput[] | PaymentUncheckedCreateWithoutCustInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCustInput | PaymentCreateOrConnectWithoutCustInput[]
    createMany?: PaymentCreateManyCustInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentRecordCreateNestedManyWithoutCustInput = {
    create?: XOR<PaymentRecordCreateWithoutCustInput, PaymentRecordUncheckedCreateWithoutCustInput> | PaymentRecordCreateWithoutCustInput[] | PaymentRecordUncheckedCreateWithoutCustInput[]
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutCustInput | PaymentRecordCreateOrConnectWithoutCustInput[]
    createMany?: PaymentRecordCreateManyCustInputEnvelope
    connect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
  }

  export type PaymentScheduleCreateNestedManyWithoutCustInput = {
    create?: XOR<PaymentScheduleCreateWithoutCustInput, PaymentScheduleUncheckedCreateWithoutCustInput> | PaymentScheduleCreateWithoutCustInput[] | PaymentScheduleUncheckedCreateWithoutCustInput[]
    connectOrCreate?: PaymentScheduleCreateOrConnectWithoutCustInput | PaymentScheduleCreateOrConnectWithoutCustInput[]
    createMany?: PaymentScheduleCreateManyCustInputEnvelope
    connect?: PaymentScheduleWhereUniqueInput | PaymentScheduleWhereUniqueInput[]
  }

  export type PriceAdjustmentCreateNestedManyWithoutCustInput = {
    create?: XOR<PriceAdjustmentCreateWithoutCustInput, PriceAdjustmentUncheckedCreateWithoutCustInput> | PriceAdjustmentCreateWithoutCustInput[] | PriceAdjustmentUncheckedCreateWithoutCustInput[]
    connectOrCreate?: PriceAdjustmentCreateOrConnectWithoutCustInput | PriceAdjustmentCreateOrConnectWithoutCustInput[]
    createMany?: PriceAdjustmentCreateManyCustInputEnvelope
    connect?: PriceAdjustmentWhereUniqueInput | PriceAdjustmentWhereUniqueInput[]
  }

  export type RentHistoryCreateNestedManyWithoutCustInput = {
    create?: XOR<RentHistoryCreateWithoutCustInput, RentHistoryUncheckedCreateWithoutCustInput> | RentHistoryCreateWithoutCustInput[] | RentHistoryUncheckedCreateWithoutCustInput[]
    connectOrCreate?: RentHistoryCreateOrConnectWithoutCustInput | RentHistoryCreateOrConnectWithoutCustInput[]
    createMany?: RentHistoryCreateManyCustInputEnvelope
    connect?: RentHistoryWhereUniqueInput | RentHistoryWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCreatedUsersInput = {
    create?: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedUsersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutCustInput = {
    create?: XOR<UserCreateWithoutCustInput, UserUncheckedCreateWithoutCustInput> | UserCreateWithoutCustInput[] | UserUncheckedCreateWithoutCustInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCustInput | UserCreateOrConnectWithoutCustInput[]
    createMany?: UserCreateManyCustInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutCustInput = {
    create?: XOR<InvoiceCreateWithoutCustInput, InvoiceUncheckedCreateWithoutCustInput> | InvoiceCreateWithoutCustInput[] | InvoiceUncheckedCreateWithoutCustInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCustInput | InvoiceCreateOrConnectWithoutCustInput[]
    createMany?: InvoiceCreateManyCustInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type KeyUncheckedCreateNestedManyWithoutCustInput = {
    create?: XOR<KeyCreateWithoutCustInput, KeyUncheckedCreateWithoutCustInput> | KeyCreateWithoutCustInput[] | KeyUncheckedCreateWithoutCustInput[]
    connectOrCreate?: KeyCreateOrConnectWithoutCustInput | KeyCreateOrConnectWithoutCustInput[]
    createMany?: KeyCreateManyCustInputEnvelope
    connect?: KeyWhereUniqueInput | KeyWhereUniqueInput[]
  }

  export type LeaseContractUncheckedCreateNestedManyWithoutCustInput = {
    create?: XOR<LeaseContractCreateWithoutCustInput, LeaseContractUncheckedCreateWithoutCustInput> | LeaseContractCreateWithoutCustInput[] | LeaseContractUncheckedCreateWithoutCustInput[]
    connectOrCreate?: LeaseContractCreateOrConnectWithoutCustInput | LeaseContractCreateOrConnectWithoutCustInput[]
    createMany?: LeaseContractCreateManyCustInputEnvelope
    connect?: LeaseContractWhereUniqueInput | LeaseContractWhereUniqueInput[]
  }

  export type LeaseContractUncheckedCreateNestedManyWithoutRenterInput = {
    create?: XOR<LeaseContractCreateWithoutRenterInput, LeaseContractUncheckedCreateWithoutRenterInput> | LeaseContractCreateWithoutRenterInput[] | LeaseContractUncheckedCreateWithoutRenterInput[]
    connectOrCreate?: LeaseContractCreateOrConnectWithoutRenterInput | LeaseContractCreateOrConnectWithoutRenterInput[]
    createMany?: LeaseContractCreateManyRenterInputEnvelope
    connect?: LeaseContractWhereUniqueInput | LeaseContractWhereUniqueInput[]
  }

  export type LocationUncheckedCreateNestedManyWithoutCustInput = {
    create?: XOR<LocationCreateWithoutCustInput, LocationUncheckedCreateWithoutCustInput> | LocationCreateWithoutCustInput[] | LocationUncheckedCreateWithoutCustInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutCustInput | LocationCreateOrConnectWithoutCustInput[]
    createMany?: LocationCreateManyCustInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type LocationUncheckedCreateNestedManyWithoutRenterInput = {
    create?: XOR<LocationCreateWithoutRenterInput, LocationUncheckedCreateWithoutRenterInput> | LocationCreateWithoutRenterInput[] | LocationUncheckedCreateWithoutRenterInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutRenterInput | LocationCreateOrConnectWithoutRenterInput[]
    createMany?: LocationCreateManyRenterInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutCustInput = {
    create?: XOR<PaymentCreateWithoutCustInput, PaymentUncheckedCreateWithoutCustInput> | PaymentCreateWithoutCustInput[] | PaymentUncheckedCreateWithoutCustInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCustInput | PaymentCreateOrConnectWithoutCustInput[]
    createMany?: PaymentCreateManyCustInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentRecordUncheckedCreateNestedManyWithoutCustInput = {
    create?: XOR<PaymentRecordCreateWithoutCustInput, PaymentRecordUncheckedCreateWithoutCustInput> | PaymentRecordCreateWithoutCustInput[] | PaymentRecordUncheckedCreateWithoutCustInput[]
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutCustInput | PaymentRecordCreateOrConnectWithoutCustInput[]
    createMany?: PaymentRecordCreateManyCustInputEnvelope
    connect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
  }

  export type PaymentScheduleUncheckedCreateNestedManyWithoutCustInput = {
    create?: XOR<PaymentScheduleCreateWithoutCustInput, PaymentScheduleUncheckedCreateWithoutCustInput> | PaymentScheduleCreateWithoutCustInput[] | PaymentScheduleUncheckedCreateWithoutCustInput[]
    connectOrCreate?: PaymentScheduleCreateOrConnectWithoutCustInput | PaymentScheduleCreateOrConnectWithoutCustInput[]
    createMany?: PaymentScheduleCreateManyCustInputEnvelope
    connect?: PaymentScheduleWhereUniqueInput | PaymentScheduleWhereUniqueInput[]
  }

  export type PriceAdjustmentUncheckedCreateNestedManyWithoutCustInput = {
    create?: XOR<PriceAdjustmentCreateWithoutCustInput, PriceAdjustmentUncheckedCreateWithoutCustInput> | PriceAdjustmentCreateWithoutCustInput[] | PriceAdjustmentUncheckedCreateWithoutCustInput[]
    connectOrCreate?: PriceAdjustmentCreateOrConnectWithoutCustInput | PriceAdjustmentCreateOrConnectWithoutCustInput[]
    createMany?: PriceAdjustmentCreateManyCustInputEnvelope
    connect?: PriceAdjustmentWhereUniqueInput | PriceAdjustmentWhereUniqueInput[]
  }

  export type RentHistoryUncheckedCreateNestedManyWithoutCustInput = {
    create?: XOR<RentHistoryCreateWithoutCustInput, RentHistoryUncheckedCreateWithoutCustInput> | RentHistoryCreateWithoutCustInput[] | RentHistoryUncheckedCreateWithoutCustInput[]
    connectOrCreate?: RentHistoryCreateOrConnectWithoutCustInput | RentHistoryCreateOrConnectWithoutCustInput[]
    createMany?: RentHistoryCreateManyCustInputEnvelope
    connect?: RentHistoryWhereUniqueInput | RentHistoryWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCustInput = {
    create?: XOR<UserCreateWithoutCustInput, UserUncheckedCreateWithoutCustInput> | UserCreateWithoutCustInput[] | UserUncheckedCreateWithoutCustInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCustInput | UserCreateOrConnectWithoutCustInput[]
    createMany?: UserCreateManyCustInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InvoiceUpdateManyWithoutCustNestedInput = {
    create?: XOR<InvoiceCreateWithoutCustInput, InvoiceUncheckedCreateWithoutCustInput> | InvoiceCreateWithoutCustInput[] | InvoiceUncheckedCreateWithoutCustInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCustInput | InvoiceCreateOrConnectWithoutCustInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutCustInput | InvoiceUpsertWithWhereUniqueWithoutCustInput[]
    createMany?: InvoiceCreateManyCustInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutCustInput | InvoiceUpdateWithWhereUniqueWithoutCustInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutCustInput | InvoiceUpdateManyWithWhereWithoutCustInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type KeyUpdateManyWithoutCustNestedInput = {
    create?: XOR<KeyCreateWithoutCustInput, KeyUncheckedCreateWithoutCustInput> | KeyCreateWithoutCustInput[] | KeyUncheckedCreateWithoutCustInput[]
    connectOrCreate?: KeyCreateOrConnectWithoutCustInput | KeyCreateOrConnectWithoutCustInput[]
    upsert?: KeyUpsertWithWhereUniqueWithoutCustInput | KeyUpsertWithWhereUniqueWithoutCustInput[]
    createMany?: KeyCreateManyCustInputEnvelope
    set?: KeyWhereUniqueInput | KeyWhereUniqueInput[]
    disconnect?: KeyWhereUniqueInput | KeyWhereUniqueInput[]
    delete?: KeyWhereUniqueInput | KeyWhereUniqueInput[]
    connect?: KeyWhereUniqueInput | KeyWhereUniqueInput[]
    update?: KeyUpdateWithWhereUniqueWithoutCustInput | KeyUpdateWithWhereUniqueWithoutCustInput[]
    updateMany?: KeyUpdateManyWithWhereWithoutCustInput | KeyUpdateManyWithWhereWithoutCustInput[]
    deleteMany?: KeyScalarWhereInput | KeyScalarWhereInput[]
  }

  export type LeaseContractUpdateManyWithoutCustNestedInput = {
    create?: XOR<LeaseContractCreateWithoutCustInput, LeaseContractUncheckedCreateWithoutCustInput> | LeaseContractCreateWithoutCustInput[] | LeaseContractUncheckedCreateWithoutCustInput[]
    connectOrCreate?: LeaseContractCreateOrConnectWithoutCustInput | LeaseContractCreateOrConnectWithoutCustInput[]
    upsert?: LeaseContractUpsertWithWhereUniqueWithoutCustInput | LeaseContractUpsertWithWhereUniqueWithoutCustInput[]
    createMany?: LeaseContractCreateManyCustInputEnvelope
    set?: LeaseContractWhereUniqueInput | LeaseContractWhereUniqueInput[]
    disconnect?: LeaseContractWhereUniqueInput | LeaseContractWhereUniqueInput[]
    delete?: LeaseContractWhereUniqueInput | LeaseContractWhereUniqueInput[]
    connect?: LeaseContractWhereUniqueInput | LeaseContractWhereUniqueInput[]
    update?: LeaseContractUpdateWithWhereUniqueWithoutCustInput | LeaseContractUpdateWithWhereUniqueWithoutCustInput[]
    updateMany?: LeaseContractUpdateManyWithWhereWithoutCustInput | LeaseContractUpdateManyWithWhereWithoutCustInput[]
    deleteMany?: LeaseContractScalarWhereInput | LeaseContractScalarWhereInput[]
  }

  export type LeaseContractUpdateManyWithoutRenterNestedInput = {
    create?: XOR<LeaseContractCreateWithoutRenterInput, LeaseContractUncheckedCreateWithoutRenterInput> | LeaseContractCreateWithoutRenterInput[] | LeaseContractUncheckedCreateWithoutRenterInput[]
    connectOrCreate?: LeaseContractCreateOrConnectWithoutRenterInput | LeaseContractCreateOrConnectWithoutRenterInput[]
    upsert?: LeaseContractUpsertWithWhereUniqueWithoutRenterInput | LeaseContractUpsertWithWhereUniqueWithoutRenterInput[]
    createMany?: LeaseContractCreateManyRenterInputEnvelope
    set?: LeaseContractWhereUniqueInput | LeaseContractWhereUniqueInput[]
    disconnect?: LeaseContractWhereUniqueInput | LeaseContractWhereUniqueInput[]
    delete?: LeaseContractWhereUniqueInput | LeaseContractWhereUniqueInput[]
    connect?: LeaseContractWhereUniqueInput | LeaseContractWhereUniqueInput[]
    update?: LeaseContractUpdateWithWhereUniqueWithoutRenterInput | LeaseContractUpdateWithWhereUniqueWithoutRenterInput[]
    updateMany?: LeaseContractUpdateManyWithWhereWithoutRenterInput | LeaseContractUpdateManyWithWhereWithoutRenterInput[]
    deleteMany?: LeaseContractScalarWhereInput | LeaseContractScalarWhereInput[]
  }

  export type LocationUpdateManyWithoutCustNestedInput = {
    create?: XOR<LocationCreateWithoutCustInput, LocationUncheckedCreateWithoutCustInput> | LocationCreateWithoutCustInput[] | LocationUncheckedCreateWithoutCustInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutCustInput | LocationCreateOrConnectWithoutCustInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutCustInput | LocationUpsertWithWhereUniqueWithoutCustInput[]
    createMany?: LocationCreateManyCustInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutCustInput | LocationUpdateWithWhereUniqueWithoutCustInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutCustInput | LocationUpdateManyWithWhereWithoutCustInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type LocationUpdateManyWithoutRenterNestedInput = {
    create?: XOR<LocationCreateWithoutRenterInput, LocationUncheckedCreateWithoutRenterInput> | LocationCreateWithoutRenterInput[] | LocationUncheckedCreateWithoutRenterInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutRenterInput | LocationCreateOrConnectWithoutRenterInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutRenterInput | LocationUpsertWithWhereUniqueWithoutRenterInput[]
    createMany?: LocationCreateManyRenterInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutRenterInput | LocationUpdateWithWhereUniqueWithoutRenterInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutRenterInput | LocationUpdateManyWithWhereWithoutRenterInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutCustNestedInput = {
    create?: XOR<PaymentCreateWithoutCustInput, PaymentUncheckedCreateWithoutCustInput> | PaymentCreateWithoutCustInput[] | PaymentUncheckedCreateWithoutCustInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCustInput | PaymentCreateOrConnectWithoutCustInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutCustInput | PaymentUpsertWithWhereUniqueWithoutCustInput[]
    createMany?: PaymentCreateManyCustInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutCustInput | PaymentUpdateWithWhereUniqueWithoutCustInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutCustInput | PaymentUpdateManyWithWhereWithoutCustInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentRecordUpdateManyWithoutCustNestedInput = {
    create?: XOR<PaymentRecordCreateWithoutCustInput, PaymentRecordUncheckedCreateWithoutCustInput> | PaymentRecordCreateWithoutCustInput[] | PaymentRecordUncheckedCreateWithoutCustInput[]
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutCustInput | PaymentRecordCreateOrConnectWithoutCustInput[]
    upsert?: PaymentRecordUpsertWithWhereUniqueWithoutCustInput | PaymentRecordUpsertWithWhereUniqueWithoutCustInput[]
    createMany?: PaymentRecordCreateManyCustInputEnvelope
    set?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    disconnect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    delete?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    connect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    update?: PaymentRecordUpdateWithWhereUniqueWithoutCustInput | PaymentRecordUpdateWithWhereUniqueWithoutCustInput[]
    updateMany?: PaymentRecordUpdateManyWithWhereWithoutCustInput | PaymentRecordUpdateManyWithWhereWithoutCustInput[]
    deleteMany?: PaymentRecordScalarWhereInput | PaymentRecordScalarWhereInput[]
  }

  export type PaymentScheduleUpdateManyWithoutCustNestedInput = {
    create?: XOR<PaymentScheduleCreateWithoutCustInput, PaymentScheduleUncheckedCreateWithoutCustInput> | PaymentScheduleCreateWithoutCustInput[] | PaymentScheduleUncheckedCreateWithoutCustInput[]
    connectOrCreate?: PaymentScheduleCreateOrConnectWithoutCustInput | PaymentScheduleCreateOrConnectWithoutCustInput[]
    upsert?: PaymentScheduleUpsertWithWhereUniqueWithoutCustInput | PaymentScheduleUpsertWithWhereUniqueWithoutCustInput[]
    createMany?: PaymentScheduleCreateManyCustInputEnvelope
    set?: PaymentScheduleWhereUniqueInput | PaymentScheduleWhereUniqueInput[]
    disconnect?: PaymentScheduleWhereUniqueInput | PaymentScheduleWhereUniqueInput[]
    delete?: PaymentScheduleWhereUniqueInput | PaymentScheduleWhereUniqueInput[]
    connect?: PaymentScheduleWhereUniqueInput | PaymentScheduleWhereUniqueInput[]
    update?: PaymentScheduleUpdateWithWhereUniqueWithoutCustInput | PaymentScheduleUpdateWithWhereUniqueWithoutCustInput[]
    updateMany?: PaymentScheduleUpdateManyWithWhereWithoutCustInput | PaymentScheduleUpdateManyWithWhereWithoutCustInput[]
    deleteMany?: PaymentScheduleScalarWhereInput | PaymentScheduleScalarWhereInput[]
  }

  export type PriceAdjustmentUpdateManyWithoutCustNestedInput = {
    create?: XOR<PriceAdjustmentCreateWithoutCustInput, PriceAdjustmentUncheckedCreateWithoutCustInput> | PriceAdjustmentCreateWithoutCustInput[] | PriceAdjustmentUncheckedCreateWithoutCustInput[]
    connectOrCreate?: PriceAdjustmentCreateOrConnectWithoutCustInput | PriceAdjustmentCreateOrConnectWithoutCustInput[]
    upsert?: PriceAdjustmentUpsertWithWhereUniqueWithoutCustInput | PriceAdjustmentUpsertWithWhereUniqueWithoutCustInput[]
    createMany?: PriceAdjustmentCreateManyCustInputEnvelope
    set?: PriceAdjustmentWhereUniqueInput | PriceAdjustmentWhereUniqueInput[]
    disconnect?: PriceAdjustmentWhereUniqueInput | PriceAdjustmentWhereUniqueInput[]
    delete?: PriceAdjustmentWhereUniqueInput | PriceAdjustmentWhereUniqueInput[]
    connect?: PriceAdjustmentWhereUniqueInput | PriceAdjustmentWhereUniqueInput[]
    update?: PriceAdjustmentUpdateWithWhereUniqueWithoutCustInput | PriceAdjustmentUpdateWithWhereUniqueWithoutCustInput[]
    updateMany?: PriceAdjustmentUpdateManyWithWhereWithoutCustInput | PriceAdjustmentUpdateManyWithWhereWithoutCustInput[]
    deleteMany?: PriceAdjustmentScalarWhereInput | PriceAdjustmentScalarWhereInput[]
  }

  export type RentHistoryUpdateManyWithoutCustNestedInput = {
    create?: XOR<RentHistoryCreateWithoutCustInput, RentHistoryUncheckedCreateWithoutCustInput> | RentHistoryCreateWithoutCustInput[] | RentHistoryUncheckedCreateWithoutCustInput[]
    connectOrCreate?: RentHistoryCreateOrConnectWithoutCustInput | RentHistoryCreateOrConnectWithoutCustInput[]
    upsert?: RentHistoryUpsertWithWhereUniqueWithoutCustInput | RentHistoryUpsertWithWhereUniqueWithoutCustInput[]
    createMany?: RentHistoryCreateManyCustInputEnvelope
    set?: RentHistoryWhereUniqueInput | RentHistoryWhereUniqueInput[]
    disconnect?: RentHistoryWhereUniqueInput | RentHistoryWhereUniqueInput[]
    delete?: RentHistoryWhereUniqueInput | RentHistoryWhereUniqueInput[]
    connect?: RentHistoryWhereUniqueInput | RentHistoryWhereUniqueInput[]
    update?: RentHistoryUpdateWithWhereUniqueWithoutCustInput | RentHistoryUpdateWithWhereUniqueWithoutCustInput[]
    updateMany?: RentHistoryUpdateManyWithWhereWithoutCustInput | RentHistoryUpdateManyWithWhereWithoutCustInput[]
    deleteMany?: RentHistoryScalarWhereInput | RentHistoryScalarWhereInput[]
  }

  export type UserUpdateOneWithoutCreatedUsersNestedInput = {
    create?: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedUsersInput
    upsert?: UserUpsertWithoutCreatedUsersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedUsersInput, UserUpdateWithoutCreatedUsersInput>, UserUncheckedUpdateWithoutCreatedUsersInput>
  }

  export type UserUpdateManyWithoutCustNestedInput = {
    create?: XOR<UserCreateWithoutCustInput, UserUncheckedCreateWithoutCustInput> | UserCreateWithoutCustInput[] | UserUncheckedCreateWithoutCustInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCustInput | UserCreateOrConnectWithoutCustInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCustInput | UserUpsertWithWhereUniqueWithoutCustInput[]
    createMany?: UserCreateManyCustInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCustInput | UserUpdateWithWhereUniqueWithoutCustInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCustInput | UserUpdateManyWithWhereWithoutCustInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InvoiceUncheckedUpdateManyWithoutCustNestedInput = {
    create?: XOR<InvoiceCreateWithoutCustInput, InvoiceUncheckedCreateWithoutCustInput> | InvoiceCreateWithoutCustInput[] | InvoiceUncheckedCreateWithoutCustInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCustInput | InvoiceCreateOrConnectWithoutCustInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutCustInput | InvoiceUpsertWithWhereUniqueWithoutCustInput[]
    createMany?: InvoiceCreateManyCustInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutCustInput | InvoiceUpdateWithWhereUniqueWithoutCustInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutCustInput | InvoiceUpdateManyWithWhereWithoutCustInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type KeyUncheckedUpdateManyWithoutCustNestedInput = {
    create?: XOR<KeyCreateWithoutCustInput, KeyUncheckedCreateWithoutCustInput> | KeyCreateWithoutCustInput[] | KeyUncheckedCreateWithoutCustInput[]
    connectOrCreate?: KeyCreateOrConnectWithoutCustInput | KeyCreateOrConnectWithoutCustInput[]
    upsert?: KeyUpsertWithWhereUniqueWithoutCustInput | KeyUpsertWithWhereUniqueWithoutCustInput[]
    createMany?: KeyCreateManyCustInputEnvelope
    set?: KeyWhereUniqueInput | KeyWhereUniqueInput[]
    disconnect?: KeyWhereUniqueInput | KeyWhereUniqueInput[]
    delete?: KeyWhereUniqueInput | KeyWhereUniqueInput[]
    connect?: KeyWhereUniqueInput | KeyWhereUniqueInput[]
    update?: KeyUpdateWithWhereUniqueWithoutCustInput | KeyUpdateWithWhereUniqueWithoutCustInput[]
    updateMany?: KeyUpdateManyWithWhereWithoutCustInput | KeyUpdateManyWithWhereWithoutCustInput[]
    deleteMany?: KeyScalarWhereInput | KeyScalarWhereInput[]
  }

  export type LeaseContractUncheckedUpdateManyWithoutCustNestedInput = {
    create?: XOR<LeaseContractCreateWithoutCustInput, LeaseContractUncheckedCreateWithoutCustInput> | LeaseContractCreateWithoutCustInput[] | LeaseContractUncheckedCreateWithoutCustInput[]
    connectOrCreate?: LeaseContractCreateOrConnectWithoutCustInput | LeaseContractCreateOrConnectWithoutCustInput[]
    upsert?: LeaseContractUpsertWithWhereUniqueWithoutCustInput | LeaseContractUpsertWithWhereUniqueWithoutCustInput[]
    createMany?: LeaseContractCreateManyCustInputEnvelope
    set?: LeaseContractWhereUniqueInput | LeaseContractWhereUniqueInput[]
    disconnect?: LeaseContractWhereUniqueInput | LeaseContractWhereUniqueInput[]
    delete?: LeaseContractWhereUniqueInput | LeaseContractWhereUniqueInput[]
    connect?: LeaseContractWhereUniqueInput | LeaseContractWhereUniqueInput[]
    update?: LeaseContractUpdateWithWhereUniqueWithoutCustInput | LeaseContractUpdateWithWhereUniqueWithoutCustInput[]
    updateMany?: LeaseContractUpdateManyWithWhereWithoutCustInput | LeaseContractUpdateManyWithWhereWithoutCustInput[]
    deleteMany?: LeaseContractScalarWhereInput | LeaseContractScalarWhereInput[]
  }

  export type LeaseContractUncheckedUpdateManyWithoutRenterNestedInput = {
    create?: XOR<LeaseContractCreateWithoutRenterInput, LeaseContractUncheckedCreateWithoutRenterInput> | LeaseContractCreateWithoutRenterInput[] | LeaseContractUncheckedCreateWithoutRenterInput[]
    connectOrCreate?: LeaseContractCreateOrConnectWithoutRenterInput | LeaseContractCreateOrConnectWithoutRenterInput[]
    upsert?: LeaseContractUpsertWithWhereUniqueWithoutRenterInput | LeaseContractUpsertWithWhereUniqueWithoutRenterInput[]
    createMany?: LeaseContractCreateManyRenterInputEnvelope
    set?: LeaseContractWhereUniqueInput | LeaseContractWhereUniqueInput[]
    disconnect?: LeaseContractWhereUniqueInput | LeaseContractWhereUniqueInput[]
    delete?: LeaseContractWhereUniqueInput | LeaseContractWhereUniqueInput[]
    connect?: LeaseContractWhereUniqueInput | LeaseContractWhereUniqueInput[]
    update?: LeaseContractUpdateWithWhereUniqueWithoutRenterInput | LeaseContractUpdateWithWhereUniqueWithoutRenterInput[]
    updateMany?: LeaseContractUpdateManyWithWhereWithoutRenterInput | LeaseContractUpdateManyWithWhereWithoutRenterInput[]
    deleteMany?: LeaseContractScalarWhereInput | LeaseContractScalarWhereInput[]
  }

  export type LocationUncheckedUpdateManyWithoutCustNestedInput = {
    create?: XOR<LocationCreateWithoutCustInput, LocationUncheckedCreateWithoutCustInput> | LocationCreateWithoutCustInput[] | LocationUncheckedCreateWithoutCustInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutCustInput | LocationCreateOrConnectWithoutCustInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutCustInput | LocationUpsertWithWhereUniqueWithoutCustInput[]
    createMany?: LocationCreateManyCustInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutCustInput | LocationUpdateWithWhereUniqueWithoutCustInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutCustInput | LocationUpdateManyWithWhereWithoutCustInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type LocationUncheckedUpdateManyWithoutRenterNestedInput = {
    create?: XOR<LocationCreateWithoutRenterInput, LocationUncheckedCreateWithoutRenterInput> | LocationCreateWithoutRenterInput[] | LocationUncheckedCreateWithoutRenterInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutRenterInput | LocationCreateOrConnectWithoutRenterInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutRenterInput | LocationUpsertWithWhereUniqueWithoutRenterInput[]
    createMany?: LocationCreateManyRenterInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutRenterInput | LocationUpdateWithWhereUniqueWithoutRenterInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutRenterInput | LocationUpdateManyWithWhereWithoutRenterInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutCustNestedInput = {
    create?: XOR<PaymentCreateWithoutCustInput, PaymentUncheckedCreateWithoutCustInput> | PaymentCreateWithoutCustInput[] | PaymentUncheckedCreateWithoutCustInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCustInput | PaymentCreateOrConnectWithoutCustInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutCustInput | PaymentUpsertWithWhereUniqueWithoutCustInput[]
    createMany?: PaymentCreateManyCustInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutCustInput | PaymentUpdateWithWhereUniqueWithoutCustInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutCustInput | PaymentUpdateManyWithWhereWithoutCustInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentRecordUncheckedUpdateManyWithoutCustNestedInput = {
    create?: XOR<PaymentRecordCreateWithoutCustInput, PaymentRecordUncheckedCreateWithoutCustInput> | PaymentRecordCreateWithoutCustInput[] | PaymentRecordUncheckedCreateWithoutCustInput[]
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutCustInput | PaymentRecordCreateOrConnectWithoutCustInput[]
    upsert?: PaymentRecordUpsertWithWhereUniqueWithoutCustInput | PaymentRecordUpsertWithWhereUniqueWithoutCustInput[]
    createMany?: PaymentRecordCreateManyCustInputEnvelope
    set?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    disconnect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    delete?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    connect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    update?: PaymentRecordUpdateWithWhereUniqueWithoutCustInput | PaymentRecordUpdateWithWhereUniqueWithoutCustInput[]
    updateMany?: PaymentRecordUpdateManyWithWhereWithoutCustInput | PaymentRecordUpdateManyWithWhereWithoutCustInput[]
    deleteMany?: PaymentRecordScalarWhereInput | PaymentRecordScalarWhereInput[]
  }

  export type PaymentScheduleUncheckedUpdateManyWithoutCustNestedInput = {
    create?: XOR<PaymentScheduleCreateWithoutCustInput, PaymentScheduleUncheckedCreateWithoutCustInput> | PaymentScheduleCreateWithoutCustInput[] | PaymentScheduleUncheckedCreateWithoutCustInput[]
    connectOrCreate?: PaymentScheduleCreateOrConnectWithoutCustInput | PaymentScheduleCreateOrConnectWithoutCustInput[]
    upsert?: PaymentScheduleUpsertWithWhereUniqueWithoutCustInput | PaymentScheduleUpsertWithWhereUniqueWithoutCustInput[]
    createMany?: PaymentScheduleCreateManyCustInputEnvelope
    set?: PaymentScheduleWhereUniqueInput | PaymentScheduleWhereUniqueInput[]
    disconnect?: PaymentScheduleWhereUniqueInput | PaymentScheduleWhereUniqueInput[]
    delete?: PaymentScheduleWhereUniqueInput | PaymentScheduleWhereUniqueInput[]
    connect?: PaymentScheduleWhereUniqueInput | PaymentScheduleWhereUniqueInput[]
    update?: PaymentScheduleUpdateWithWhereUniqueWithoutCustInput | PaymentScheduleUpdateWithWhereUniqueWithoutCustInput[]
    updateMany?: PaymentScheduleUpdateManyWithWhereWithoutCustInput | PaymentScheduleUpdateManyWithWhereWithoutCustInput[]
    deleteMany?: PaymentScheduleScalarWhereInput | PaymentScheduleScalarWhereInput[]
  }

  export type PriceAdjustmentUncheckedUpdateManyWithoutCustNestedInput = {
    create?: XOR<PriceAdjustmentCreateWithoutCustInput, PriceAdjustmentUncheckedCreateWithoutCustInput> | PriceAdjustmentCreateWithoutCustInput[] | PriceAdjustmentUncheckedCreateWithoutCustInput[]
    connectOrCreate?: PriceAdjustmentCreateOrConnectWithoutCustInput | PriceAdjustmentCreateOrConnectWithoutCustInput[]
    upsert?: PriceAdjustmentUpsertWithWhereUniqueWithoutCustInput | PriceAdjustmentUpsertWithWhereUniqueWithoutCustInput[]
    createMany?: PriceAdjustmentCreateManyCustInputEnvelope
    set?: PriceAdjustmentWhereUniqueInput | PriceAdjustmentWhereUniqueInput[]
    disconnect?: PriceAdjustmentWhereUniqueInput | PriceAdjustmentWhereUniqueInput[]
    delete?: PriceAdjustmentWhereUniqueInput | PriceAdjustmentWhereUniqueInput[]
    connect?: PriceAdjustmentWhereUniqueInput | PriceAdjustmentWhereUniqueInput[]
    update?: PriceAdjustmentUpdateWithWhereUniqueWithoutCustInput | PriceAdjustmentUpdateWithWhereUniqueWithoutCustInput[]
    updateMany?: PriceAdjustmentUpdateManyWithWhereWithoutCustInput | PriceAdjustmentUpdateManyWithWhereWithoutCustInput[]
    deleteMany?: PriceAdjustmentScalarWhereInput | PriceAdjustmentScalarWhereInput[]
  }

  export type RentHistoryUncheckedUpdateManyWithoutCustNestedInput = {
    create?: XOR<RentHistoryCreateWithoutCustInput, RentHistoryUncheckedCreateWithoutCustInput> | RentHistoryCreateWithoutCustInput[] | RentHistoryUncheckedCreateWithoutCustInput[]
    connectOrCreate?: RentHistoryCreateOrConnectWithoutCustInput | RentHistoryCreateOrConnectWithoutCustInput[]
    upsert?: RentHistoryUpsertWithWhereUniqueWithoutCustInput | RentHistoryUpsertWithWhereUniqueWithoutCustInput[]
    createMany?: RentHistoryCreateManyCustInputEnvelope
    set?: RentHistoryWhereUniqueInput | RentHistoryWhereUniqueInput[]
    disconnect?: RentHistoryWhereUniqueInput | RentHistoryWhereUniqueInput[]
    delete?: RentHistoryWhereUniqueInput | RentHistoryWhereUniqueInput[]
    connect?: RentHistoryWhereUniqueInput | RentHistoryWhereUniqueInput[]
    update?: RentHistoryUpdateWithWhereUniqueWithoutCustInput | RentHistoryUpdateWithWhereUniqueWithoutCustInput[]
    updateMany?: RentHistoryUpdateManyWithWhereWithoutCustInput | RentHistoryUpdateManyWithWhereWithoutCustInput[]
    deleteMany?: RentHistoryScalarWhereInput | RentHistoryScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCustNestedInput = {
    create?: XOR<UserCreateWithoutCustInput, UserUncheckedCreateWithoutCustInput> | UserCreateWithoutCustInput[] | UserUncheckedCreateWithoutCustInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCustInput | UserCreateOrConnectWithoutCustInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCustInput | UserUpsertWithWhereUniqueWithoutCustInput[]
    createMany?: UserCreateManyCustInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCustInput | UserUpdateWithWhereUniqueWithoutCustInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCustInput | UserUpdateManyWithWhereWithoutCustInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type AdjustmentLocationCreateNestedManyWithoutLocationInput = {
    create?: XOR<AdjustmentLocationCreateWithoutLocationInput, AdjustmentLocationUncheckedCreateWithoutLocationInput> | AdjustmentLocationCreateWithoutLocationInput[] | AdjustmentLocationUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: AdjustmentLocationCreateOrConnectWithoutLocationInput | AdjustmentLocationCreateOrConnectWithoutLocationInput[]
    createMany?: AdjustmentLocationCreateManyLocationInputEnvelope
    connect?: AdjustmentLocationWhereUniqueInput | AdjustmentLocationWhereUniqueInput[]
  }

  export type InvoiceCreateNestedManyWithoutLocationInput = {
    create?: XOR<InvoiceCreateWithoutLocationInput, InvoiceUncheckedCreateWithoutLocationInput> | InvoiceCreateWithoutLocationInput[] | InvoiceUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutLocationInput | InvoiceCreateOrConnectWithoutLocationInput[]
    createMany?: InvoiceCreateManyLocationInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type KeyCreateNestedManyWithoutLocationInput = {
    create?: XOR<KeyCreateWithoutLocationInput, KeyUncheckedCreateWithoutLocationInput> | KeyCreateWithoutLocationInput[] | KeyUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: KeyCreateOrConnectWithoutLocationInput | KeyCreateOrConnectWithoutLocationInput[]
    createMany?: KeyCreateManyLocationInputEnvelope
    connect?: KeyWhereUniqueInput | KeyWhereUniqueInput[]
  }

  export type LeaseContractCreateNestedManyWithoutLocationInput = {
    create?: XOR<LeaseContractCreateWithoutLocationInput, LeaseContractUncheckedCreateWithoutLocationInput> | LeaseContractCreateWithoutLocationInput[] | LeaseContractUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: LeaseContractCreateOrConnectWithoutLocationInput | LeaseContractCreateOrConnectWithoutLocationInput[]
    createMany?: LeaseContractCreateManyLocationInputEnvelope
    connect?: LeaseContractWhereUniqueInput | LeaseContractWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutLocationInput = {
    create?: XOR<UserCreateWithoutLocationInput, UserUncheckedCreateWithoutLocationInput>
    connectOrCreate?: UserCreateOrConnectWithoutLocationInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRentedLocationsInput = {
    create?: XOR<UserCreateWithoutRentedLocationsInput, UserUncheckedCreateWithoutRentedLocationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRentedLocationsInput
    connect?: UserWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutLocationInput = {
    create?: XOR<PaymentCreateWithoutLocationInput, PaymentUncheckedCreateWithoutLocationInput> | PaymentCreateWithoutLocationInput[] | PaymentUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutLocationInput | PaymentCreateOrConnectWithoutLocationInput[]
    createMany?: PaymentCreateManyLocationInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentRecordCreateNestedManyWithoutLocationInput = {
    create?: XOR<PaymentRecordCreateWithoutLocationInput, PaymentRecordUncheckedCreateWithoutLocationInput> | PaymentRecordCreateWithoutLocationInput[] | PaymentRecordUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutLocationInput | PaymentRecordCreateOrConnectWithoutLocationInput[]
    createMany?: PaymentRecordCreateManyLocationInputEnvelope
    connect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
  }

  export type PaymentScheduleCreateNestedManyWithoutLocationInput = {
    create?: XOR<PaymentScheduleCreateWithoutLocationInput, PaymentScheduleUncheckedCreateWithoutLocationInput> | PaymentScheduleCreateWithoutLocationInput[] | PaymentScheduleUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: PaymentScheduleCreateOrConnectWithoutLocationInput | PaymentScheduleCreateOrConnectWithoutLocationInput[]
    createMany?: PaymentScheduleCreateManyLocationInputEnvelope
    connect?: PaymentScheduleWhereUniqueInput | PaymentScheduleWhereUniqueInput[]
  }

  export type RentHistoryCreateNestedManyWithoutLocationInput = {
    create?: XOR<RentHistoryCreateWithoutLocationInput, RentHistoryUncheckedCreateWithoutLocationInput> | RentHistoryCreateWithoutLocationInput[] | RentHistoryUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: RentHistoryCreateOrConnectWithoutLocationInput | RentHistoryCreateOrConnectWithoutLocationInput[]
    createMany?: RentHistoryCreateManyLocationInputEnvelope
    connect?: RentHistoryWhereUniqueInput | RentHistoryWhereUniqueInput[]
  }

  export type PriceAdjustmentCreateNestedManyWithoutLocationsInput = {
    create?: XOR<PriceAdjustmentCreateWithoutLocationsInput, PriceAdjustmentUncheckedCreateWithoutLocationsInput> | PriceAdjustmentCreateWithoutLocationsInput[] | PriceAdjustmentUncheckedCreateWithoutLocationsInput[]
    connectOrCreate?: PriceAdjustmentCreateOrConnectWithoutLocationsInput | PriceAdjustmentCreateOrConnectWithoutLocationsInput[]
    connect?: PriceAdjustmentWhereUniqueInput | PriceAdjustmentWhereUniqueInput[]
  }

  export type AdjustmentLocationUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<AdjustmentLocationCreateWithoutLocationInput, AdjustmentLocationUncheckedCreateWithoutLocationInput> | AdjustmentLocationCreateWithoutLocationInput[] | AdjustmentLocationUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: AdjustmentLocationCreateOrConnectWithoutLocationInput | AdjustmentLocationCreateOrConnectWithoutLocationInput[]
    createMany?: AdjustmentLocationCreateManyLocationInputEnvelope
    connect?: AdjustmentLocationWhereUniqueInput | AdjustmentLocationWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<InvoiceCreateWithoutLocationInput, InvoiceUncheckedCreateWithoutLocationInput> | InvoiceCreateWithoutLocationInput[] | InvoiceUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutLocationInput | InvoiceCreateOrConnectWithoutLocationInput[]
    createMany?: InvoiceCreateManyLocationInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type KeyUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<KeyCreateWithoutLocationInput, KeyUncheckedCreateWithoutLocationInput> | KeyCreateWithoutLocationInput[] | KeyUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: KeyCreateOrConnectWithoutLocationInput | KeyCreateOrConnectWithoutLocationInput[]
    createMany?: KeyCreateManyLocationInputEnvelope
    connect?: KeyWhereUniqueInput | KeyWhereUniqueInput[]
  }

  export type LeaseContractUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<LeaseContractCreateWithoutLocationInput, LeaseContractUncheckedCreateWithoutLocationInput> | LeaseContractCreateWithoutLocationInput[] | LeaseContractUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: LeaseContractCreateOrConnectWithoutLocationInput | LeaseContractCreateOrConnectWithoutLocationInput[]
    createMany?: LeaseContractCreateManyLocationInputEnvelope
    connect?: LeaseContractWhereUniqueInput | LeaseContractWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<PaymentCreateWithoutLocationInput, PaymentUncheckedCreateWithoutLocationInput> | PaymentCreateWithoutLocationInput[] | PaymentUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutLocationInput | PaymentCreateOrConnectWithoutLocationInput[]
    createMany?: PaymentCreateManyLocationInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentRecordUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<PaymentRecordCreateWithoutLocationInput, PaymentRecordUncheckedCreateWithoutLocationInput> | PaymentRecordCreateWithoutLocationInput[] | PaymentRecordUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutLocationInput | PaymentRecordCreateOrConnectWithoutLocationInput[]
    createMany?: PaymentRecordCreateManyLocationInputEnvelope
    connect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
  }

  export type PaymentScheduleUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<PaymentScheduleCreateWithoutLocationInput, PaymentScheduleUncheckedCreateWithoutLocationInput> | PaymentScheduleCreateWithoutLocationInput[] | PaymentScheduleUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: PaymentScheduleCreateOrConnectWithoutLocationInput | PaymentScheduleCreateOrConnectWithoutLocationInput[]
    createMany?: PaymentScheduleCreateManyLocationInputEnvelope
    connect?: PaymentScheduleWhereUniqueInput | PaymentScheduleWhereUniqueInput[]
  }

  export type RentHistoryUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<RentHistoryCreateWithoutLocationInput, RentHistoryUncheckedCreateWithoutLocationInput> | RentHistoryCreateWithoutLocationInput[] | RentHistoryUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: RentHistoryCreateOrConnectWithoutLocationInput | RentHistoryCreateOrConnectWithoutLocationInput[]
    createMany?: RentHistoryCreateManyLocationInputEnvelope
    connect?: RentHistoryWhereUniqueInput | RentHistoryWhereUniqueInput[]
  }

  export type PriceAdjustmentUncheckedCreateNestedManyWithoutLocationsInput = {
    create?: XOR<PriceAdjustmentCreateWithoutLocationsInput, PriceAdjustmentUncheckedCreateWithoutLocationsInput> | PriceAdjustmentCreateWithoutLocationsInput[] | PriceAdjustmentUncheckedCreateWithoutLocationsInput[]
    connectOrCreate?: PriceAdjustmentCreateOrConnectWithoutLocationsInput | PriceAdjustmentCreateOrConnectWithoutLocationsInput[]
    connect?: PriceAdjustmentWhereUniqueInput | PriceAdjustmentWhereUniqueInput[]
  }

  export type AdjustmentLocationUpdateManyWithoutLocationNestedInput = {
    create?: XOR<AdjustmentLocationCreateWithoutLocationInput, AdjustmentLocationUncheckedCreateWithoutLocationInput> | AdjustmentLocationCreateWithoutLocationInput[] | AdjustmentLocationUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: AdjustmentLocationCreateOrConnectWithoutLocationInput | AdjustmentLocationCreateOrConnectWithoutLocationInput[]
    upsert?: AdjustmentLocationUpsertWithWhereUniqueWithoutLocationInput | AdjustmentLocationUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: AdjustmentLocationCreateManyLocationInputEnvelope
    set?: AdjustmentLocationWhereUniqueInput | AdjustmentLocationWhereUniqueInput[]
    disconnect?: AdjustmentLocationWhereUniqueInput | AdjustmentLocationWhereUniqueInput[]
    delete?: AdjustmentLocationWhereUniqueInput | AdjustmentLocationWhereUniqueInput[]
    connect?: AdjustmentLocationWhereUniqueInput | AdjustmentLocationWhereUniqueInput[]
    update?: AdjustmentLocationUpdateWithWhereUniqueWithoutLocationInput | AdjustmentLocationUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: AdjustmentLocationUpdateManyWithWhereWithoutLocationInput | AdjustmentLocationUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: AdjustmentLocationScalarWhereInput | AdjustmentLocationScalarWhereInput[]
  }

  export type InvoiceUpdateManyWithoutLocationNestedInput = {
    create?: XOR<InvoiceCreateWithoutLocationInput, InvoiceUncheckedCreateWithoutLocationInput> | InvoiceCreateWithoutLocationInput[] | InvoiceUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutLocationInput | InvoiceCreateOrConnectWithoutLocationInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutLocationInput | InvoiceUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: InvoiceCreateManyLocationInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutLocationInput | InvoiceUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutLocationInput | InvoiceUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type KeyUpdateManyWithoutLocationNestedInput = {
    create?: XOR<KeyCreateWithoutLocationInput, KeyUncheckedCreateWithoutLocationInput> | KeyCreateWithoutLocationInput[] | KeyUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: KeyCreateOrConnectWithoutLocationInput | KeyCreateOrConnectWithoutLocationInput[]
    upsert?: KeyUpsertWithWhereUniqueWithoutLocationInput | KeyUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: KeyCreateManyLocationInputEnvelope
    set?: KeyWhereUniqueInput | KeyWhereUniqueInput[]
    disconnect?: KeyWhereUniqueInput | KeyWhereUniqueInput[]
    delete?: KeyWhereUniqueInput | KeyWhereUniqueInput[]
    connect?: KeyWhereUniqueInput | KeyWhereUniqueInput[]
    update?: KeyUpdateWithWhereUniqueWithoutLocationInput | KeyUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: KeyUpdateManyWithWhereWithoutLocationInput | KeyUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: KeyScalarWhereInput | KeyScalarWhereInput[]
  }

  export type LeaseContractUpdateManyWithoutLocationNestedInput = {
    create?: XOR<LeaseContractCreateWithoutLocationInput, LeaseContractUncheckedCreateWithoutLocationInput> | LeaseContractCreateWithoutLocationInput[] | LeaseContractUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: LeaseContractCreateOrConnectWithoutLocationInput | LeaseContractCreateOrConnectWithoutLocationInput[]
    upsert?: LeaseContractUpsertWithWhereUniqueWithoutLocationInput | LeaseContractUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: LeaseContractCreateManyLocationInputEnvelope
    set?: LeaseContractWhereUniqueInput | LeaseContractWhereUniqueInput[]
    disconnect?: LeaseContractWhereUniqueInput | LeaseContractWhereUniqueInput[]
    delete?: LeaseContractWhereUniqueInput | LeaseContractWhereUniqueInput[]
    connect?: LeaseContractWhereUniqueInput | LeaseContractWhereUniqueInput[]
    update?: LeaseContractUpdateWithWhereUniqueWithoutLocationInput | LeaseContractUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: LeaseContractUpdateManyWithWhereWithoutLocationInput | LeaseContractUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: LeaseContractScalarWhereInput | LeaseContractScalarWhereInput[]
  }

  export type UserUpdateOneWithoutLocationNestedInput = {
    create?: XOR<UserCreateWithoutLocationInput, UserUncheckedCreateWithoutLocationInput>
    connectOrCreate?: UserCreateOrConnectWithoutLocationInput
    upsert?: UserUpsertWithoutLocationInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLocationInput, UserUpdateWithoutLocationInput>, UserUncheckedUpdateWithoutLocationInput>
  }

  export type UserUpdateOneRequiredWithoutRentedLocationsNestedInput = {
    create?: XOR<UserCreateWithoutRentedLocationsInput, UserUncheckedCreateWithoutRentedLocationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRentedLocationsInput
    upsert?: UserUpsertWithoutRentedLocationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRentedLocationsInput, UserUpdateWithoutRentedLocationsInput>, UserUncheckedUpdateWithoutRentedLocationsInput>
  }

  export type PaymentUpdateManyWithoutLocationNestedInput = {
    create?: XOR<PaymentCreateWithoutLocationInput, PaymentUncheckedCreateWithoutLocationInput> | PaymentCreateWithoutLocationInput[] | PaymentUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutLocationInput | PaymentCreateOrConnectWithoutLocationInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutLocationInput | PaymentUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: PaymentCreateManyLocationInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutLocationInput | PaymentUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutLocationInput | PaymentUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentRecordUpdateManyWithoutLocationNestedInput = {
    create?: XOR<PaymentRecordCreateWithoutLocationInput, PaymentRecordUncheckedCreateWithoutLocationInput> | PaymentRecordCreateWithoutLocationInput[] | PaymentRecordUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutLocationInput | PaymentRecordCreateOrConnectWithoutLocationInput[]
    upsert?: PaymentRecordUpsertWithWhereUniqueWithoutLocationInput | PaymentRecordUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: PaymentRecordCreateManyLocationInputEnvelope
    set?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    disconnect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    delete?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    connect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    update?: PaymentRecordUpdateWithWhereUniqueWithoutLocationInput | PaymentRecordUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: PaymentRecordUpdateManyWithWhereWithoutLocationInput | PaymentRecordUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: PaymentRecordScalarWhereInput | PaymentRecordScalarWhereInput[]
  }

  export type PaymentScheduleUpdateManyWithoutLocationNestedInput = {
    create?: XOR<PaymentScheduleCreateWithoutLocationInput, PaymentScheduleUncheckedCreateWithoutLocationInput> | PaymentScheduleCreateWithoutLocationInput[] | PaymentScheduleUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: PaymentScheduleCreateOrConnectWithoutLocationInput | PaymentScheduleCreateOrConnectWithoutLocationInput[]
    upsert?: PaymentScheduleUpsertWithWhereUniqueWithoutLocationInput | PaymentScheduleUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: PaymentScheduleCreateManyLocationInputEnvelope
    set?: PaymentScheduleWhereUniqueInput | PaymentScheduleWhereUniqueInput[]
    disconnect?: PaymentScheduleWhereUniqueInput | PaymentScheduleWhereUniqueInput[]
    delete?: PaymentScheduleWhereUniqueInput | PaymentScheduleWhereUniqueInput[]
    connect?: PaymentScheduleWhereUniqueInput | PaymentScheduleWhereUniqueInput[]
    update?: PaymentScheduleUpdateWithWhereUniqueWithoutLocationInput | PaymentScheduleUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: PaymentScheduleUpdateManyWithWhereWithoutLocationInput | PaymentScheduleUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: PaymentScheduleScalarWhereInput | PaymentScheduleScalarWhereInput[]
  }

  export type RentHistoryUpdateManyWithoutLocationNestedInput = {
    create?: XOR<RentHistoryCreateWithoutLocationInput, RentHistoryUncheckedCreateWithoutLocationInput> | RentHistoryCreateWithoutLocationInput[] | RentHistoryUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: RentHistoryCreateOrConnectWithoutLocationInput | RentHistoryCreateOrConnectWithoutLocationInput[]
    upsert?: RentHistoryUpsertWithWhereUniqueWithoutLocationInput | RentHistoryUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: RentHistoryCreateManyLocationInputEnvelope
    set?: RentHistoryWhereUniqueInput | RentHistoryWhereUniqueInput[]
    disconnect?: RentHistoryWhereUniqueInput | RentHistoryWhereUniqueInput[]
    delete?: RentHistoryWhereUniqueInput | RentHistoryWhereUniqueInput[]
    connect?: RentHistoryWhereUniqueInput | RentHistoryWhereUniqueInput[]
    update?: RentHistoryUpdateWithWhereUniqueWithoutLocationInput | RentHistoryUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: RentHistoryUpdateManyWithWhereWithoutLocationInput | RentHistoryUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: RentHistoryScalarWhereInput | RentHistoryScalarWhereInput[]
  }

  export type PriceAdjustmentUpdateManyWithoutLocationsNestedInput = {
    create?: XOR<PriceAdjustmentCreateWithoutLocationsInput, PriceAdjustmentUncheckedCreateWithoutLocationsInput> | PriceAdjustmentCreateWithoutLocationsInput[] | PriceAdjustmentUncheckedCreateWithoutLocationsInput[]
    connectOrCreate?: PriceAdjustmentCreateOrConnectWithoutLocationsInput | PriceAdjustmentCreateOrConnectWithoutLocationsInput[]
    upsert?: PriceAdjustmentUpsertWithWhereUniqueWithoutLocationsInput | PriceAdjustmentUpsertWithWhereUniqueWithoutLocationsInput[]
    set?: PriceAdjustmentWhereUniqueInput | PriceAdjustmentWhereUniqueInput[]
    disconnect?: PriceAdjustmentWhereUniqueInput | PriceAdjustmentWhereUniqueInput[]
    delete?: PriceAdjustmentWhereUniqueInput | PriceAdjustmentWhereUniqueInput[]
    connect?: PriceAdjustmentWhereUniqueInput | PriceAdjustmentWhereUniqueInput[]
    update?: PriceAdjustmentUpdateWithWhereUniqueWithoutLocationsInput | PriceAdjustmentUpdateWithWhereUniqueWithoutLocationsInput[]
    updateMany?: PriceAdjustmentUpdateManyWithWhereWithoutLocationsInput | PriceAdjustmentUpdateManyWithWhereWithoutLocationsInput[]
    deleteMany?: PriceAdjustmentScalarWhereInput | PriceAdjustmentScalarWhereInput[]
  }

  export type AdjustmentLocationUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<AdjustmentLocationCreateWithoutLocationInput, AdjustmentLocationUncheckedCreateWithoutLocationInput> | AdjustmentLocationCreateWithoutLocationInput[] | AdjustmentLocationUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: AdjustmentLocationCreateOrConnectWithoutLocationInput | AdjustmentLocationCreateOrConnectWithoutLocationInput[]
    upsert?: AdjustmentLocationUpsertWithWhereUniqueWithoutLocationInput | AdjustmentLocationUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: AdjustmentLocationCreateManyLocationInputEnvelope
    set?: AdjustmentLocationWhereUniqueInput | AdjustmentLocationWhereUniqueInput[]
    disconnect?: AdjustmentLocationWhereUniqueInput | AdjustmentLocationWhereUniqueInput[]
    delete?: AdjustmentLocationWhereUniqueInput | AdjustmentLocationWhereUniqueInput[]
    connect?: AdjustmentLocationWhereUniqueInput | AdjustmentLocationWhereUniqueInput[]
    update?: AdjustmentLocationUpdateWithWhereUniqueWithoutLocationInput | AdjustmentLocationUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: AdjustmentLocationUpdateManyWithWhereWithoutLocationInput | AdjustmentLocationUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: AdjustmentLocationScalarWhereInput | AdjustmentLocationScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<InvoiceCreateWithoutLocationInput, InvoiceUncheckedCreateWithoutLocationInput> | InvoiceCreateWithoutLocationInput[] | InvoiceUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutLocationInput | InvoiceCreateOrConnectWithoutLocationInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutLocationInput | InvoiceUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: InvoiceCreateManyLocationInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutLocationInput | InvoiceUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutLocationInput | InvoiceUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type KeyUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<KeyCreateWithoutLocationInput, KeyUncheckedCreateWithoutLocationInput> | KeyCreateWithoutLocationInput[] | KeyUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: KeyCreateOrConnectWithoutLocationInput | KeyCreateOrConnectWithoutLocationInput[]
    upsert?: KeyUpsertWithWhereUniqueWithoutLocationInput | KeyUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: KeyCreateManyLocationInputEnvelope
    set?: KeyWhereUniqueInput | KeyWhereUniqueInput[]
    disconnect?: KeyWhereUniqueInput | KeyWhereUniqueInput[]
    delete?: KeyWhereUniqueInput | KeyWhereUniqueInput[]
    connect?: KeyWhereUniqueInput | KeyWhereUniqueInput[]
    update?: KeyUpdateWithWhereUniqueWithoutLocationInput | KeyUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: KeyUpdateManyWithWhereWithoutLocationInput | KeyUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: KeyScalarWhereInput | KeyScalarWhereInput[]
  }

  export type LeaseContractUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<LeaseContractCreateWithoutLocationInput, LeaseContractUncheckedCreateWithoutLocationInput> | LeaseContractCreateWithoutLocationInput[] | LeaseContractUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: LeaseContractCreateOrConnectWithoutLocationInput | LeaseContractCreateOrConnectWithoutLocationInput[]
    upsert?: LeaseContractUpsertWithWhereUniqueWithoutLocationInput | LeaseContractUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: LeaseContractCreateManyLocationInputEnvelope
    set?: LeaseContractWhereUniqueInput | LeaseContractWhereUniqueInput[]
    disconnect?: LeaseContractWhereUniqueInput | LeaseContractWhereUniqueInput[]
    delete?: LeaseContractWhereUniqueInput | LeaseContractWhereUniqueInput[]
    connect?: LeaseContractWhereUniqueInput | LeaseContractWhereUniqueInput[]
    update?: LeaseContractUpdateWithWhereUniqueWithoutLocationInput | LeaseContractUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: LeaseContractUpdateManyWithWhereWithoutLocationInput | LeaseContractUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: LeaseContractScalarWhereInput | LeaseContractScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<PaymentCreateWithoutLocationInput, PaymentUncheckedCreateWithoutLocationInput> | PaymentCreateWithoutLocationInput[] | PaymentUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutLocationInput | PaymentCreateOrConnectWithoutLocationInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutLocationInput | PaymentUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: PaymentCreateManyLocationInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutLocationInput | PaymentUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutLocationInput | PaymentUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentRecordUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<PaymentRecordCreateWithoutLocationInput, PaymentRecordUncheckedCreateWithoutLocationInput> | PaymentRecordCreateWithoutLocationInput[] | PaymentRecordUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutLocationInput | PaymentRecordCreateOrConnectWithoutLocationInput[]
    upsert?: PaymentRecordUpsertWithWhereUniqueWithoutLocationInput | PaymentRecordUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: PaymentRecordCreateManyLocationInputEnvelope
    set?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    disconnect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    delete?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    connect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    update?: PaymentRecordUpdateWithWhereUniqueWithoutLocationInput | PaymentRecordUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: PaymentRecordUpdateManyWithWhereWithoutLocationInput | PaymentRecordUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: PaymentRecordScalarWhereInput | PaymentRecordScalarWhereInput[]
  }

  export type PaymentScheduleUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<PaymentScheduleCreateWithoutLocationInput, PaymentScheduleUncheckedCreateWithoutLocationInput> | PaymentScheduleCreateWithoutLocationInput[] | PaymentScheduleUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: PaymentScheduleCreateOrConnectWithoutLocationInput | PaymentScheduleCreateOrConnectWithoutLocationInput[]
    upsert?: PaymentScheduleUpsertWithWhereUniqueWithoutLocationInput | PaymentScheduleUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: PaymentScheduleCreateManyLocationInputEnvelope
    set?: PaymentScheduleWhereUniqueInput | PaymentScheduleWhereUniqueInput[]
    disconnect?: PaymentScheduleWhereUniqueInput | PaymentScheduleWhereUniqueInput[]
    delete?: PaymentScheduleWhereUniqueInput | PaymentScheduleWhereUniqueInput[]
    connect?: PaymentScheduleWhereUniqueInput | PaymentScheduleWhereUniqueInput[]
    update?: PaymentScheduleUpdateWithWhereUniqueWithoutLocationInput | PaymentScheduleUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: PaymentScheduleUpdateManyWithWhereWithoutLocationInput | PaymentScheduleUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: PaymentScheduleScalarWhereInput | PaymentScheduleScalarWhereInput[]
  }

  export type RentHistoryUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<RentHistoryCreateWithoutLocationInput, RentHistoryUncheckedCreateWithoutLocationInput> | RentHistoryCreateWithoutLocationInput[] | RentHistoryUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: RentHistoryCreateOrConnectWithoutLocationInput | RentHistoryCreateOrConnectWithoutLocationInput[]
    upsert?: RentHistoryUpsertWithWhereUniqueWithoutLocationInput | RentHistoryUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: RentHistoryCreateManyLocationInputEnvelope
    set?: RentHistoryWhereUniqueInput | RentHistoryWhereUniqueInput[]
    disconnect?: RentHistoryWhereUniqueInput | RentHistoryWhereUniqueInput[]
    delete?: RentHistoryWhereUniqueInput | RentHistoryWhereUniqueInput[]
    connect?: RentHistoryWhereUniqueInput | RentHistoryWhereUniqueInput[]
    update?: RentHistoryUpdateWithWhereUniqueWithoutLocationInput | RentHistoryUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: RentHistoryUpdateManyWithWhereWithoutLocationInput | RentHistoryUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: RentHistoryScalarWhereInput | RentHistoryScalarWhereInput[]
  }

  export type PriceAdjustmentUncheckedUpdateManyWithoutLocationsNestedInput = {
    create?: XOR<PriceAdjustmentCreateWithoutLocationsInput, PriceAdjustmentUncheckedCreateWithoutLocationsInput> | PriceAdjustmentCreateWithoutLocationsInput[] | PriceAdjustmentUncheckedCreateWithoutLocationsInput[]
    connectOrCreate?: PriceAdjustmentCreateOrConnectWithoutLocationsInput | PriceAdjustmentCreateOrConnectWithoutLocationsInput[]
    upsert?: PriceAdjustmentUpsertWithWhereUniqueWithoutLocationsInput | PriceAdjustmentUpsertWithWhereUniqueWithoutLocationsInput[]
    set?: PriceAdjustmentWhereUniqueInput | PriceAdjustmentWhereUniqueInput[]
    disconnect?: PriceAdjustmentWhereUniqueInput | PriceAdjustmentWhereUniqueInput[]
    delete?: PriceAdjustmentWhereUniqueInput | PriceAdjustmentWhereUniqueInput[]
    connect?: PriceAdjustmentWhereUniqueInput | PriceAdjustmentWhereUniqueInput[]
    update?: PriceAdjustmentUpdateWithWhereUniqueWithoutLocationsInput | PriceAdjustmentUpdateWithWhereUniqueWithoutLocationsInput[]
    updateMany?: PriceAdjustmentUpdateManyWithWhereWithoutLocationsInput | PriceAdjustmentUpdateManyWithWhereWithoutLocationsInput[]
    deleteMany?: PriceAdjustmentScalarWhereInput | PriceAdjustmentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLeaseContractsAsCustInput = {
    create?: XOR<UserCreateWithoutLeaseContractsAsCustInput, UserUncheckedCreateWithoutLeaseContractsAsCustInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeaseContractsAsCustInput
    connect?: UserWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutContractsInput = {
    create?: XOR<LocationCreateWithoutContractsInput, LocationUncheckedCreateWithoutContractsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutContractsInput
    connect?: LocationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLeaseContractsAsRenterInput = {
    create?: XOR<UserCreateWithoutLeaseContractsAsRenterInput, UserUncheckedCreateWithoutLeaseContractsAsRenterInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeaseContractsAsRenterInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutLeaseContractsAsCustNestedInput = {
    create?: XOR<UserCreateWithoutLeaseContractsAsCustInput, UserUncheckedCreateWithoutLeaseContractsAsCustInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeaseContractsAsCustInput
    upsert?: UserUpsertWithoutLeaseContractsAsCustInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLeaseContractsAsCustInput, UserUpdateWithoutLeaseContractsAsCustInput>, UserUncheckedUpdateWithoutLeaseContractsAsCustInput>
  }

  export type LocationUpdateOneRequiredWithoutContractsNestedInput = {
    create?: XOR<LocationCreateWithoutContractsInput, LocationUncheckedCreateWithoutContractsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutContractsInput
    upsert?: LocationUpsertWithoutContractsInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutContractsInput, LocationUpdateWithoutContractsInput>, LocationUncheckedUpdateWithoutContractsInput>
  }

  export type UserUpdateOneRequiredWithoutLeaseContractsAsRenterNestedInput = {
    create?: XOR<UserCreateWithoutLeaseContractsAsRenterInput, UserUncheckedCreateWithoutLeaseContractsAsRenterInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeaseContractsAsRenterInput
    upsert?: UserUpsertWithoutLeaseContractsAsRenterInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLeaseContractsAsRenterInput, UserUpdateWithoutLeaseContractsAsRenterInput>, UserUncheckedUpdateWithoutLeaseContractsAsRenterInput>
  }

  export type UserCreateNestedOneWithoutKeysInput = {
    create?: XOR<UserCreateWithoutKeysInput, UserUncheckedCreateWithoutKeysInput>
    connectOrCreate?: UserCreateOrConnectWithoutKeysInput
    connect?: UserWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutKeysInput = {
    create?: XOR<LocationCreateWithoutKeysInput, LocationUncheckedCreateWithoutKeysInput>
    connectOrCreate?: LocationCreateOrConnectWithoutKeysInput
    connect?: LocationWhereUniqueInput
  }

  export type UserUpdateOneWithoutKeysNestedInput = {
    create?: XOR<UserCreateWithoutKeysInput, UserUncheckedCreateWithoutKeysInput>
    connectOrCreate?: UserCreateOrConnectWithoutKeysInput
    upsert?: UserUpsertWithoutKeysInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutKeysInput, UserUpdateWithoutKeysInput>, UserUncheckedUpdateWithoutKeysInput>
  }

  export type LocationUpdateOneRequiredWithoutKeysNestedInput = {
    create?: XOR<LocationCreateWithoutKeysInput, LocationUncheckedCreateWithoutKeysInput>
    connectOrCreate?: LocationCreateOrConnectWithoutKeysInput
    upsert?: LocationUpsertWithoutKeysInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutKeysInput, LocationUpdateWithoutKeysInput>, LocationUncheckedUpdateWithoutKeysInput>
  }

  export type AdjustmentLocationCreateNestedManyWithoutPriceAdjustmentInput = {
    create?: XOR<AdjustmentLocationCreateWithoutPriceAdjustmentInput, AdjustmentLocationUncheckedCreateWithoutPriceAdjustmentInput> | AdjustmentLocationCreateWithoutPriceAdjustmentInput[] | AdjustmentLocationUncheckedCreateWithoutPriceAdjustmentInput[]
    connectOrCreate?: AdjustmentLocationCreateOrConnectWithoutPriceAdjustmentInput | AdjustmentLocationCreateOrConnectWithoutPriceAdjustmentInput[]
    createMany?: AdjustmentLocationCreateManyPriceAdjustmentInputEnvelope
    connect?: AdjustmentLocationWhereUniqueInput | AdjustmentLocationWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPriceAdjustmentsInput = {
    create?: XOR<UserCreateWithoutPriceAdjustmentsInput, UserUncheckedCreateWithoutPriceAdjustmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPriceAdjustmentsInput
    connect?: UserWhereUniqueInput
  }

  export type LocationCreateNestedManyWithoutAdjustmentsInput = {
    create?: XOR<LocationCreateWithoutAdjustmentsInput, LocationUncheckedCreateWithoutAdjustmentsInput> | LocationCreateWithoutAdjustmentsInput[] | LocationUncheckedCreateWithoutAdjustmentsInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutAdjustmentsInput | LocationCreateOrConnectWithoutAdjustmentsInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type AdjustmentLocationUncheckedCreateNestedManyWithoutPriceAdjustmentInput = {
    create?: XOR<AdjustmentLocationCreateWithoutPriceAdjustmentInput, AdjustmentLocationUncheckedCreateWithoutPriceAdjustmentInput> | AdjustmentLocationCreateWithoutPriceAdjustmentInput[] | AdjustmentLocationUncheckedCreateWithoutPriceAdjustmentInput[]
    connectOrCreate?: AdjustmentLocationCreateOrConnectWithoutPriceAdjustmentInput | AdjustmentLocationCreateOrConnectWithoutPriceAdjustmentInput[]
    createMany?: AdjustmentLocationCreateManyPriceAdjustmentInputEnvelope
    connect?: AdjustmentLocationWhereUniqueInput | AdjustmentLocationWhereUniqueInput[]
  }

  export type LocationUncheckedCreateNestedManyWithoutAdjustmentsInput = {
    create?: XOR<LocationCreateWithoutAdjustmentsInput, LocationUncheckedCreateWithoutAdjustmentsInput> | LocationCreateWithoutAdjustmentsInput[] | LocationUncheckedCreateWithoutAdjustmentsInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutAdjustmentsInput | LocationCreateOrConnectWithoutAdjustmentsInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type AdjustmentLocationUpdateManyWithoutPriceAdjustmentNestedInput = {
    create?: XOR<AdjustmentLocationCreateWithoutPriceAdjustmentInput, AdjustmentLocationUncheckedCreateWithoutPriceAdjustmentInput> | AdjustmentLocationCreateWithoutPriceAdjustmentInput[] | AdjustmentLocationUncheckedCreateWithoutPriceAdjustmentInput[]
    connectOrCreate?: AdjustmentLocationCreateOrConnectWithoutPriceAdjustmentInput | AdjustmentLocationCreateOrConnectWithoutPriceAdjustmentInput[]
    upsert?: AdjustmentLocationUpsertWithWhereUniqueWithoutPriceAdjustmentInput | AdjustmentLocationUpsertWithWhereUniqueWithoutPriceAdjustmentInput[]
    createMany?: AdjustmentLocationCreateManyPriceAdjustmentInputEnvelope
    set?: AdjustmentLocationWhereUniqueInput | AdjustmentLocationWhereUniqueInput[]
    disconnect?: AdjustmentLocationWhereUniqueInput | AdjustmentLocationWhereUniqueInput[]
    delete?: AdjustmentLocationWhereUniqueInput | AdjustmentLocationWhereUniqueInput[]
    connect?: AdjustmentLocationWhereUniqueInput | AdjustmentLocationWhereUniqueInput[]
    update?: AdjustmentLocationUpdateWithWhereUniqueWithoutPriceAdjustmentInput | AdjustmentLocationUpdateWithWhereUniqueWithoutPriceAdjustmentInput[]
    updateMany?: AdjustmentLocationUpdateManyWithWhereWithoutPriceAdjustmentInput | AdjustmentLocationUpdateManyWithWhereWithoutPriceAdjustmentInput[]
    deleteMany?: AdjustmentLocationScalarWhereInput | AdjustmentLocationScalarWhereInput[]
  }

  export type UserUpdateOneWithoutPriceAdjustmentsNestedInput = {
    create?: XOR<UserCreateWithoutPriceAdjustmentsInput, UserUncheckedCreateWithoutPriceAdjustmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPriceAdjustmentsInput
    upsert?: UserUpsertWithoutPriceAdjustmentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPriceAdjustmentsInput, UserUpdateWithoutPriceAdjustmentsInput>, UserUncheckedUpdateWithoutPriceAdjustmentsInput>
  }

  export type LocationUpdateManyWithoutAdjustmentsNestedInput = {
    create?: XOR<LocationCreateWithoutAdjustmentsInput, LocationUncheckedCreateWithoutAdjustmentsInput> | LocationCreateWithoutAdjustmentsInput[] | LocationUncheckedCreateWithoutAdjustmentsInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutAdjustmentsInput | LocationCreateOrConnectWithoutAdjustmentsInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutAdjustmentsInput | LocationUpsertWithWhereUniqueWithoutAdjustmentsInput[]
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutAdjustmentsInput | LocationUpdateWithWhereUniqueWithoutAdjustmentsInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutAdjustmentsInput | LocationUpdateManyWithWhereWithoutAdjustmentsInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type AdjustmentLocationUncheckedUpdateManyWithoutPriceAdjustmentNestedInput = {
    create?: XOR<AdjustmentLocationCreateWithoutPriceAdjustmentInput, AdjustmentLocationUncheckedCreateWithoutPriceAdjustmentInput> | AdjustmentLocationCreateWithoutPriceAdjustmentInput[] | AdjustmentLocationUncheckedCreateWithoutPriceAdjustmentInput[]
    connectOrCreate?: AdjustmentLocationCreateOrConnectWithoutPriceAdjustmentInput | AdjustmentLocationCreateOrConnectWithoutPriceAdjustmentInput[]
    upsert?: AdjustmentLocationUpsertWithWhereUniqueWithoutPriceAdjustmentInput | AdjustmentLocationUpsertWithWhereUniqueWithoutPriceAdjustmentInput[]
    createMany?: AdjustmentLocationCreateManyPriceAdjustmentInputEnvelope
    set?: AdjustmentLocationWhereUniqueInput | AdjustmentLocationWhereUniqueInput[]
    disconnect?: AdjustmentLocationWhereUniqueInput | AdjustmentLocationWhereUniqueInput[]
    delete?: AdjustmentLocationWhereUniqueInput | AdjustmentLocationWhereUniqueInput[]
    connect?: AdjustmentLocationWhereUniqueInput | AdjustmentLocationWhereUniqueInput[]
    update?: AdjustmentLocationUpdateWithWhereUniqueWithoutPriceAdjustmentInput | AdjustmentLocationUpdateWithWhereUniqueWithoutPriceAdjustmentInput[]
    updateMany?: AdjustmentLocationUpdateManyWithWhereWithoutPriceAdjustmentInput | AdjustmentLocationUpdateManyWithWhereWithoutPriceAdjustmentInput[]
    deleteMany?: AdjustmentLocationScalarWhereInput | AdjustmentLocationScalarWhereInput[]
  }

  export type LocationUncheckedUpdateManyWithoutAdjustmentsNestedInput = {
    create?: XOR<LocationCreateWithoutAdjustmentsInput, LocationUncheckedCreateWithoutAdjustmentsInput> | LocationCreateWithoutAdjustmentsInput[] | LocationUncheckedCreateWithoutAdjustmentsInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutAdjustmentsInput | LocationCreateOrConnectWithoutAdjustmentsInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutAdjustmentsInput | LocationUpsertWithWhereUniqueWithoutAdjustmentsInput[]
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutAdjustmentsInput | LocationUpdateWithWhereUniqueWithoutAdjustmentsInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutAdjustmentsInput | LocationUpdateManyWithWhereWithoutAdjustmentsInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type LocationCreateNestedOneWithoutAdjustmentLocationInput = {
    create?: XOR<LocationCreateWithoutAdjustmentLocationInput, LocationUncheckedCreateWithoutAdjustmentLocationInput>
    connectOrCreate?: LocationCreateOrConnectWithoutAdjustmentLocationInput
    connect?: LocationWhereUniqueInput
  }

  export type PriceAdjustmentCreateNestedOneWithoutAdjustmentLocationInput = {
    create?: XOR<PriceAdjustmentCreateWithoutAdjustmentLocationInput, PriceAdjustmentUncheckedCreateWithoutAdjustmentLocationInput>
    connectOrCreate?: PriceAdjustmentCreateOrConnectWithoutAdjustmentLocationInput
    connect?: PriceAdjustmentWhereUniqueInput
  }

  export type LocationUpdateOneRequiredWithoutAdjustmentLocationNestedInput = {
    create?: XOR<LocationCreateWithoutAdjustmentLocationInput, LocationUncheckedCreateWithoutAdjustmentLocationInput>
    connectOrCreate?: LocationCreateOrConnectWithoutAdjustmentLocationInput
    upsert?: LocationUpsertWithoutAdjustmentLocationInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutAdjustmentLocationInput, LocationUpdateWithoutAdjustmentLocationInput>, LocationUncheckedUpdateWithoutAdjustmentLocationInput>
  }

  export type PriceAdjustmentUpdateOneRequiredWithoutAdjustmentLocationNestedInput = {
    create?: XOR<PriceAdjustmentCreateWithoutAdjustmentLocationInput, PriceAdjustmentUncheckedCreateWithoutAdjustmentLocationInput>
    connectOrCreate?: PriceAdjustmentCreateOrConnectWithoutAdjustmentLocationInput
    upsert?: PriceAdjustmentUpsertWithoutAdjustmentLocationInput
    connect?: PriceAdjustmentWhereUniqueInput
    update?: XOR<XOR<PriceAdjustmentUpdateToOneWithWhereWithoutAdjustmentLocationInput, PriceAdjustmentUpdateWithoutAdjustmentLocationInput>, PriceAdjustmentUncheckedUpdateWithoutAdjustmentLocationInput>
  }

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<LocationCreateWithoutPaymentsInput, LocationUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutPaymentsInput
    connect?: LocationWhereUniqueInput
  }

  export type PaymentMethodCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<PaymentMethodCreateWithoutPaymentsInput, PaymentMethodUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutPaymentsInput
    connect?: PaymentMethodWhereUniqueInput
  }

  export type PaymentRecordCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<PaymentRecordCreateWithoutPaymentsInput, PaymentRecordUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutPaymentsInput
    connect?: PaymentRecordWhereUniqueInput
  }

  export type UserUpdateOneWithoutPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    upsert?: UserUpsertWithoutPaymentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsInput, UserUpdateWithoutPaymentsInput>, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type LocationUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<LocationCreateWithoutPaymentsInput, LocationUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutPaymentsInput
    upsert?: LocationUpsertWithoutPaymentsInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutPaymentsInput, LocationUpdateWithoutPaymentsInput>, LocationUncheckedUpdateWithoutPaymentsInput>
  }

  export type PaymentMethodUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<PaymentMethodCreateWithoutPaymentsInput, PaymentMethodUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutPaymentsInput
    upsert?: PaymentMethodUpsertWithoutPaymentsInput
    connect?: PaymentMethodWhereUniqueInput
    update?: XOR<XOR<PaymentMethodUpdateToOneWithWhereWithoutPaymentsInput, PaymentMethodUpdateWithoutPaymentsInput>, PaymentMethodUncheckedUpdateWithoutPaymentsInput>
  }

  export type PaymentRecordUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<PaymentRecordCreateWithoutPaymentsInput, PaymentRecordUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutPaymentsInput
    upsert?: PaymentRecordUpsertWithoutPaymentsInput
    connect?: PaymentRecordWhereUniqueInput
    update?: XOR<XOR<PaymentRecordUpdateToOneWithWhereWithoutPaymentsInput, PaymentRecordUpdateWithoutPaymentsInput>, PaymentRecordUncheckedUpdateWithoutPaymentsInput>
  }

  export type PaymentCreateNestedManyWithoutPaymentRecordInput = {
    create?: XOR<PaymentCreateWithoutPaymentRecordInput, PaymentUncheckedCreateWithoutPaymentRecordInput> | PaymentCreateWithoutPaymentRecordInput[] | PaymentUncheckedCreateWithoutPaymentRecordInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPaymentRecordInput | PaymentCreateOrConnectWithoutPaymentRecordInput[]
    createMany?: PaymentCreateManyPaymentRecordInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPaymentRecordInput = {
    create?: XOR<UserCreateWithoutPaymentRecordInput, UserUncheckedCreateWithoutPaymentRecordInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentRecordInput
    connect?: UserWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutPaymentRecordInput = {
    create?: XOR<LocationCreateWithoutPaymentRecordInput, LocationUncheckedCreateWithoutPaymentRecordInput>
    connectOrCreate?: LocationCreateOrConnectWithoutPaymentRecordInput
    connect?: LocationWhereUniqueInput
  }

  export type PaymentUncheckedCreateNestedManyWithoutPaymentRecordInput = {
    create?: XOR<PaymentCreateWithoutPaymentRecordInput, PaymentUncheckedCreateWithoutPaymentRecordInput> | PaymentCreateWithoutPaymentRecordInput[] | PaymentUncheckedCreateWithoutPaymentRecordInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPaymentRecordInput | PaymentCreateOrConnectWithoutPaymentRecordInput[]
    createMany?: PaymentCreateManyPaymentRecordInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUpdateManyWithoutPaymentRecordNestedInput = {
    create?: XOR<PaymentCreateWithoutPaymentRecordInput, PaymentUncheckedCreateWithoutPaymentRecordInput> | PaymentCreateWithoutPaymentRecordInput[] | PaymentUncheckedCreateWithoutPaymentRecordInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPaymentRecordInput | PaymentCreateOrConnectWithoutPaymentRecordInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutPaymentRecordInput | PaymentUpsertWithWhereUniqueWithoutPaymentRecordInput[]
    createMany?: PaymentCreateManyPaymentRecordInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutPaymentRecordInput | PaymentUpdateWithWhereUniqueWithoutPaymentRecordInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutPaymentRecordInput | PaymentUpdateManyWithWhereWithoutPaymentRecordInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type UserUpdateOneWithoutPaymentRecordNestedInput = {
    create?: XOR<UserCreateWithoutPaymentRecordInput, UserUncheckedCreateWithoutPaymentRecordInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentRecordInput
    upsert?: UserUpsertWithoutPaymentRecordInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentRecordInput, UserUpdateWithoutPaymentRecordInput>, UserUncheckedUpdateWithoutPaymentRecordInput>
  }

  export type LocationUpdateOneRequiredWithoutPaymentRecordNestedInput = {
    create?: XOR<LocationCreateWithoutPaymentRecordInput, LocationUncheckedCreateWithoutPaymentRecordInput>
    connectOrCreate?: LocationCreateOrConnectWithoutPaymentRecordInput
    upsert?: LocationUpsertWithoutPaymentRecordInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutPaymentRecordInput, LocationUpdateWithoutPaymentRecordInput>, LocationUncheckedUpdateWithoutPaymentRecordInput>
  }

  export type PaymentUncheckedUpdateManyWithoutPaymentRecordNestedInput = {
    create?: XOR<PaymentCreateWithoutPaymentRecordInput, PaymentUncheckedCreateWithoutPaymentRecordInput> | PaymentCreateWithoutPaymentRecordInput[] | PaymentUncheckedCreateWithoutPaymentRecordInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPaymentRecordInput | PaymentCreateOrConnectWithoutPaymentRecordInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutPaymentRecordInput | PaymentUpsertWithWhereUniqueWithoutPaymentRecordInput[]
    createMany?: PaymentCreateManyPaymentRecordInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutPaymentRecordInput | PaymentUpdateWithWhereUniqueWithoutPaymentRecordInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutPaymentRecordInput | PaymentUpdateManyWithWhereWithoutPaymentRecordInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentCreateNestedManyWithoutPaymentMethodInput = {
    create?: XOR<PaymentCreateWithoutPaymentMethodInput, PaymentUncheckedCreateWithoutPaymentMethodInput> | PaymentCreateWithoutPaymentMethodInput[] | PaymentUncheckedCreateWithoutPaymentMethodInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPaymentMethodInput | PaymentCreateOrConnectWithoutPaymentMethodInput[]
    createMany?: PaymentCreateManyPaymentMethodInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutPaymentMethodInput = {
    create?: XOR<PaymentCreateWithoutPaymentMethodInput, PaymentUncheckedCreateWithoutPaymentMethodInput> | PaymentCreateWithoutPaymentMethodInput[] | PaymentUncheckedCreateWithoutPaymentMethodInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPaymentMethodInput | PaymentCreateOrConnectWithoutPaymentMethodInput[]
    createMany?: PaymentCreateManyPaymentMethodInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUpdateManyWithoutPaymentMethodNestedInput = {
    create?: XOR<PaymentCreateWithoutPaymentMethodInput, PaymentUncheckedCreateWithoutPaymentMethodInput> | PaymentCreateWithoutPaymentMethodInput[] | PaymentUncheckedCreateWithoutPaymentMethodInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPaymentMethodInput | PaymentCreateOrConnectWithoutPaymentMethodInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutPaymentMethodInput | PaymentUpsertWithWhereUniqueWithoutPaymentMethodInput[]
    createMany?: PaymentCreateManyPaymentMethodInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutPaymentMethodInput | PaymentUpdateWithWhereUniqueWithoutPaymentMethodInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutPaymentMethodInput | PaymentUpdateManyWithWhereWithoutPaymentMethodInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutPaymentMethodNestedInput = {
    create?: XOR<PaymentCreateWithoutPaymentMethodInput, PaymentUncheckedCreateWithoutPaymentMethodInput> | PaymentCreateWithoutPaymentMethodInput[] | PaymentUncheckedCreateWithoutPaymentMethodInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPaymentMethodInput | PaymentCreateOrConnectWithoutPaymentMethodInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutPaymentMethodInput | PaymentUpsertWithWhereUniqueWithoutPaymentMethodInput[]
    createMany?: PaymentCreateManyPaymentMethodInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutPaymentMethodInput | PaymentUpdateWithWhereUniqueWithoutPaymentMethodInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutPaymentMethodInput | PaymentUpdateManyWithWhereWithoutPaymentMethodInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvoicesInput
    connect?: UserWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<LocationCreateWithoutInvoicesInput, LocationUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: LocationCreateOrConnectWithoutInvoicesInput
    connect?: LocationWhereUniqueInput
  }

  export type UserUpdateOneWithoutInvoicesNestedInput = {
    create?: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvoicesInput
    upsert?: UserUpsertWithoutInvoicesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvoicesInput, UserUpdateWithoutInvoicesInput>, UserUncheckedUpdateWithoutInvoicesInput>
  }

  export type LocationUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<LocationCreateWithoutInvoicesInput, LocationUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: LocationCreateOrConnectWithoutInvoicesInput
    upsert?: LocationUpsertWithoutInvoicesInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutInvoicesInput, LocationUpdateWithoutInvoicesInput>, LocationUncheckedUpdateWithoutInvoicesInput>
  }

  export type UserCreateNestedOneWithoutPaymentSchedulesInput = {
    create?: XOR<UserCreateWithoutPaymentSchedulesInput, UserUncheckedCreateWithoutPaymentSchedulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentSchedulesInput
    connect?: UserWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutPaymentSchedulesInput = {
    create?: XOR<LocationCreateWithoutPaymentSchedulesInput, LocationUncheckedCreateWithoutPaymentSchedulesInput>
    connectOrCreate?: LocationCreateOrConnectWithoutPaymentSchedulesInput
    connect?: LocationWhereUniqueInput
  }

  export type UserUpdateOneWithoutPaymentSchedulesNestedInput = {
    create?: XOR<UserCreateWithoutPaymentSchedulesInput, UserUncheckedCreateWithoutPaymentSchedulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentSchedulesInput
    upsert?: UserUpsertWithoutPaymentSchedulesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentSchedulesInput, UserUpdateWithoutPaymentSchedulesInput>, UserUncheckedUpdateWithoutPaymentSchedulesInput>
  }

  export type LocationUpdateOneRequiredWithoutPaymentSchedulesNestedInput = {
    create?: XOR<LocationCreateWithoutPaymentSchedulesInput, LocationUncheckedCreateWithoutPaymentSchedulesInput>
    connectOrCreate?: LocationCreateOrConnectWithoutPaymentSchedulesInput
    upsert?: LocationUpsertWithoutPaymentSchedulesInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutPaymentSchedulesInput, LocationUpdateWithoutPaymentSchedulesInput>, LocationUncheckedUpdateWithoutPaymentSchedulesInput>
  }

  export type UserCreateNestedOneWithoutRentHistoryInput = {
    create?: XOR<UserCreateWithoutRentHistoryInput, UserUncheckedCreateWithoutRentHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutRentHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutRentHistoryInput = {
    create?: XOR<LocationCreateWithoutRentHistoryInput, LocationUncheckedCreateWithoutRentHistoryInput>
    connectOrCreate?: LocationCreateOrConnectWithoutRentHistoryInput
    connect?: LocationWhereUniqueInput
  }

  export type UserUpdateOneWithoutRentHistoryNestedInput = {
    create?: XOR<UserCreateWithoutRentHistoryInput, UserUncheckedCreateWithoutRentHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutRentHistoryInput
    upsert?: UserUpsertWithoutRentHistoryInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRentHistoryInput, UserUpdateWithoutRentHistoryInput>, UserUncheckedUpdateWithoutRentHistoryInput>
  }

  export type LocationUpdateOneRequiredWithoutRentHistoryNestedInput = {
    create?: XOR<LocationCreateWithoutRentHistoryInput, LocationUncheckedCreateWithoutRentHistoryInput>
    connectOrCreate?: LocationCreateOrConnectWithoutRentHistoryInput
    upsert?: LocationUpsertWithoutRentHistoryInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutRentHistoryInput, LocationUpdateWithoutRentHistoryInput>, LocationUncheckedUpdateWithoutRentHistoryInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type InvoiceCreateWithoutCustInput = {
    date: Date | string
    location: LocationCreateNestedOneWithoutInvoicesInput
  }

  export type InvoiceUncheckedCreateWithoutCustInput = {
    id?: number
    locationId: number
    date: Date | string
  }

  export type InvoiceCreateOrConnectWithoutCustInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutCustInput, InvoiceUncheckedCreateWithoutCustInput>
  }

  export type InvoiceCreateManyCustInputEnvelope = {
    data: InvoiceCreateManyCustInput | InvoiceCreateManyCustInput[]
    skipDuplicates?: boolean
  }

  export type KeyCreateWithoutCustInput = {
    issueDate: Date | string
    returnDate?: Date | string | null
    location: LocationCreateNestedOneWithoutKeysInput
  }

  export type KeyUncheckedCreateWithoutCustInput = {
    id?: number
    locationId: number
    issueDate: Date | string
    returnDate?: Date | string | null
  }

  export type KeyCreateOrConnectWithoutCustInput = {
    where: KeyWhereUniqueInput
    create: XOR<KeyCreateWithoutCustInput, KeyUncheckedCreateWithoutCustInput>
  }

  export type KeyCreateManyCustInputEnvelope = {
    data: KeyCreateManyCustInput | KeyCreateManyCustInput[]
    skipDuplicates?: boolean
  }

  export type LeaseContractCreateWithoutCustInput = {
    startDate: Date | string
    endDate: Date | string
    finishedDate?: Date | string | null
    rentAmount: number
    active?: boolean
    cancelled?: boolean
    createdAt?: Date | string
    pdfPath?: string | null
    location: LocationCreateNestedOneWithoutContractsInput
    renter: UserCreateNestedOneWithoutLeaseContractsAsRenterInput
  }

  export type LeaseContractUncheckedCreateWithoutCustInput = {
    id?: number
    locationId: number
    startDate: Date | string
    endDate: Date | string
    finishedDate?: Date | string | null
    rentAmount: number
    active?: boolean
    cancelled?: boolean
    createdAt?: Date | string
    pdfPath?: string | null
    renterId: number
  }

  export type LeaseContractCreateOrConnectWithoutCustInput = {
    where: LeaseContractWhereUniqueInput
    create: XOR<LeaseContractCreateWithoutCustInput, LeaseContractUncheckedCreateWithoutCustInput>
  }

  export type LeaseContractCreateManyCustInputEnvelope = {
    data: LeaseContractCreateManyCustInput | LeaseContractCreateManyCustInput[]
    skipDuplicates?: boolean
  }

  export type LeaseContractCreateWithoutRenterInput = {
    startDate: Date | string
    endDate: Date | string
    finishedDate?: Date | string | null
    rentAmount: number
    active?: boolean
    cancelled?: boolean
    createdAt?: Date | string
    pdfPath?: string | null
    cust?: UserCreateNestedOneWithoutLeaseContractsAsCustInput
    location: LocationCreateNestedOneWithoutContractsInput
  }

  export type LeaseContractUncheckedCreateWithoutRenterInput = {
    id?: number
    locationId: number
    startDate: Date | string
    endDate: Date | string
    finishedDate?: Date | string | null
    rentAmount: number
    active?: boolean
    cancelled?: boolean
    createdAt?: Date | string
    pdfPath?: string | null
    CUST_ID?: number | null
  }

  export type LeaseContractCreateOrConnectWithoutRenterInput = {
    where: LeaseContractWhereUniqueInput
    create: XOR<LeaseContractCreateWithoutRenterInput, LeaseContractUncheckedCreateWithoutRenterInput>
  }

  export type LeaseContractCreateManyRenterInputEnvelope = {
    data: LeaseContractCreateManyRenterInput | LeaseContractCreateManyRenterInput[]
    skipDuplicates?: boolean
  }

  export type LocationCreateWithoutCustInput = {
    name: string
    address: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    AdjustmentLocation?: AdjustmentLocationCreateNestedManyWithoutLocationInput
    invoices?: InvoiceCreateNestedManyWithoutLocationInput
    keys?: KeyCreateNestedManyWithoutLocationInput
    contracts?: LeaseContractCreateNestedManyWithoutLocationInput
    renter: UserCreateNestedOneWithoutRentedLocationsInput
    payments?: PaymentCreateNestedManyWithoutLocationInput
    PaymentRecord?: PaymentRecordCreateNestedManyWithoutLocationInput
    paymentSchedules?: PaymentScheduleCreateNestedManyWithoutLocationInput
    rentHistory?: RentHistoryCreateNestedManyWithoutLocationInput
    adjustments?: PriceAdjustmentCreateNestedManyWithoutLocationsInput
  }

  export type LocationUncheckedCreateWithoutCustInput = {
    id?: number
    name: string
    address: string
    renterId: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    AdjustmentLocation?: AdjustmentLocationUncheckedCreateNestedManyWithoutLocationInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutLocationInput
    keys?: KeyUncheckedCreateNestedManyWithoutLocationInput
    contracts?: LeaseContractUncheckedCreateNestedManyWithoutLocationInput
    payments?: PaymentUncheckedCreateNestedManyWithoutLocationInput
    PaymentRecord?: PaymentRecordUncheckedCreateNestedManyWithoutLocationInput
    paymentSchedules?: PaymentScheduleUncheckedCreateNestedManyWithoutLocationInput
    rentHistory?: RentHistoryUncheckedCreateNestedManyWithoutLocationInput
    adjustments?: PriceAdjustmentUncheckedCreateNestedManyWithoutLocationsInput
  }

  export type LocationCreateOrConnectWithoutCustInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutCustInput, LocationUncheckedCreateWithoutCustInput>
  }

  export type LocationCreateManyCustInputEnvelope = {
    data: LocationCreateManyCustInput | LocationCreateManyCustInput[]
    skipDuplicates?: boolean
  }

  export type LocationCreateWithoutRenterInput = {
    name: string
    address: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    AdjustmentLocation?: AdjustmentLocationCreateNestedManyWithoutLocationInput
    invoices?: InvoiceCreateNestedManyWithoutLocationInput
    keys?: KeyCreateNestedManyWithoutLocationInput
    contracts?: LeaseContractCreateNestedManyWithoutLocationInput
    cust?: UserCreateNestedOneWithoutLocationInput
    payments?: PaymentCreateNestedManyWithoutLocationInput
    PaymentRecord?: PaymentRecordCreateNestedManyWithoutLocationInput
    paymentSchedules?: PaymentScheduleCreateNestedManyWithoutLocationInput
    rentHistory?: RentHistoryCreateNestedManyWithoutLocationInput
    adjustments?: PriceAdjustmentCreateNestedManyWithoutLocationsInput
  }

  export type LocationUncheckedCreateWithoutRenterInput = {
    id?: number
    name: string
    address: string
    CUST_ID?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    AdjustmentLocation?: AdjustmentLocationUncheckedCreateNestedManyWithoutLocationInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutLocationInput
    keys?: KeyUncheckedCreateNestedManyWithoutLocationInput
    contracts?: LeaseContractUncheckedCreateNestedManyWithoutLocationInput
    payments?: PaymentUncheckedCreateNestedManyWithoutLocationInput
    PaymentRecord?: PaymentRecordUncheckedCreateNestedManyWithoutLocationInput
    paymentSchedules?: PaymentScheduleUncheckedCreateNestedManyWithoutLocationInput
    rentHistory?: RentHistoryUncheckedCreateNestedManyWithoutLocationInput
    adjustments?: PriceAdjustmentUncheckedCreateNestedManyWithoutLocationsInput
  }

  export type LocationCreateOrConnectWithoutRenterInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutRenterInput, LocationUncheckedCreateWithoutRenterInput>
  }

  export type LocationCreateManyRenterInputEnvelope = {
    data: LocationCreateManyRenterInput | LocationCreateManyRenterInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutCustInput = {
    date?: Date | string
    amount: number
    month: number
    year: number
    location: LocationCreateNestedOneWithoutPaymentsInput
    paymentMethod: PaymentMethodCreateNestedOneWithoutPaymentsInput
    paymentRecord: PaymentRecordCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutCustInput = {
    id?: number
    locationId: number
    date?: Date | string
    amount: number
    paymentMethodId: number
    paymentRecordId: number
    month: number
    year: number
  }

  export type PaymentCreateOrConnectWithoutCustInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutCustInput, PaymentUncheckedCreateWithoutCustInput>
  }

  export type PaymentCreateManyCustInputEnvelope = {
    data: PaymentCreateManyCustInput | PaymentCreateManyCustInput[]
    skipDuplicates?: boolean
  }

  export type PaymentRecordCreateWithoutCustInput = {
    month: number
    year: number
    remainingAmount?: number
    totalPaid?: number
    totalRent: number
    payments?: PaymentCreateNestedManyWithoutPaymentRecordInput
    location: LocationCreateNestedOneWithoutPaymentRecordInput
  }

  export type PaymentRecordUncheckedCreateWithoutCustInput = {
    id?: number
    locationId: number
    month: number
    year: number
    remainingAmount?: number
    totalPaid?: number
    totalRent: number
    payments?: PaymentUncheckedCreateNestedManyWithoutPaymentRecordInput
  }

  export type PaymentRecordCreateOrConnectWithoutCustInput = {
    where: PaymentRecordWhereUniqueInput
    create: XOR<PaymentRecordCreateWithoutCustInput, PaymentRecordUncheckedCreateWithoutCustInput>
  }

  export type PaymentRecordCreateManyCustInputEnvelope = {
    data: PaymentRecordCreateManyCustInput | PaymentRecordCreateManyCustInput[]
    skipDuplicates?: boolean
  }

  export type PaymentScheduleCreateWithoutCustInput = {
    dueDate: Date | string
    location: LocationCreateNestedOneWithoutPaymentSchedulesInput
  }

  export type PaymentScheduleUncheckedCreateWithoutCustInput = {
    id?: number
    locationId: number
    dueDate: Date | string
  }

  export type PaymentScheduleCreateOrConnectWithoutCustInput = {
    where: PaymentScheduleWhereUniqueInput
    create: XOR<PaymentScheduleCreateWithoutCustInput, PaymentScheduleUncheckedCreateWithoutCustInput>
  }

  export type PaymentScheduleCreateManyCustInputEnvelope = {
    data: PaymentScheduleCreateManyCustInput | PaymentScheduleCreateManyCustInput[]
    skipDuplicates?: boolean
  }

  export type PriceAdjustmentCreateWithoutCustInput = {
    amount: number
    period: number
    status: number
    applyToAll: boolean
    type: number
    createdAt?: Date | string
    lastExecutedAt?: Date | string | null
    updatedAt?: Date | string
    AdjustmentLocation?: AdjustmentLocationCreateNestedManyWithoutPriceAdjustmentInput
    locations?: LocationCreateNestedManyWithoutAdjustmentsInput
  }

  export type PriceAdjustmentUncheckedCreateWithoutCustInput = {
    id?: number
    amount: number
    period: number
    status: number
    applyToAll: boolean
    type: number
    createdAt?: Date | string
    lastExecutedAt?: Date | string | null
    updatedAt?: Date | string
    AdjustmentLocation?: AdjustmentLocationUncheckedCreateNestedManyWithoutPriceAdjustmentInput
    locations?: LocationUncheckedCreateNestedManyWithoutAdjustmentsInput
  }

  export type PriceAdjustmentCreateOrConnectWithoutCustInput = {
    where: PriceAdjustmentWhereUniqueInput
    create: XOR<PriceAdjustmentCreateWithoutCustInput, PriceAdjustmentUncheckedCreateWithoutCustInput>
  }

  export type PriceAdjustmentCreateManyCustInputEnvelope = {
    data: PriceAdjustmentCreateManyCustInput | PriceAdjustmentCreateManyCustInput[]
    skipDuplicates?: boolean
  }

  export type RentHistoryCreateWithoutCustInput = {
    month: number
    year: number
    rentAmount: number
    createdAt?: Date | string
    location: LocationCreateNestedOneWithoutRentHistoryInput
  }

  export type RentHistoryUncheckedCreateWithoutCustInput = {
    id?: number
    locationId: number
    month: number
    year: number
    rentAmount: number
    createdAt?: Date | string
  }

  export type RentHistoryCreateOrConnectWithoutCustInput = {
    where: RentHistoryWhereUniqueInput
    create: XOR<RentHistoryCreateWithoutCustInput, RentHistoryUncheckedCreateWithoutCustInput>
  }

  export type RentHistoryCreateManyCustInputEnvelope = {
    data: RentHistoryCreateManyCustInput | RentHistoryCreateManyCustInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCreatedUsersInput = {
    email: string
    isRenter?: boolean
    accessToken?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    createdAt?: Date | string
    password?: string | null
    updatedAt?: Date | string | null
    dni: number
    invoices?: InvoiceCreateNestedManyWithoutCustInput
    keys?: KeyCreateNestedManyWithoutCustInput
    leaseContractsAsCust?: LeaseContractCreateNestedManyWithoutCustInput
    leaseContractsAsRenter?: LeaseContractCreateNestedManyWithoutRenterInput
    Location?: LocationCreateNestedManyWithoutCustInput
    rentedLocations?: LocationCreateNestedManyWithoutRenterInput
    payments?: PaymentCreateNestedManyWithoutCustInput
    PaymentRecord?: PaymentRecordCreateNestedManyWithoutCustInput
    paymentSchedules?: PaymentScheduleCreateNestedManyWithoutCustInput
    priceAdjustments?: PriceAdjustmentCreateNestedManyWithoutCustInput
    RentHistory?: RentHistoryCreateNestedManyWithoutCustInput
    cust?: UserCreateNestedOneWithoutCreatedUsersInput
  }

  export type UserUncheckedCreateWithoutCreatedUsersInput = {
    id?: number
    email: string
    isRenter?: boolean
    accessToken?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    createdAt?: Date | string
    password?: string | null
    updatedAt?: Date | string | null
    CUST_ID?: number | null
    dni: number
    invoices?: InvoiceUncheckedCreateNestedManyWithoutCustInput
    keys?: KeyUncheckedCreateNestedManyWithoutCustInput
    leaseContractsAsCust?: LeaseContractUncheckedCreateNestedManyWithoutCustInput
    leaseContractsAsRenter?: LeaseContractUncheckedCreateNestedManyWithoutRenterInput
    Location?: LocationUncheckedCreateNestedManyWithoutCustInput
    rentedLocations?: LocationUncheckedCreateNestedManyWithoutRenterInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCustInput
    PaymentRecord?: PaymentRecordUncheckedCreateNestedManyWithoutCustInput
    paymentSchedules?: PaymentScheduleUncheckedCreateNestedManyWithoutCustInput
    priceAdjustments?: PriceAdjustmentUncheckedCreateNestedManyWithoutCustInput
    RentHistory?: RentHistoryUncheckedCreateNestedManyWithoutCustInput
  }

  export type UserCreateOrConnectWithoutCreatedUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
  }

  export type UserCreateWithoutCustInput = {
    email: string
    isRenter?: boolean
    accessToken?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    createdAt?: Date | string
    password?: string | null
    updatedAt?: Date | string | null
    dni: number
    invoices?: InvoiceCreateNestedManyWithoutCustInput
    keys?: KeyCreateNestedManyWithoutCustInput
    leaseContractsAsCust?: LeaseContractCreateNestedManyWithoutCustInput
    leaseContractsAsRenter?: LeaseContractCreateNestedManyWithoutRenterInput
    Location?: LocationCreateNestedManyWithoutCustInput
    rentedLocations?: LocationCreateNestedManyWithoutRenterInput
    payments?: PaymentCreateNestedManyWithoutCustInput
    PaymentRecord?: PaymentRecordCreateNestedManyWithoutCustInput
    paymentSchedules?: PaymentScheduleCreateNestedManyWithoutCustInput
    priceAdjustments?: PriceAdjustmentCreateNestedManyWithoutCustInput
    RentHistory?: RentHistoryCreateNestedManyWithoutCustInput
    createdUsers?: UserCreateNestedManyWithoutCustInput
  }

  export type UserUncheckedCreateWithoutCustInput = {
    id?: number
    email: string
    isRenter?: boolean
    accessToken?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    createdAt?: Date | string
    password?: string | null
    updatedAt?: Date | string | null
    dni: number
    invoices?: InvoiceUncheckedCreateNestedManyWithoutCustInput
    keys?: KeyUncheckedCreateNestedManyWithoutCustInput
    leaseContractsAsCust?: LeaseContractUncheckedCreateNestedManyWithoutCustInput
    leaseContractsAsRenter?: LeaseContractUncheckedCreateNestedManyWithoutRenterInput
    Location?: LocationUncheckedCreateNestedManyWithoutCustInput
    rentedLocations?: LocationUncheckedCreateNestedManyWithoutRenterInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCustInput
    PaymentRecord?: PaymentRecordUncheckedCreateNestedManyWithoutCustInput
    paymentSchedules?: PaymentScheduleUncheckedCreateNestedManyWithoutCustInput
    priceAdjustments?: PriceAdjustmentUncheckedCreateNestedManyWithoutCustInput
    RentHistory?: RentHistoryUncheckedCreateNestedManyWithoutCustInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCustInput
  }

  export type UserCreateOrConnectWithoutCustInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCustInput, UserUncheckedCreateWithoutCustInput>
  }

  export type UserCreateManyCustInputEnvelope = {
    data: UserCreateManyCustInput | UserCreateManyCustInput[]
    skipDuplicates?: boolean
  }

  export type InvoiceUpsertWithWhereUniqueWithoutCustInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutCustInput, InvoiceUncheckedUpdateWithoutCustInput>
    create: XOR<InvoiceCreateWithoutCustInput, InvoiceUncheckedCreateWithoutCustInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutCustInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutCustInput, InvoiceUncheckedUpdateWithoutCustInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutCustInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutCustInput>
  }

  export type InvoiceScalarWhereInput = {
    AND?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    OR?: InvoiceScalarWhereInput[]
    NOT?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    id?: IntFilter<"Invoice"> | number
    locationId?: IntFilter<"Invoice"> | number
    date?: DateTimeFilter<"Invoice"> | Date | string
    CUST_ID?: IntNullableFilter<"Invoice"> | number | null
  }

  export type KeyUpsertWithWhereUniqueWithoutCustInput = {
    where: KeyWhereUniqueInput
    update: XOR<KeyUpdateWithoutCustInput, KeyUncheckedUpdateWithoutCustInput>
    create: XOR<KeyCreateWithoutCustInput, KeyUncheckedCreateWithoutCustInput>
  }

  export type KeyUpdateWithWhereUniqueWithoutCustInput = {
    where: KeyWhereUniqueInput
    data: XOR<KeyUpdateWithoutCustInput, KeyUncheckedUpdateWithoutCustInput>
  }

  export type KeyUpdateManyWithWhereWithoutCustInput = {
    where: KeyScalarWhereInput
    data: XOR<KeyUpdateManyMutationInput, KeyUncheckedUpdateManyWithoutCustInput>
  }

  export type KeyScalarWhereInput = {
    AND?: KeyScalarWhereInput | KeyScalarWhereInput[]
    OR?: KeyScalarWhereInput[]
    NOT?: KeyScalarWhereInput | KeyScalarWhereInput[]
    id?: IntFilter<"Key"> | number
    locationId?: IntFilter<"Key"> | number
    issueDate?: DateTimeFilter<"Key"> | Date | string
    returnDate?: DateTimeNullableFilter<"Key"> | Date | string | null
    CUST_ID?: IntNullableFilter<"Key"> | number | null
  }

  export type LeaseContractUpsertWithWhereUniqueWithoutCustInput = {
    where: LeaseContractWhereUniqueInput
    update: XOR<LeaseContractUpdateWithoutCustInput, LeaseContractUncheckedUpdateWithoutCustInput>
    create: XOR<LeaseContractCreateWithoutCustInput, LeaseContractUncheckedCreateWithoutCustInput>
  }

  export type LeaseContractUpdateWithWhereUniqueWithoutCustInput = {
    where: LeaseContractWhereUniqueInput
    data: XOR<LeaseContractUpdateWithoutCustInput, LeaseContractUncheckedUpdateWithoutCustInput>
  }

  export type LeaseContractUpdateManyWithWhereWithoutCustInput = {
    where: LeaseContractScalarWhereInput
    data: XOR<LeaseContractUpdateManyMutationInput, LeaseContractUncheckedUpdateManyWithoutCustInput>
  }

  export type LeaseContractScalarWhereInput = {
    AND?: LeaseContractScalarWhereInput | LeaseContractScalarWhereInput[]
    OR?: LeaseContractScalarWhereInput[]
    NOT?: LeaseContractScalarWhereInput | LeaseContractScalarWhereInput[]
    id?: IntFilter<"LeaseContract"> | number
    locationId?: IntFilter<"LeaseContract"> | number
    startDate?: DateTimeFilter<"LeaseContract"> | Date | string
    endDate?: DateTimeFilter<"LeaseContract"> | Date | string
    finishedDate?: DateTimeNullableFilter<"LeaseContract"> | Date | string | null
    rentAmount?: IntFilter<"LeaseContract"> | number
    active?: BoolFilter<"LeaseContract"> | boolean
    cancelled?: BoolFilter<"LeaseContract"> | boolean
    createdAt?: DateTimeFilter<"LeaseContract"> | Date | string
    pdfPath?: StringNullableFilter<"LeaseContract"> | string | null
    CUST_ID?: IntNullableFilter<"LeaseContract"> | number | null
    renterId?: IntFilter<"LeaseContract"> | number
  }

  export type LeaseContractUpsertWithWhereUniqueWithoutRenterInput = {
    where: LeaseContractWhereUniqueInput
    update: XOR<LeaseContractUpdateWithoutRenterInput, LeaseContractUncheckedUpdateWithoutRenterInput>
    create: XOR<LeaseContractCreateWithoutRenterInput, LeaseContractUncheckedCreateWithoutRenterInput>
  }

  export type LeaseContractUpdateWithWhereUniqueWithoutRenterInput = {
    where: LeaseContractWhereUniqueInput
    data: XOR<LeaseContractUpdateWithoutRenterInput, LeaseContractUncheckedUpdateWithoutRenterInput>
  }

  export type LeaseContractUpdateManyWithWhereWithoutRenterInput = {
    where: LeaseContractScalarWhereInput
    data: XOR<LeaseContractUpdateManyMutationInput, LeaseContractUncheckedUpdateManyWithoutRenterInput>
  }

  export type LocationUpsertWithWhereUniqueWithoutCustInput = {
    where: LocationWhereUniqueInput
    update: XOR<LocationUpdateWithoutCustInput, LocationUncheckedUpdateWithoutCustInput>
    create: XOR<LocationCreateWithoutCustInput, LocationUncheckedCreateWithoutCustInput>
  }

  export type LocationUpdateWithWhereUniqueWithoutCustInput = {
    where: LocationWhereUniqueInput
    data: XOR<LocationUpdateWithoutCustInput, LocationUncheckedUpdateWithoutCustInput>
  }

  export type LocationUpdateManyWithWhereWithoutCustInput = {
    where: LocationScalarWhereInput
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyWithoutCustInput>
  }

  export type LocationScalarWhereInput = {
    AND?: LocationScalarWhereInput | LocationScalarWhereInput[]
    OR?: LocationScalarWhereInput[]
    NOT?: LocationScalarWhereInput | LocationScalarWhereInput[]
    id?: IntFilter<"Location"> | number
    name?: StringFilter<"Location"> | string
    address?: StringFilter<"Location"> | string
    renterId?: IntFilter<"Location"> | number
    CUST_ID?: IntNullableFilter<"Location"> | number | null
    createdAt?: DateTimeNullableFilter<"Location"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Location"> | Date | string | null
  }

  export type LocationUpsertWithWhereUniqueWithoutRenterInput = {
    where: LocationWhereUniqueInput
    update: XOR<LocationUpdateWithoutRenterInput, LocationUncheckedUpdateWithoutRenterInput>
    create: XOR<LocationCreateWithoutRenterInput, LocationUncheckedCreateWithoutRenterInput>
  }

  export type LocationUpdateWithWhereUniqueWithoutRenterInput = {
    where: LocationWhereUniqueInput
    data: XOR<LocationUpdateWithoutRenterInput, LocationUncheckedUpdateWithoutRenterInput>
  }

  export type LocationUpdateManyWithWhereWithoutRenterInput = {
    where: LocationScalarWhereInput
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyWithoutRenterInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutCustInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutCustInput, PaymentUncheckedUpdateWithoutCustInput>
    create: XOR<PaymentCreateWithoutCustInput, PaymentUncheckedCreateWithoutCustInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutCustInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutCustInput, PaymentUncheckedUpdateWithoutCustInput>
  }

  export type PaymentUpdateManyWithWhereWithoutCustInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutCustInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: IntFilter<"Payment"> | number
    locationId?: IntFilter<"Payment"> | number
    date?: DateTimeFilter<"Payment"> | Date | string
    amount?: IntFilter<"Payment"> | number
    paymentMethodId?: IntFilter<"Payment"> | number
    CUST_ID?: IntNullableFilter<"Payment"> | number | null
    paymentRecordId?: IntFilter<"Payment"> | number
    month?: IntFilter<"Payment"> | number
    year?: IntFilter<"Payment"> | number
  }

  export type PaymentRecordUpsertWithWhereUniqueWithoutCustInput = {
    where: PaymentRecordWhereUniqueInput
    update: XOR<PaymentRecordUpdateWithoutCustInput, PaymentRecordUncheckedUpdateWithoutCustInput>
    create: XOR<PaymentRecordCreateWithoutCustInput, PaymentRecordUncheckedCreateWithoutCustInput>
  }

  export type PaymentRecordUpdateWithWhereUniqueWithoutCustInput = {
    where: PaymentRecordWhereUniqueInput
    data: XOR<PaymentRecordUpdateWithoutCustInput, PaymentRecordUncheckedUpdateWithoutCustInput>
  }

  export type PaymentRecordUpdateManyWithWhereWithoutCustInput = {
    where: PaymentRecordScalarWhereInput
    data: XOR<PaymentRecordUpdateManyMutationInput, PaymentRecordUncheckedUpdateManyWithoutCustInput>
  }

  export type PaymentRecordScalarWhereInput = {
    AND?: PaymentRecordScalarWhereInput | PaymentRecordScalarWhereInput[]
    OR?: PaymentRecordScalarWhereInput[]
    NOT?: PaymentRecordScalarWhereInput | PaymentRecordScalarWhereInput[]
    id?: IntFilter<"PaymentRecord"> | number
    locationId?: IntFilter<"PaymentRecord"> | number
    month?: IntFilter<"PaymentRecord"> | number
    year?: IntFilter<"PaymentRecord"> | number
    CUST_ID?: IntNullableFilter<"PaymentRecord"> | number | null
    remainingAmount?: IntFilter<"PaymentRecord"> | number
    totalPaid?: IntFilter<"PaymentRecord"> | number
    totalRent?: IntFilter<"PaymentRecord"> | number
  }

  export type PaymentScheduleUpsertWithWhereUniqueWithoutCustInput = {
    where: PaymentScheduleWhereUniqueInput
    update: XOR<PaymentScheduleUpdateWithoutCustInput, PaymentScheduleUncheckedUpdateWithoutCustInput>
    create: XOR<PaymentScheduleCreateWithoutCustInput, PaymentScheduleUncheckedCreateWithoutCustInput>
  }

  export type PaymentScheduleUpdateWithWhereUniqueWithoutCustInput = {
    where: PaymentScheduleWhereUniqueInput
    data: XOR<PaymentScheduleUpdateWithoutCustInput, PaymentScheduleUncheckedUpdateWithoutCustInput>
  }

  export type PaymentScheduleUpdateManyWithWhereWithoutCustInput = {
    where: PaymentScheduleScalarWhereInput
    data: XOR<PaymentScheduleUpdateManyMutationInput, PaymentScheduleUncheckedUpdateManyWithoutCustInput>
  }

  export type PaymentScheduleScalarWhereInput = {
    AND?: PaymentScheduleScalarWhereInput | PaymentScheduleScalarWhereInput[]
    OR?: PaymentScheduleScalarWhereInput[]
    NOT?: PaymentScheduleScalarWhereInput | PaymentScheduleScalarWhereInput[]
    id?: IntFilter<"PaymentSchedule"> | number
    locationId?: IntFilter<"PaymentSchedule"> | number
    dueDate?: DateTimeFilter<"PaymentSchedule"> | Date | string
    CUST_ID?: IntNullableFilter<"PaymentSchedule"> | number | null
  }

  export type PriceAdjustmentUpsertWithWhereUniqueWithoutCustInput = {
    where: PriceAdjustmentWhereUniqueInput
    update: XOR<PriceAdjustmentUpdateWithoutCustInput, PriceAdjustmentUncheckedUpdateWithoutCustInput>
    create: XOR<PriceAdjustmentCreateWithoutCustInput, PriceAdjustmentUncheckedCreateWithoutCustInput>
  }

  export type PriceAdjustmentUpdateWithWhereUniqueWithoutCustInput = {
    where: PriceAdjustmentWhereUniqueInput
    data: XOR<PriceAdjustmentUpdateWithoutCustInput, PriceAdjustmentUncheckedUpdateWithoutCustInput>
  }

  export type PriceAdjustmentUpdateManyWithWhereWithoutCustInput = {
    where: PriceAdjustmentScalarWhereInput
    data: XOR<PriceAdjustmentUpdateManyMutationInput, PriceAdjustmentUncheckedUpdateManyWithoutCustInput>
  }

  export type PriceAdjustmentScalarWhereInput = {
    AND?: PriceAdjustmentScalarWhereInput | PriceAdjustmentScalarWhereInput[]
    OR?: PriceAdjustmentScalarWhereInput[]
    NOT?: PriceAdjustmentScalarWhereInput | PriceAdjustmentScalarWhereInput[]
    id?: IntFilter<"PriceAdjustment"> | number
    CUST_ID?: IntNullableFilter<"PriceAdjustment"> | number | null
    amount?: IntFilter<"PriceAdjustment"> | number
    period?: IntFilter<"PriceAdjustment"> | number
    status?: IntFilter<"PriceAdjustment"> | number
    applyToAll?: BoolFilter<"PriceAdjustment"> | boolean
    type?: IntFilter<"PriceAdjustment"> | number
    createdAt?: DateTimeFilter<"PriceAdjustment"> | Date | string
    lastExecutedAt?: DateTimeNullableFilter<"PriceAdjustment"> | Date | string | null
    updatedAt?: DateTimeFilter<"PriceAdjustment"> | Date | string
  }

  export type RentHistoryUpsertWithWhereUniqueWithoutCustInput = {
    where: RentHistoryWhereUniqueInput
    update: XOR<RentHistoryUpdateWithoutCustInput, RentHistoryUncheckedUpdateWithoutCustInput>
    create: XOR<RentHistoryCreateWithoutCustInput, RentHistoryUncheckedCreateWithoutCustInput>
  }

  export type RentHistoryUpdateWithWhereUniqueWithoutCustInput = {
    where: RentHistoryWhereUniqueInput
    data: XOR<RentHistoryUpdateWithoutCustInput, RentHistoryUncheckedUpdateWithoutCustInput>
  }

  export type RentHistoryUpdateManyWithWhereWithoutCustInput = {
    where: RentHistoryScalarWhereInput
    data: XOR<RentHistoryUpdateManyMutationInput, RentHistoryUncheckedUpdateManyWithoutCustInput>
  }

  export type RentHistoryScalarWhereInput = {
    AND?: RentHistoryScalarWhereInput | RentHistoryScalarWhereInput[]
    OR?: RentHistoryScalarWhereInput[]
    NOT?: RentHistoryScalarWhereInput | RentHistoryScalarWhereInput[]
    id?: IntFilter<"RentHistory"> | number
    locationId?: IntFilter<"RentHistory"> | number
    month?: IntFilter<"RentHistory"> | number
    year?: IntFilter<"RentHistory"> | number
    rentAmount?: IntFilter<"RentHistory"> | number
    createdAt?: DateTimeFilter<"RentHistory"> | Date | string
    CUST_ID?: IntNullableFilter<"RentHistory"> | number | null
  }

  export type UserUpsertWithoutCreatedUsersInput = {
    update: XOR<UserUpdateWithoutCreatedUsersInput, UserUncheckedUpdateWithoutCreatedUsersInput>
    create: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedUsersInput, UserUncheckedUpdateWithoutCreatedUsersInput>
  }

  export type UserUpdateWithoutCreatedUsersInput = {
    email?: StringFieldUpdateOperationsInput | string
    isRenter?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dni?: IntFieldUpdateOperationsInput | number
    invoices?: InvoiceUpdateManyWithoutCustNestedInput
    keys?: KeyUpdateManyWithoutCustNestedInput
    leaseContractsAsCust?: LeaseContractUpdateManyWithoutCustNestedInput
    leaseContractsAsRenter?: LeaseContractUpdateManyWithoutRenterNestedInput
    Location?: LocationUpdateManyWithoutCustNestedInput
    rentedLocations?: LocationUpdateManyWithoutRenterNestedInput
    payments?: PaymentUpdateManyWithoutCustNestedInput
    PaymentRecord?: PaymentRecordUpdateManyWithoutCustNestedInput
    paymentSchedules?: PaymentScheduleUpdateManyWithoutCustNestedInput
    priceAdjustments?: PriceAdjustmentUpdateManyWithoutCustNestedInput
    RentHistory?: RentHistoryUpdateManyWithoutCustNestedInput
    cust?: UserUpdateOneWithoutCreatedUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    isRenter?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    dni?: IntFieldUpdateOperationsInput | number
    invoices?: InvoiceUncheckedUpdateManyWithoutCustNestedInput
    keys?: KeyUncheckedUpdateManyWithoutCustNestedInput
    leaseContractsAsCust?: LeaseContractUncheckedUpdateManyWithoutCustNestedInput
    leaseContractsAsRenter?: LeaseContractUncheckedUpdateManyWithoutRenterNestedInput
    Location?: LocationUncheckedUpdateManyWithoutCustNestedInput
    rentedLocations?: LocationUncheckedUpdateManyWithoutRenterNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCustNestedInput
    PaymentRecord?: PaymentRecordUncheckedUpdateManyWithoutCustNestedInput
    paymentSchedules?: PaymentScheduleUncheckedUpdateManyWithoutCustNestedInput
    priceAdjustments?: PriceAdjustmentUncheckedUpdateManyWithoutCustNestedInput
    RentHistory?: RentHistoryUncheckedUpdateManyWithoutCustNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutCustInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCustInput, UserUncheckedUpdateWithoutCustInput>
    create: XOR<UserCreateWithoutCustInput, UserUncheckedCreateWithoutCustInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCustInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCustInput, UserUncheckedUpdateWithoutCustInput>
  }

  export type UserUpdateManyWithWhereWithoutCustInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCustInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    isRenter?: BoolFilter<"User"> | boolean
    accessToken?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    picture?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    password?: StringNullableFilter<"User"> | string | null
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    CUST_ID?: IntNullableFilter<"User"> | number | null
    dni?: IntFilter<"User"> | number
  }

  export type AdjustmentLocationCreateWithoutLocationInput = {
    priceAdjustment: PriceAdjustmentCreateNestedOneWithoutAdjustmentLocationInput
  }

  export type AdjustmentLocationUncheckedCreateWithoutLocationInput = {
    id?: number
    priceAdjustmentId: number
  }

  export type AdjustmentLocationCreateOrConnectWithoutLocationInput = {
    where: AdjustmentLocationWhereUniqueInput
    create: XOR<AdjustmentLocationCreateWithoutLocationInput, AdjustmentLocationUncheckedCreateWithoutLocationInput>
  }

  export type AdjustmentLocationCreateManyLocationInputEnvelope = {
    data: AdjustmentLocationCreateManyLocationInput | AdjustmentLocationCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type InvoiceCreateWithoutLocationInput = {
    date: Date | string
    cust?: UserCreateNestedOneWithoutInvoicesInput
  }

  export type InvoiceUncheckedCreateWithoutLocationInput = {
    id?: number
    date: Date | string
    CUST_ID?: number | null
  }

  export type InvoiceCreateOrConnectWithoutLocationInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutLocationInput, InvoiceUncheckedCreateWithoutLocationInput>
  }

  export type InvoiceCreateManyLocationInputEnvelope = {
    data: InvoiceCreateManyLocationInput | InvoiceCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type KeyCreateWithoutLocationInput = {
    issueDate: Date | string
    returnDate?: Date | string | null
    cust?: UserCreateNestedOneWithoutKeysInput
  }

  export type KeyUncheckedCreateWithoutLocationInput = {
    id?: number
    issueDate: Date | string
    returnDate?: Date | string | null
    CUST_ID?: number | null
  }

  export type KeyCreateOrConnectWithoutLocationInput = {
    where: KeyWhereUniqueInput
    create: XOR<KeyCreateWithoutLocationInput, KeyUncheckedCreateWithoutLocationInput>
  }

  export type KeyCreateManyLocationInputEnvelope = {
    data: KeyCreateManyLocationInput | KeyCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type LeaseContractCreateWithoutLocationInput = {
    startDate: Date | string
    endDate: Date | string
    finishedDate?: Date | string | null
    rentAmount: number
    active?: boolean
    cancelled?: boolean
    createdAt?: Date | string
    pdfPath?: string | null
    cust?: UserCreateNestedOneWithoutLeaseContractsAsCustInput
    renter: UserCreateNestedOneWithoutLeaseContractsAsRenterInput
  }

  export type LeaseContractUncheckedCreateWithoutLocationInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    finishedDate?: Date | string | null
    rentAmount: number
    active?: boolean
    cancelled?: boolean
    createdAt?: Date | string
    pdfPath?: string | null
    CUST_ID?: number | null
    renterId: number
  }

  export type LeaseContractCreateOrConnectWithoutLocationInput = {
    where: LeaseContractWhereUniqueInput
    create: XOR<LeaseContractCreateWithoutLocationInput, LeaseContractUncheckedCreateWithoutLocationInput>
  }

  export type LeaseContractCreateManyLocationInputEnvelope = {
    data: LeaseContractCreateManyLocationInput | LeaseContractCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutLocationInput = {
    email: string
    isRenter?: boolean
    accessToken?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    createdAt?: Date | string
    password?: string | null
    updatedAt?: Date | string | null
    dni: number
    invoices?: InvoiceCreateNestedManyWithoutCustInput
    keys?: KeyCreateNestedManyWithoutCustInput
    leaseContractsAsCust?: LeaseContractCreateNestedManyWithoutCustInput
    leaseContractsAsRenter?: LeaseContractCreateNestedManyWithoutRenterInput
    rentedLocations?: LocationCreateNestedManyWithoutRenterInput
    payments?: PaymentCreateNestedManyWithoutCustInput
    PaymentRecord?: PaymentRecordCreateNestedManyWithoutCustInput
    paymentSchedules?: PaymentScheduleCreateNestedManyWithoutCustInput
    priceAdjustments?: PriceAdjustmentCreateNestedManyWithoutCustInput
    RentHistory?: RentHistoryCreateNestedManyWithoutCustInput
    cust?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCustInput
  }

  export type UserUncheckedCreateWithoutLocationInput = {
    id?: number
    email: string
    isRenter?: boolean
    accessToken?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    createdAt?: Date | string
    password?: string | null
    updatedAt?: Date | string | null
    CUST_ID?: number | null
    dni: number
    invoices?: InvoiceUncheckedCreateNestedManyWithoutCustInput
    keys?: KeyUncheckedCreateNestedManyWithoutCustInput
    leaseContractsAsCust?: LeaseContractUncheckedCreateNestedManyWithoutCustInput
    leaseContractsAsRenter?: LeaseContractUncheckedCreateNestedManyWithoutRenterInput
    rentedLocations?: LocationUncheckedCreateNestedManyWithoutRenterInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCustInput
    PaymentRecord?: PaymentRecordUncheckedCreateNestedManyWithoutCustInput
    paymentSchedules?: PaymentScheduleUncheckedCreateNestedManyWithoutCustInput
    priceAdjustments?: PriceAdjustmentUncheckedCreateNestedManyWithoutCustInput
    RentHistory?: RentHistoryUncheckedCreateNestedManyWithoutCustInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCustInput
  }

  export type UserCreateOrConnectWithoutLocationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLocationInput, UserUncheckedCreateWithoutLocationInput>
  }

  export type UserCreateWithoutRentedLocationsInput = {
    email: string
    isRenter?: boolean
    accessToken?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    createdAt?: Date | string
    password?: string | null
    updatedAt?: Date | string | null
    dni: number
    invoices?: InvoiceCreateNestedManyWithoutCustInput
    keys?: KeyCreateNestedManyWithoutCustInput
    leaseContractsAsCust?: LeaseContractCreateNestedManyWithoutCustInput
    leaseContractsAsRenter?: LeaseContractCreateNestedManyWithoutRenterInput
    Location?: LocationCreateNestedManyWithoutCustInput
    payments?: PaymentCreateNestedManyWithoutCustInput
    PaymentRecord?: PaymentRecordCreateNestedManyWithoutCustInput
    paymentSchedules?: PaymentScheduleCreateNestedManyWithoutCustInput
    priceAdjustments?: PriceAdjustmentCreateNestedManyWithoutCustInput
    RentHistory?: RentHistoryCreateNestedManyWithoutCustInput
    cust?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCustInput
  }

  export type UserUncheckedCreateWithoutRentedLocationsInput = {
    id?: number
    email: string
    isRenter?: boolean
    accessToken?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    createdAt?: Date | string
    password?: string | null
    updatedAt?: Date | string | null
    CUST_ID?: number | null
    dni: number
    invoices?: InvoiceUncheckedCreateNestedManyWithoutCustInput
    keys?: KeyUncheckedCreateNestedManyWithoutCustInput
    leaseContractsAsCust?: LeaseContractUncheckedCreateNestedManyWithoutCustInput
    leaseContractsAsRenter?: LeaseContractUncheckedCreateNestedManyWithoutRenterInput
    Location?: LocationUncheckedCreateNestedManyWithoutCustInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCustInput
    PaymentRecord?: PaymentRecordUncheckedCreateNestedManyWithoutCustInput
    paymentSchedules?: PaymentScheduleUncheckedCreateNestedManyWithoutCustInput
    priceAdjustments?: PriceAdjustmentUncheckedCreateNestedManyWithoutCustInput
    RentHistory?: RentHistoryUncheckedCreateNestedManyWithoutCustInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCustInput
  }

  export type UserCreateOrConnectWithoutRentedLocationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRentedLocationsInput, UserUncheckedCreateWithoutRentedLocationsInput>
  }

  export type PaymentCreateWithoutLocationInput = {
    date?: Date | string
    amount: number
    month: number
    year: number
    cust?: UserCreateNestedOneWithoutPaymentsInput
    paymentMethod: PaymentMethodCreateNestedOneWithoutPaymentsInput
    paymentRecord: PaymentRecordCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutLocationInput = {
    id?: number
    date?: Date | string
    amount: number
    paymentMethodId: number
    CUST_ID?: number | null
    paymentRecordId: number
    month: number
    year: number
  }

  export type PaymentCreateOrConnectWithoutLocationInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutLocationInput, PaymentUncheckedCreateWithoutLocationInput>
  }

  export type PaymentCreateManyLocationInputEnvelope = {
    data: PaymentCreateManyLocationInput | PaymentCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type PaymentRecordCreateWithoutLocationInput = {
    month: number
    year: number
    remainingAmount?: number
    totalPaid?: number
    totalRent: number
    payments?: PaymentCreateNestedManyWithoutPaymentRecordInput
    cust?: UserCreateNestedOneWithoutPaymentRecordInput
  }

  export type PaymentRecordUncheckedCreateWithoutLocationInput = {
    id?: number
    month: number
    year: number
    CUST_ID?: number | null
    remainingAmount?: number
    totalPaid?: number
    totalRent: number
    payments?: PaymentUncheckedCreateNestedManyWithoutPaymentRecordInput
  }

  export type PaymentRecordCreateOrConnectWithoutLocationInput = {
    where: PaymentRecordWhereUniqueInput
    create: XOR<PaymentRecordCreateWithoutLocationInput, PaymentRecordUncheckedCreateWithoutLocationInput>
  }

  export type PaymentRecordCreateManyLocationInputEnvelope = {
    data: PaymentRecordCreateManyLocationInput | PaymentRecordCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type PaymentScheduleCreateWithoutLocationInput = {
    dueDate: Date | string
    cust?: UserCreateNestedOneWithoutPaymentSchedulesInput
  }

  export type PaymentScheduleUncheckedCreateWithoutLocationInput = {
    id?: number
    dueDate: Date | string
    CUST_ID?: number | null
  }

  export type PaymentScheduleCreateOrConnectWithoutLocationInput = {
    where: PaymentScheduleWhereUniqueInput
    create: XOR<PaymentScheduleCreateWithoutLocationInput, PaymentScheduleUncheckedCreateWithoutLocationInput>
  }

  export type PaymentScheduleCreateManyLocationInputEnvelope = {
    data: PaymentScheduleCreateManyLocationInput | PaymentScheduleCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type RentHistoryCreateWithoutLocationInput = {
    month: number
    year: number
    rentAmount: number
    createdAt?: Date | string
    cust?: UserCreateNestedOneWithoutRentHistoryInput
  }

  export type RentHistoryUncheckedCreateWithoutLocationInput = {
    id?: number
    month: number
    year: number
    rentAmount: number
    createdAt?: Date | string
    CUST_ID?: number | null
  }

  export type RentHistoryCreateOrConnectWithoutLocationInput = {
    where: RentHistoryWhereUniqueInput
    create: XOR<RentHistoryCreateWithoutLocationInput, RentHistoryUncheckedCreateWithoutLocationInput>
  }

  export type RentHistoryCreateManyLocationInputEnvelope = {
    data: RentHistoryCreateManyLocationInput | RentHistoryCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type PriceAdjustmentCreateWithoutLocationsInput = {
    amount: number
    period: number
    status: number
    applyToAll: boolean
    type: number
    createdAt?: Date | string
    lastExecutedAt?: Date | string | null
    updatedAt?: Date | string
    AdjustmentLocation?: AdjustmentLocationCreateNestedManyWithoutPriceAdjustmentInput
    cust?: UserCreateNestedOneWithoutPriceAdjustmentsInput
  }

  export type PriceAdjustmentUncheckedCreateWithoutLocationsInput = {
    id?: number
    CUST_ID?: number | null
    amount: number
    period: number
    status: number
    applyToAll: boolean
    type: number
    createdAt?: Date | string
    lastExecutedAt?: Date | string | null
    updatedAt?: Date | string
    AdjustmentLocation?: AdjustmentLocationUncheckedCreateNestedManyWithoutPriceAdjustmentInput
  }

  export type PriceAdjustmentCreateOrConnectWithoutLocationsInput = {
    where: PriceAdjustmentWhereUniqueInput
    create: XOR<PriceAdjustmentCreateWithoutLocationsInput, PriceAdjustmentUncheckedCreateWithoutLocationsInput>
  }

  export type AdjustmentLocationUpsertWithWhereUniqueWithoutLocationInput = {
    where: AdjustmentLocationWhereUniqueInput
    update: XOR<AdjustmentLocationUpdateWithoutLocationInput, AdjustmentLocationUncheckedUpdateWithoutLocationInput>
    create: XOR<AdjustmentLocationCreateWithoutLocationInput, AdjustmentLocationUncheckedCreateWithoutLocationInput>
  }

  export type AdjustmentLocationUpdateWithWhereUniqueWithoutLocationInput = {
    where: AdjustmentLocationWhereUniqueInput
    data: XOR<AdjustmentLocationUpdateWithoutLocationInput, AdjustmentLocationUncheckedUpdateWithoutLocationInput>
  }

  export type AdjustmentLocationUpdateManyWithWhereWithoutLocationInput = {
    where: AdjustmentLocationScalarWhereInput
    data: XOR<AdjustmentLocationUpdateManyMutationInput, AdjustmentLocationUncheckedUpdateManyWithoutLocationInput>
  }

  export type AdjustmentLocationScalarWhereInput = {
    AND?: AdjustmentLocationScalarWhereInput | AdjustmentLocationScalarWhereInput[]
    OR?: AdjustmentLocationScalarWhereInput[]
    NOT?: AdjustmentLocationScalarWhereInput | AdjustmentLocationScalarWhereInput[]
    id?: IntFilter<"AdjustmentLocation"> | number
    priceAdjustmentId?: IntFilter<"AdjustmentLocation"> | number
    locationId?: IntFilter<"AdjustmentLocation"> | number
  }

  export type InvoiceUpsertWithWhereUniqueWithoutLocationInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutLocationInput, InvoiceUncheckedUpdateWithoutLocationInput>
    create: XOR<InvoiceCreateWithoutLocationInput, InvoiceUncheckedCreateWithoutLocationInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutLocationInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutLocationInput, InvoiceUncheckedUpdateWithoutLocationInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutLocationInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutLocationInput>
  }

  export type KeyUpsertWithWhereUniqueWithoutLocationInput = {
    where: KeyWhereUniqueInput
    update: XOR<KeyUpdateWithoutLocationInput, KeyUncheckedUpdateWithoutLocationInput>
    create: XOR<KeyCreateWithoutLocationInput, KeyUncheckedCreateWithoutLocationInput>
  }

  export type KeyUpdateWithWhereUniqueWithoutLocationInput = {
    where: KeyWhereUniqueInput
    data: XOR<KeyUpdateWithoutLocationInput, KeyUncheckedUpdateWithoutLocationInput>
  }

  export type KeyUpdateManyWithWhereWithoutLocationInput = {
    where: KeyScalarWhereInput
    data: XOR<KeyUpdateManyMutationInput, KeyUncheckedUpdateManyWithoutLocationInput>
  }

  export type LeaseContractUpsertWithWhereUniqueWithoutLocationInput = {
    where: LeaseContractWhereUniqueInput
    update: XOR<LeaseContractUpdateWithoutLocationInput, LeaseContractUncheckedUpdateWithoutLocationInput>
    create: XOR<LeaseContractCreateWithoutLocationInput, LeaseContractUncheckedCreateWithoutLocationInput>
  }

  export type LeaseContractUpdateWithWhereUniqueWithoutLocationInput = {
    where: LeaseContractWhereUniqueInput
    data: XOR<LeaseContractUpdateWithoutLocationInput, LeaseContractUncheckedUpdateWithoutLocationInput>
  }

  export type LeaseContractUpdateManyWithWhereWithoutLocationInput = {
    where: LeaseContractScalarWhereInput
    data: XOR<LeaseContractUpdateManyMutationInput, LeaseContractUncheckedUpdateManyWithoutLocationInput>
  }

  export type UserUpsertWithoutLocationInput = {
    update: XOR<UserUpdateWithoutLocationInput, UserUncheckedUpdateWithoutLocationInput>
    create: XOR<UserCreateWithoutLocationInput, UserUncheckedCreateWithoutLocationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLocationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLocationInput, UserUncheckedUpdateWithoutLocationInput>
  }

  export type UserUpdateWithoutLocationInput = {
    email?: StringFieldUpdateOperationsInput | string
    isRenter?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dni?: IntFieldUpdateOperationsInput | number
    invoices?: InvoiceUpdateManyWithoutCustNestedInput
    keys?: KeyUpdateManyWithoutCustNestedInput
    leaseContractsAsCust?: LeaseContractUpdateManyWithoutCustNestedInput
    leaseContractsAsRenter?: LeaseContractUpdateManyWithoutRenterNestedInput
    rentedLocations?: LocationUpdateManyWithoutRenterNestedInput
    payments?: PaymentUpdateManyWithoutCustNestedInput
    PaymentRecord?: PaymentRecordUpdateManyWithoutCustNestedInput
    paymentSchedules?: PaymentScheduleUpdateManyWithoutCustNestedInput
    priceAdjustments?: PriceAdjustmentUpdateManyWithoutCustNestedInput
    RentHistory?: RentHistoryUpdateManyWithoutCustNestedInput
    cust?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCustNestedInput
  }

  export type UserUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    isRenter?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    dni?: IntFieldUpdateOperationsInput | number
    invoices?: InvoiceUncheckedUpdateManyWithoutCustNestedInput
    keys?: KeyUncheckedUpdateManyWithoutCustNestedInput
    leaseContractsAsCust?: LeaseContractUncheckedUpdateManyWithoutCustNestedInput
    leaseContractsAsRenter?: LeaseContractUncheckedUpdateManyWithoutRenterNestedInput
    rentedLocations?: LocationUncheckedUpdateManyWithoutRenterNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCustNestedInput
    PaymentRecord?: PaymentRecordUncheckedUpdateManyWithoutCustNestedInput
    paymentSchedules?: PaymentScheduleUncheckedUpdateManyWithoutCustNestedInput
    priceAdjustments?: PriceAdjustmentUncheckedUpdateManyWithoutCustNestedInput
    RentHistory?: RentHistoryUncheckedUpdateManyWithoutCustNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCustNestedInput
  }

  export type UserUpsertWithoutRentedLocationsInput = {
    update: XOR<UserUpdateWithoutRentedLocationsInput, UserUncheckedUpdateWithoutRentedLocationsInput>
    create: XOR<UserCreateWithoutRentedLocationsInput, UserUncheckedCreateWithoutRentedLocationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRentedLocationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRentedLocationsInput, UserUncheckedUpdateWithoutRentedLocationsInput>
  }

  export type UserUpdateWithoutRentedLocationsInput = {
    email?: StringFieldUpdateOperationsInput | string
    isRenter?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dni?: IntFieldUpdateOperationsInput | number
    invoices?: InvoiceUpdateManyWithoutCustNestedInput
    keys?: KeyUpdateManyWithoutCustNestedInput
    leaseContractsAsCust?: LeaseContractUpdateManyWithoutCustNestedInput
    leaseContractsAsRenter?: LeaseContractUpdateManyWithoutRenterNestedInput
    Location?: LocationUpdateManyWithoutCustNestedInput
    payments?: PaymentUpdateManyWithoutCustNestedInput
    PaymentRecord?: PaymentRecordUpdateManyWithoutCustNestedInput
    paymentSchedules?: PaymentScheduleUpdateManyWithoutCustNestedInput
    priceAdjustments?: PriceAdjustmentUpdateManyWithoutCustNestedInput
    RentHistory?: RentHistoryUpdateManyWithoutCustNestedInput
    cust?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCustNestedInput
  }

  export type UserUncheckedUpdateWithoutRentedLocationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    isRenter?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    dni?: IntFieldUpdateOperationsInput | number
    invoices?: InvoiceUncheckedUpdateManyWithoutCustNestedInput
    keys?: KeyUncheckedUpdateManyWithoutCustNestedInput
    leaseContractsAsCust?: LeaseContractUncheckedUpdateManyWithoutCustNestedInput
    leaseContractsAsRenter?: LeaseContractUncheckedUpdateManyWithoutRenterNestedInput
    Location?: LocationUncheckedUpdateManyWithoutCustNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCustNestedInput
    PaymentRecord?: PaymentRecordUncheckedUpdateManyWithoutCustNestedInput
    paymentSchedules?: PaymentScheduleUncheckedUpdateManyWithoutCustNestedInput
    priceAdjustments?: PriceAdjustmentUncheckedUpdateManyWithoutCustNestedInput
    RentHistory?: RentHistoryUncheckedUpdateManyWithoutCustNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCustNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutLocationInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutLocationInput, PaymentUncheckedUpdateWithoutLocationInput>
    create: XOR<PaymentCreateWithoutLocationInput, PaymentUncheckedCreateWithoutLocationInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutLocationInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutLocationInput, PaymentUncheckedUpdateWithoutLocationInput>
  }

  export type PaymentUpdateManyWithWhereWithoutLocationInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutLocationInput>
  }

  export type PaymentRecordUpsertWithWhereUniqueWithoutLocationInput = {
    where: PaymentRecordWhereUniqueInput
    update: XOR<PaymentRecordUpdateWithoutLocationInput, PaymentRecordUncheckedUpdateWithoutLocationInput>
    create: XOR<PaymentRecordCreateWithoutLocationInput, PaymentRecordUncheckedCreateWithoutLocationInput>
  }

  export type PaymentRecordUpdateWithWhereUniqueWithoutLocationInput = {
    where: PaymentRecordWhereUniqueInput
    data: XOR<PaymentRecordUpdateWithoutLocationInput, PaymentRecordUncheckedUpdateWithoutLocationInput>
  }

  export type PaymentRecordUpdateManyWithWhereWithoutLocationInput = {
    where: PaymentRecordScalarWhereInput
    data: XOR<PaymentRecordUpdateManyMutationInput, PaymentRecordUncheckedUpdateManyWithoutLocationInput>
  }

  export type PaymentScheduleUpsertWithWhereUniqueWithoutLocationInput = {
    where: PaymentScheduleWhereUniqueInput
    update: XOR<PaymentScheduleUpdateWithoutLocationInput, PaymentScheduleUncheckedUpdateWithoutLocationInput>
    create: XOR<PaymentScheduleCreateWithoutLocationInput, PaymentScheduleUncheckedCreateWithoutLocationInput>
  }

  export type PaymentScheduleUpdateWithWhereUniqueWithoutLocationInput = {
    where: PaymentScheduleWhereUniqueInput
    data: XOR<PaymentScheduleUpdateWithoutLocationInput, PaymentScheduleUncheckedUpdateWithoutLocationInput>
  }

  export type PaymentScheduleUpdateManyWithWhereWithoutLocationInput = {
    where: PaymentScheduleScalarWhereInput
    data: XOR<PaymentScheduleUpdateManyMutationInput, PaymentScheduleUncheckedUpdateManyWithoutLocationInput>
  }

  export type RentHistoryUpsertWithWhereUniqueWithoutLocationInput = {
    where: RentHistoryWhereUniqueInput
    update: XOR<RentHistoryUpdateWithoutLocationInput, RentHistoryUncheckedUpdateWithoutLocationInput>
    create: XOR<RentHistoryCreateWithoutLocationInput, RentHistoryUncheckedCreateWithoutLocationInput>
  }

  export type RentHistoryUpdateWithWhereUniqueWithoutLocationInput = {
    where: RentHistoryWhereUniqueInput
    data: XOR<RentHistoryUpdateWithoutLocationInput, RentHistoryUncheckedUpdateWithoutLocationInput>
  }

  export type RentHistoryUpdateManyWithWhereWithoutLocationInput = {
    where: RentHistoryScalarWhereInput
    data: XOR<RentHistoryUpdateManyMutationInput, RentHistoryUncheckedUpdateManyWithoutLocationInput>
  }

  export type PriceAdjustmentUpsertWithWhereUniqueWithoutLocationsInput = {
    where: PriceAdjustmentWhereUniqueInput
    update: XOR<PriceAdjustmentUpdateWithoutLocationsInput, PriceAdjustmentUncheckedUpdateWithoutLocationsInput>
    create: XOR<PriceAdjustmentCreateWithoutLocationsInput, PriceAdjustmentUncheckedCreateWithoutLocationsInput>
  }

  export type PriceAdjustmentUpdateWithWhereUniqueWithoutLocationsInput = {
    where: PriceAdjustmentWhereUniqueInput
    data: XOR<PriceAdjustmentUpdateWithoutLocationsInput, PriceAdjustmentUncheckedUpdateWithoutLocationsInput>
  }

  export type PriceAdjustmentUpdateManyWithWhereWithoutLocationsInput = {
    where: PriceAdjustmentScalarWhereInput
    data: XOR<PriceAdjustmentUpdateManyMutationInput, PriceAdjustmentUncheckedUpdateManyWithoutLocationsInput>
  }

  export type UserCreateWithoutLeaseContractsAsCustInput = {
    email: string
    isRenter?: boolean
    accessToken?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    createdAt?: Date | string
    password?: string | null
    updatedAt?: Date | string | null
    dni: number
    invoices?: InvoiceCreateNestedManyWithoutCustInput
    keys?: KeyCreateNestedManyWithoutCustInput
    leaseContractsAsRenter?: LeaseContractCreateNestedManyWithoutRenterInput
    Location?: LocationCreateNestedManyWithoutCustInput
    rentedLocations?: LocationCreateNestedManyWithoutRenterInput
    payments?: PaymentCreateNestedManyWithoutCustInput
    PaymentRecord?: PaymentRecordCreateNestedManyWithoutCustInput
    paymentSchedules?: PaymentScheduleCreateNestedManyWithoutCustInput
    priceAdjustments?: PriceAdjustmentCreateNestedManyWithoutCustInput
    RentHistory?: RentHistoryCreateNestedManyWithoutCustInput
    cust?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCustInput
  }

  export type UserUncheckedCreateWithoutLeaseContractsAsCustInput = {
    id?: number
    email: string
    isRenter?: boolean
    accessToken?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    createdAt?: Date | string
    password?: string | null
    updatedAt?: Date | string | null
    CUST_ID?: number | null
    dni: number
    invoices?: InvoiceUncheckedCreateNestedManyWithoutCustInput
    keys?: KeyUncheckedCreateNestedManyWithoutCustInput
    leaseContractsAsRenter?: LeaseContractUncheckedCreateNestedManyWithoutRenterInput
    Location?: LocationUncheckedCreateNestedManyWithoutCustInput
    rentedLocations?: LocationUncheckedCreateNestedManyWithoutRenterInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCustInput
    PaymentRecord?: PaymentRecordUncheckedCreateNestedManyWithoutCustInput
    paymentSchedules?: PaymentScheduleUncheckedCreateNestedManyWithoutCustInput
    priceAdjustments?: PriceAdjustmentUncheckedCreateNestedManyWithoutCustInput
    RentHistory?: RentHistoryUncheckedCreateNestedManyWithoutCustInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCustInput
  }

  export type UserCreateOrConnectWithoutLeaseContractsAsCustInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLeaseContractsAsCustInput, UserUncheckedCreateWithoutLeaseContractsAsCustInput>
  }

  export type LocationCreateWithoutContractsInput = {
    name: string
    address: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    AdjustmentLocation?: AdjustmentLocationCreateNestedManyWithoutLocationInput
    invoices?: InvoiceCreateNestedManyWithoutLocationInput
    keys?: KeyCreateNestedManyWithoutLocationInput
    cust?: UserCreateNestedOneWithoutLocationInput
    renter: UserCreateNestedOneWithoutRentedLocationsInput
    payments?: PaymentCreateNestedManyWithoutLocationInput
    PaymentRecord?: PaymentRecordCreateNestedManyWithoutLocationInput
    paymentSchedules?: PaymentScheduleCreateNestedManyWithoutLocationInput
    rentHistory?: RentHistoryCreateNestedManyWithoutLocationInput
    adjustments?: PriceAdjustmentCreateNestedManyWithoutLocationsInput
  }

  export type LocationUncheckedCreateWithoutContractsInput = {
    id?: number
    name: string
    address: string
    renterId: number
    CUST_ID?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    AdjustmentLocation?: AdjustmentLocationUncheckedCreateNestedManyWithoutLocationInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutLocationInput
    keys?: KeyUncheckedCreateNestedManyWithoutLocationInput
    payments?: PaymentUncheckedCreateNestedManyWithoutLocationInput
    PaymentRecord?: PaymentRecordUncheckedCreateNestedManyWithoutLocationInput
    paymentSchedules?: PaymentScheduleUncheckedCreateNestedManyWithoutLocationInput
    rentHistory?: RentHistoryUncheckedCreateNestedManyWithoutLocationInput
    adjustments?: PriceAdjustmentUncheckedCreateNestedManyWithoutLocationsInput
  }

  export type LocationCreateOrConnectWithoutContractsInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutContractsInput, LocationUncheckedCreateWithoutContractsInput>
  }

  export type UserCreateWithoutLeaseContractsAsRenterInput = {
    email: string
    isRenter?: boolean
    accessToken?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    createdAt?: Date | string
    password?: string | null
    updatedAt?: Date | string | null
    dni: number
    invoices?: InvoiceCreateNestedManyWithoutCustInput
    keys?: KeyCreateNestedManyWithoutCustInput
    leaseContractsAsCust?: LeaseContractCreateNestedManyWithoutCustInput
    Location?: LocationCreateNestedManyWithoutCustInput
    rentedLocations?: LocationCreateNestedManyWithoutRenterInput
    payments?: PaymentCreateNestedManyWithoutCustInput
    PaymentRecord?: PaymentRecordCreateNestedManyWithoutCustInput
    paymentSchedules?: PaymentScheduleCreateNestedManyWithoutCustInput
    priceAdjustments?: PriceAdjustmentCreateNestedManyWithoutCustInput
    RentHistory?: RentHistoryCreateNestedManyWithoutCustInput
    cust?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCustInput
  }

  export type UserUncheckedCreateWithoutLeaseContractsAsRenterInput = {
    id?: number
    email: string
    isRenter?: boolean
    accessToken?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    createdAt?: Date | string
    password?: string | null
    updatedAt?: Date | string | null
    CUST_ID?: number | null
    dni: number
    invoices?: InvoiceUncheckedCreateNestedManyWithoutCustInput
    keys?: KeyUncheckedCreateNestedManyWithoutCustInput
    leaseContractsAsCust?: LeaseContractUncheckedCreateNestedManyWithoutCustInput
    Location?: LocationUncheckedCreateNestedManyWithoutCustInput
    rentedLocations?: LocationUncheckedCreateNestedManyWithoutRenterInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCustInput
    PaymentRecord?: PaymentRecordUncheckedCreateNestedManyWithoutCustInput
    paymentSchedules?: PaymentScheduleUncheckedCreateNestedManyWithoutCustInput
    priceAdjustments?: PriceAdjustmentUncheckedCreateNestedManyWithoutCustInput
    RentHistory?: RentHistoryUncheckedCreateNestedManyWithoutCustInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCustInput
  }

  export type UserCreateOrConnectWithoutLeaseContractsAsRenterInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLeaseContractsAsRenterInput, UserUncheckedCreateWithoutLeaseContractsAsRenterInput>
  }

  export type UserUpsertWithoutLeaseContractsAsCustInput = {
    update: XOR<UserUpdateWithoutLeaseContractsAsCustInput, UserUncheckedUpdateWithoutLeaseContractsAsCustInput>
    create: XOR<UserCreateWithoutLeaseContractsAsCustInput, UserUncheckedCreateWithoutLeaseContractsAsCustInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLeaseContractsAsCustInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLeaseContractsAsCustInput, UserUncheckedUpdateWithoutLeaseContractsAsCustInput>
  }

  export type UserUpdateWithoutLeaseContractsAsCustInput = {
    email?: StringFieldUpdateOperationsInput | string
    isRenter?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dni?: IntFieldUpdateOperationsInput | number
    invoices?: InvoiceUpdateManyWithoutCustNestedInput
    keys?: KeyUpdateManyWithoutCustNestedInput
    leaseContractsAsRenter?: LeaseContractUpdateManyWithoutRenterNestedInput
    Location?: LocationUpdateManyWithoutCustNestedInput
    rentedLocations?: LocationUpdateManyWithoutRenterNestedInput
    payments?: PaymentUpdateManyWithoutCustNestedInput
    PaymentRecord?: PaymentRecordUpdateManyWithoutCustNestedInput
    paymentSchedules?: PaymentScheduleUpdateManyWithoutCustNestedInput
    priceAdjustments?: PriceAdjustmentUpdateManyWithoutCustNestedInput
    RentHistory?: RentHistoryUpdateManyWithoutCustNestedInput
    cust?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCustNestedInput
  }

  export type UserUncheckedUpdateWithoutLeaseContractsAsCustInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    isRenter?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    dni?: IntFieldUpdateOperationsInput | number
    invoices?: InvoiceUncheckedUpdateManyWithoutCustNestedInput
    keys?: KeyUncheckedUpdateManyWithoutCustNestedInput
    leaseContractsAsRenter?: LeaseContractUncheckedUpdateManyWithoutRenterNestedInput
    Location?: LocationUncheckedUpdateManyWithoutCustNestedInput
    rentedLocations?: LocationUncheckedUpdateManyWithoutRenterNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCustNestedInput
    PaymentRecord?: PaymentRecordUncheckedUpdateManyWithoutCustNestedInput
    paymentSchedules?: PaymentScheduleUncheckedUpdateManyWithoutCustNestedInput
    priceAdjustments?: PriceAdjustmentUncheckedUpdateManyWithoutCustNestedInput
    RentHistory?: RentHistoryUncheckedUpdateManyWithoutCustNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCustNestedInput
  }

  export type LocationUpsertWithoutContractsInput = {
    update: XOR<LocationUpdateWithoutContractsInput, LocationUncheckedUpdateWithoutContractsInput>
    create: XOR<LocationCreateWithoutContractsInput, LocationUncheckedCreateWithoutContractsInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutContractsInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutContractsInput, LocationUncheckedUpdateWithoutContractsInput>
  }

  export type LocationUpdateWithoutContractsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AdjustmentLocation?: AdjustmentLocationUpdateManyWithoutLocationNestedInput
    invoices?: InvoiceUpdateManyWithoutLocationNestedInput
    keys?: KeyUpdateManyWithoutLocationNestedInput
    cust?: UserUpdateOneWithoutLocationNestedInput
    renter?: UserUpdateOneRequiredWithoutRentedLocationsNestedInput
    payments?: PaymentUpdateManyWithoutLocationNestedInput
    PaymentRecord?: PaymentRecordUpdateManyWithoutLocationNestedInput
    paymentSchedules?: PaymentScheduleUpdateManyWithoutLocationNestedInput
    rentHistory?: RentHistoryUpdateManyWithoutLocationNestedInput
    adjustments?: PriceAdjustmentUpdateManyWithoutLocationsNestedInput
  }

  export type LocationUncheckedUpdateWithoutContractsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    renterId?: IntFieldUpdateOperationsInput | number
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AdjustmentLocation?: AdjustmentLocationUncheckedUpdateManyWithoutLocationNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutLocationNestedInput
    keys?: KeyUncheckedUpdateManyWithoutLocationNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutLocationNestedInput
    PaymentRecord?: PaymentRecordUncheckedUpdateManyWithoutLocationNestedInput
    paymentSchedules?: PaymentScheduleUncheckedUpdateManyWithoutLocationNestedInput
    rentHistory?: RentHistoryUncheckedUpdateManyWithoutLocationNestedInput
    adjustments?: PriceAdjustmentUncheckedUpdateManyWithoutLocationsNestedInput
  }

  export type UserUpsertWithoutLeaseContractsAsRenterInput = {
    update: XOR<UserUpdateWithoutLeaseContractsAsRenterInput, UserUncheckedUpdateWithoutLeaseContractsAsRenterInput>
    create: XOR<UserCreateWithoutLeaseContractsAsRenterInput, UserUncheckedCreateWithoutLeaseContractsAsRenterInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLeaseContractsAsRenterInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLeaseContractsAsRenterInput, UserUncheckedUpdateWithoutLeaseContractsAsRenterInput>
  }

  export type UserUpdateWithoutLeaseContractsAsRenterInput = {
    email?: StringFieldUpdateOperationsInput | string
    isRenter?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dni?: IntFieldUpdateOperationsInput | number
    invoices?: InvoiceUpdateManyWithoutCustNestedInput
    keys?: KeyUpdateManyWithoutCustNestedInput
    leaseContractsAsCust?: LeaseContractUpdateManyWithoutCustNestedInput
    Location?: LocationUpdateManyWithoutCustNestedInput
    rentedLocations?: LocationUpdateManyWithoutRenterNestedInput
    payments?: PaymentUpdateManyWithoutCustNestedInput
    PaymentRecord?: PaymentRecordUpdateManyWithoutCustNestedInput
    paymentSchedules?: PaymentScheduleUpdateManyWithoutCustNestedInput
    priceAdjustments?: PriceAdjustmentUpdateManyWithoutCustNestedInput
    RentHistory?: RentHistoryUpdateManyWithoutCustNestedInput
    cust?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCustNestedInput
  }

  export type UserUncheckedUpdateWithoutLeaseContractsAsRenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    isRenter?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    dni?: IntFieldUpdateOperationsInput | number
    invoices?: InvoiceUncheckedUpdateManyWithoutCustNestedInput
    keys?: KeyUncheckedUpdateManyWithoutCustNestedInput
    leaseContractsAsCust?: LeaseContractUncheckedUpdateManyWithoutCustNestedInput
    Location?: LocationUncheckedUpdateManyWithoutCustNestedInput
    rentedLocations?: LocationUncheckedUpdateManyWithoutRenterNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCustNestedInput
    PaymentRecord?: PaymentRecordUncheckedUpdateManyWithoutCustNestedInput
    paymentSchedules?: PaymentScheduleUncheckedUpdateManyWithoutCustNestedInput
    priceAdjustments?: PriceAdjustmentUncheckedUpdateManyWithoutCustNestedInput
    RentHistory?: RentHistoryUncheckedUpdateManyWithoutCustNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCustNestedInput
  }

  export type UserCreateWithoutKeysInput = {
    email: string
    isRenter?: boolean
    accessToken?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    createdAt?: Date | string
    password?: string | null
    updatedAt?: Date | string | null
    dni: number
    invoices?: InvoiceCreateNestedManyWithoutCustInput
    leaseContractsAsCust?: LeaseContractCreateNestedManyWithoutCustInput
    leaseContractsAsRenter?: LeaseContractCreateNestedManyWithoutRenterInput
    Location?: LocationCreateNestedManyWithoutCustInput
    rentedLocations?: LocationCreateNestedManyWithoutRenterInput
    payments?: PaymentCreateNestedManyWithoutCustInput
    PaymentRecord?: PaymentRecordCreateNestedManyWithoutCustInput
    paymentSchedules?: PaymentScheduleCreateNestedManyWithoutCustInput
    priceAdjustments?: PriceAdjustmentCreateNestedManyWithoutCustInput
    RentHistory?: RentHistoryCreateNestedManyWithoutCustInput
    cust?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCustInput
  }

  export type UserUncheckedCreateWithoutKeysInput = {
    id?: number
    email: string
    isRenter?: boolean
    accessToken?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    createdAt?: Date | string
    password?: string | null
    updatedAt?: Date | string | null
    CUST_ID?: number | null
    dni: number
    invoices?: InvoiceUncheckedCreateNestedManyWithoutCustInput
    leaseContractsAsCust?: LeaseContractUncheckedCreateNestedManyWithoutCustInput
    leaseContractsAsRenter?: LeaseContractUncheckedCreateNestedManyWithoutRenterInput
    Location?: LocationUncheckedCreateNestedManyWithoutCustInput
    rentedLocations?: LocationUncheckedCreateNestedManyWithoutRenterInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCustInput
    PaymentRecord?: PaymentRecordUncheckedCreateNestedManyWithoutCustInput
    paymentSchedules?: PaymentScheduleUncheckedCreateNestedManyWithoutCustInput
    priceAdjustments?: PriceAdjustmentUncheckedCreateNestedManyWithoutCustInput
    RentHistory?: RentHistoryUncheckedCreateNestedManyWithoutCustInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCustInput
  }

  export type UserCreateOrConnectWithoutKeysInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutKeysInput, UserUncheckedCreateWithoutKeysInput>
  }

  export type LocationCreateWithoutKeysInput = {
    name: string
    address: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    AdjustmentLocation?: AdjustmentLocationCreateNestedManyWithoutLocationInput
    invoices?: InvoiceCreateNestedManyWithoutLocationInput
    contracts?: LeaseContractCreateNestedManyWithoutLocationInput
    cust?: UserCreateNestedOneWithoutLocationInput
    renter: UserCreateNestedOneWithoutRentedLocationsInput
    payments?: PaymentCreateNestedManyWithoutLocationInput
    PaymentRecord?: PaymentRecordCreateNestedManyWithoutLocationInput
    paymentSchedules?: PaymentScheduleCreateNestedManyWithoutLocationInput
    rentHistory?: RentHistoryCreateNestedManyWithoutLocationInput
    adjustments?: PriceAdjustmentCreateNestedManyWithoutLocationsInput
  }

  export type LocationUncheckedCreateWithoutKeysInput = {
    id?: number
    name: string
    address: string
    renterId: number
    CUST_ID?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    AdjustmentLocation?: AdjustmentLocationUncheckedCreateNestedManyWithoutLocationInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutLocationInput
    contracts?: LeaseContractUncheckedCreateNestedManyWithoutLocationInput
    payments?: PaymentUncheckedCreateNestedManyWithoutLocationInput
    PaymentRecord?: PaymentRecordUncheckedCreateNestedManyWithoutLocationInput
    paymentSchedules?: PaymentScheduleUncheckedCreateNestedManyWithoutLocationInput
    rentHistory?: RentHistoryUncheckedCreateNestedManyWithoutLocationInput
    adjustments?: PriceAdjustmentUncheckedCreateNestedManyWithoutLocationsInput
  }

  export type LocationCreateOrConnectWithoutKeysInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutKeysInput, LocationUncheckedCreateWithoutKeysInput>
  }

  export type UserUpsertWithoutKeysInput = {
    update: XOR<UserUpdateWithoutKeysInput, UserUncheckedUpdateWithoutKeysInput>
    create: XOR<UserCreateWithoutKeysInput, UserUncheckedCreateWithoutKeysInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutKeysInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutKeysInput, UserUncheckedUpdateWithoutKeysInput>
  }

  export type UserUpdateWithoutKeysInput = {
    email?: StringFieldUpdateOperationsInput | string
    isRenter?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dni?: IntFieldUpdateOperationsInput | number
    invoices?: InvoiceUpdateManyWithoutCustNestedInput
    leaseContractsAsCust?: LeaseContractUpdateManyWithoutCustNestedInput
    leaseContractsAsRenter?: LeaseContractUpdateManyWithoutRenterNestedInput
    Location?: LocationUpdateManyWithoutCustNestedInput
    rentedLocations?: LocationUpdateManyWithoutRenterNestedInput
    payments?: PaymentUpdateManyWithoutCustNestedInput
    PaymentRecord?: PaymentRecordUpdateManyWithoutCustNestedInput
    paymentSchedules?: PaymentScheduleUpdateManyWithoutCustNestedInput
    priceAdjustments?: PriceAdjustmentUpdateManyWithoutCustNestedInput
    RentHistory?: RentHistoryUpdateManyWithoutCustNestedInput
    cust?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCustNestedInput
  }

  export type UserUncheckedUpdateWithoutKeysInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    isRenter?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    dni?: IntFieldUpdateOperationsInput | number
    invoices?: InvoiceUncheckedUpdateManyWithoutCustNestedInput
    leaseContractsAsCust?: LeaseContractUncheckedUpdateManyWithoutCustNestedInput
    leaseContractsAsRenter?: LeaseContractUncheckedUpdateManyWithoutRenterNestedInput
    Location?: LocationUncheckedUpdateManyWithoutCustNestedInput
    rentedLocations?: LocationUncheckedUpdateManyWithoutRenterNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCustNestedInput
    PaymentRecord?: PaymentRecordUncheckedUpdateManyWithoutCustNestedInput
    paymentSchedules?: PaymentScheduleUncheckedUpdateManyWithoutCustNestedInput
    priceAdjustments?: PriceAdjustmentUncheckedUpdateManyWithoutCustNestedInput
    RentHistory?: RentHistoryUncheckedUpdateManyWithoutCustNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCustNestedInput
  }

  export type LocationUpsertWithoutKeysInput = {
    update: XOR<LocationUpdateWithoutKeysInput, LocationUncheckedUpdateWithoutKeysInput>
    create: XOR<LocationCreateWithoutKeysInput, LocationUncheckedCreateWithoutKeysInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutKeysInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutKeysInput, LocationUncheckedUpdateWithoutKeysInput>
  }

  export type LocationUpdateWithoutKeysInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AdjustmentLocation?: AdjustmentLocationUpdateManyWithoutLocationNestedInput
    invoices?: InvoiceUpdateManyWithoutLocationNestedInput
    contracts?: LeaseContractUpdateManyWithoutLocationNestedInput
    cust?: UserUpdateOneWithoutLocationNestedInput
    renter?: UserUpdateOneRequiredWithoutRentedLocationsNestedInput
    payments?: PaymentUpdateManyWithoutLocationNestedInput
    PaymentRecord?: PaymentRecordUpdateManyWithoutLocationNestedInput
    paymentSchedules?: PaymentScheduleUpdateManyWithoutLocationNestedInput
    rentHistory?: RentHistoryUpdateManyWithoutLocationNestedInput
    adjustments?: PriceAdjustmentUpdateManyWithoutLocationsNestedInput
  }

  export type LocationUncheckedUpdateWithoutKeysInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    renterId?: IntFieldUpdateOperationsInput | number
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AdjustmentLocation?: AdjustmentLocationUncheckedUpdateManyWithoutLocationNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutLocationNestedInput
    contracts?: LeaseContractUncheckedUpdateManyWithoutLocationNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutLocationNestedInput
    PaymentRecord?: PaymentRecordUncheckedUpdateManyWithoutLocationNestedInput
    paymentSchedules?: PaymentScheduleUncheckedUpdateManyWithoutLocationNestedInput
    rentHistory?: RentHistoryUncheckedUpdateManyWithoutLocationNestedInput
    adjustments?: PriceAdjustmentUncheckedUpdateManyWithoutLocationsNestedInput
  }

  export type AdjustmentLocationCreateWithoutPriceAdjustmentInput = {
    location: LocationCreateNestedOneWithoutAdjustmentLocationInput
  }

  export type AdjustmentLocationUncheckedCreateWithoutPriceAdjustmentInput = {
    id?: number
    locationId: number
  }

  export type AdjustmentLocationCreateOrConnectWithoutPriceAdjustmentInput = {
    where: AdjustmentLocationWhereUniqueInput
    create: XOR<AdjustmentLocationCreateWithoutPriceAdjustmentInput, AdjustmentLocationUncheckedCreateWithoutPriceAdjustmentInput>
  }

  export type AdjustmentLocationCreateManyPriceAdjustmentInputEnvelope = {
    data: AdjustmentLocationCreateManyPriceAdjustmentInput | AdjustmentLocationCreateManyPriceAdjustmentInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPriceAdjustmentsInput = {
    email: string
    isRenter?: boolean
    accessToken?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    createdAt?: Date | string
    password?: string | null
    updatedAt?: Date | string | null
    dni: number
    invoices?: InvoiceCreateNestedManyWithoutCustInput
    keys?: KeyCreateNestedManyWithoutCustInput
    leaseContractsAsCust?: LeaseContractCreateNestedManyWithoutCustInput
    leaseContractsAsRenter?: LeaseContractCreateNestedManyWithoutRenterInput
    Location?: LocationCreateNestedManyWithoutCustInput
    rentedLocations?: LocationCreateNestedManyWithoutRenterInput
    payments?: PaymentCreateNestedManyWithoutCustInput
    PaymentRecord?: PaymentRecordCreateNestedManyWithoutCustInput
    paymentSchedules?: PaymentScheduleCreateNestedManyWithoutCustInput
    RentHistory?: RentHistoryCreateNestedManyWithoutCustInput
    cust?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCustInput
  }

  export type UserUncheckedCreateWithoutPriceAdjustmentsInput = {
    id?: number
    email: string
    isRenter?: boolean
    accessToken?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    createdAt?: Date | string
    password?: string | null
    updatedAt?: Date | string | null
    CUST_ID?: number | null
    dni: number
    invoices?: InvoiceUncheckedCreateNestedManyWithoutCustInput
    keys?: KeyUncheckedCreateNestedManyWithoutCustInput
    leaseContractsAsCust?: LeaseContractUncheckedCreateNestedManyWithoutCustInput
    leaseContractsAsRenter?: LeaseContractUncheckedCreateNestedManyWithoutRenterInput
    Location?: LocationUncheckedCreateNestedManyWithoutCustInput
    rentedLocations?: LocationUncheckedCreateNestedManyWithoutRenterInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCustInput
    PaymentRecord?: PaymentRecordUncheckedCreateNestedManyWithoutCustInput
    paymentSchedules?: PaymentScheduleUncheckedCreateNestedManyWithoutCustInput
    RentHistory?: RentHistoryUncheckedCreateNestedManyWithoutCustInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCustInput
  }

  export type UserCreateOrConnectWithoutPriceAdjustmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPriceAdjustmentsInput, UserUncheckedCreateWithoutPriceAdjustmentsInput>
  }

  export type LocationCreateWithoutAdjustmentsInput = {
    name: string
    address: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    AdjustmentLocation?: AdjustmentLocationCreateNestedManyWithoutLocationInput
    invoices?: InvoiceCreateNestedManyWithoutLocationInput
    keys?: KeyCreateNestedManyWithoutLocationInput
    contracts?: LeaseContractCreateNestedManyWithoutLocationInput
    cust?: UserCreateNestedOneWithoutLocationInput
    renter: UserCreateNestedOneWithoutRentedLocationsInput
    payments?: PaymentCreateNestedManyWithoutLocationInput
    PaymentRecord?: PaymentRecordCreateNestedManyWithoutLocationInput
    paymentSchedules?: PaymentScheduleCreateNestedManyWithoutLocationInput
    rentHistory?: RentHistoryCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutAdjustmentsInput = {
    id?: number
    name: string
    address: string
    renterId: number
    CUST_ID?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    AdjustmentLocation?: AdjustmentLocationUncheckedCreateNestedManyWithoutLocationInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutLocationInput
    keys?: KeyUncheckedCreateNestedManyWithoutLocationInput
    contracts?: LeaseContractUncheckedCreateNestedManyWithoutLocationInput
    payments?: PaymentUncheckedCreateNestedManyWithoutLocationInput
    PaymentRecord?: PaymentRecordUncheckedCreateNestedManyWithoutLocationInput
    paymentSchedules?: PaymentScheduleUncheckedCreateNestedManyWithoutLocationInput
    rentHistory?: RentHistoryUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutAdjustmentsInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutAdjustmentsInput, LocationUncheckedCreateWithoutAdjustmentsInput>
  }

  export type AdjustmentLocationUpsertWithWhereUniqueWithoutPriceAdjustmentInput = {
    where: AdjustmentLocationWhereUniqueInput
    update: XOR<AdjustmentLocationUpdateWithoutPriceAdjustmentInput, AdjustmentLocationUncheckedUpdateWithoutPriceAdjustmentInput>
    create: XOR<AdjustmentLocationCreateWithoutPriceAdjustmentInput, AdjustmentLocationUncheckedCreateWithoutPriceAdjustmentInput>
  }

  export type AdjustmentLocationUpdateWithWhereUniqueWithoutPriceAdjustmentInput = {
    where: AdjustmentLocationWhereUniqueInput
    data: XOR<AdjustmentLocationUpdateWithoutPriceAdjustmentInput, AdjustmentLocationUncheckedUpdateWithoutPriceAdjustmentInput>
  }

  export type AdjustmentLocationUpdateManyWithWhereWithoutPriceAdjustmentInput = {
    where: AdjustmentLocationScalarWhereInput
    data: XOR<AdjustmentLocationUpdateManyMutationInput, AdjustmentLocationUncheckedUpdateManyWithoutPriceAdjustmentInput>
  }

  export type UserUpsertWithoutPriceAdjustmentsInput = {
    update: XOR<UserUpdateWithoutPriceAdjustmentsInput, UserUncheckedUpdateWithoutPriceAdjustmentsInput>
    create: XOR<UserCreateWithoutPriceAdjustmentsInput, UserUncheckedCreateWithoutPriceAdjustmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPriceAdjustmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPriceAdjustmentsInput, UserUncheckedUpdateWithoutPriceAdjustmentsInput>
  }

  export type UserUpdateWithoutPriceAdjustmentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    isRenter?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dni?: IntFieldUpdateOperationsInput | number
    invoices?: InvoiceUpdateManyWithoutCustNestedInput
    keys?: KeyUpdateManyWithoutCustNestedInput
    leaseContractsAsCust?: LeaseContractUpdateManyWithoutCustNestedInput
    leaseContractsAsRenter?: LeaseContractUpdateManyWithoutRenterNestedInput
    Location?: LocationUpdateManyWithoutCustNestedInput
    rentedLocations?: LocationUpdateManyWithoutRenterNestedInput
    payments?: PaymentUpdateManyWithoutCustNestedInput
    PaymentRecord?: PaymentRecordUpdateManyWithoutCustNestedInput
    paymentSchedules?: PaymentScheduleUpdateManyWithoutCustNestedInput
    RentHistory?: RentHistoryUpdateManyWithoutCustNestedInput
    cust?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCustNestedInput
  }

  export type UserUncheckedUpdateWithoutPriceAdjustmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    isRenter?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    dni?: IntFieldUpdateOperationsInput | number
    invoices?: InvoiceUncheckedUpdateManyWithoutCustNestedInput
    keys?: KeyUncheckedUpdateManyWithoutCustNestedInput
    leaseContractsAsCust?: LeaseContractUncheckedUpdateManyWithoutCustNestedInput
    leaseContractsAsRenter?: LeaseContractUncheckedUpdateManyWithoutRenterNestedInput
    Location?: LocationUncheckedUpdateManyWithoutCustNestedInput
    rentedLocations?: LocationUncheckedUpdateManyWithoutRenterNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCustNestedInput
    PaymentRecord?: PaymentRecordUncheckedUpdateManyWithoutCustNestedInput
    paymentSchedules?: PaymentScheduleUncheckedUpdateManyWithoutCustNestedInput
    RentHistory?: RentHistoryUncheckedUpdateManyWithoutCustNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCustNestedInput
  }

  export type LocationUpsertWithWhereUniqueWithoutAdjustmentsInput = {
    where: LocationWhereUniqueInput
    update: XOR<LocationUpdateWithoutAdjustmentsInput, LocationUncheckedUpdateWithoutAdjustmentsInput>
    create: XOR<LocationCreateWithoutAdjustmentsInput, LocationUncheckedCreateWithoutAdjustmentsInput>
  }

  export type LocationUpdateWithWhereUniqueWithoutAdjustmentsInput = {
    where: LocationWhereUniqueInput
    data: XOR<LocationUpdateWithoutAdjustmentsInput, LocationUncheckedUpdateWithoutAdjustmentsInput>
  }

  export type LocationUpdateManyWithWhereWithoutAdjustmentsInput = {
    where: LocationScalarWhereInput
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyWithoutAdjustmentsInput>
  }

  export type LocationCreateWithoutAdjustmentLocationInput = {
    name: string
    address: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    invoices?: InvoiceCreateNestedManyWithoutLocationInput
    keys?: KeyCreateNestedManyWithoutLocationInput
    contracts?: LeaseContractCreateNestedManyWithoutLocationInput
    cust?: UserCreateNestedOneWithoutLocationInput
    renter: UserCreateNestedOneWithoutRentedLocationsInput
    payments?: PaymentCreateNestedManyWithoutLocationInput
    PaymentRecord?: PaymentRecordCreateNestedManyWithoutLocationInput
    paymentSchedules?: PaymentScheduleCreateNestedManyWithoutLocationInput
    rentHistory?: RentHistoryCreateNestedManyWithoutLocationInput
    adjustments?: PriceAdjustmentCreateNestedManyWithoutLocationsInput
  }

  export type LocationUncheckedCreateWithoutAdjustmentLocationInput = {
    id?: number
    name: string
    address: string
    renterId: number
    CUST_ID?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    invoices?: InvoiceUncheckedCreateNestedManyWithoutLocationInput
    keys?: KeyUncheckedCreateNestedManyWithoutLocationInput
    contracts?: LeaseContractUncheckedCreateNestedManyWithoutLocationInput
    payments?: PaymentUncheckedCreateNestedManyWithoutLocationInput
    PaymentRecord?: PaymentRecordUncheckedCreateNestedManyWithoutLocationInput
    paymentSchedules?: PaymentScheduleUncheckedCreateNestedManyWithoutLocationInput
    rentHistory?: RentHistoryUncheckedCreateNestedManyWithoutLocationInput
    adjustments?: PriceAdjustmentUncheckedCreateNestedManyWithoutLocationsInput
  }

  export type LocationCreateOrConnectWithoutAdjustmentLocationInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutAdjustmentLocationInput, LocationUncheckedCreateWithoutAdjustmentLocationInput>
  }

  export type PriceAdjustmentCreateWithoutAdjustmentLocationInput = {
    amount: number
    period: number
    status: number
    applyToAll: boolean
    type: number
    createdAt?: Date | string
    lastExecutedAt?: Date | string | null
    updatedAt?: Date | string
    cust?: UserCreateNestedOneWithoutPriceAdjustmentsInput
    locations?: LocationCreateNestedManyWithoutAdjustmentsInput
  }

  export type PriceAdjustmentUncheckedCreateWithoutAdjustmentLocationInput = {
    id?: number
    CUST_ID?: number | null
    amount: number
    period: number
    status: number
    applyToAll: boolean
    type: number
    createdAt?: Date | string
    lastExecutedAt?: Date | string | null
    updatedAt?: Date | string
    locations?: LocationUncheckedCreateNestedManyWithoutAdjustmentsInput
  }

  export type PriceAdjustmentCreateOrConnectWithoutAdjustmentLocationInput = {
    where: PriceAdjustmentWhereUniqueInput
    create: XOR<PriceAdjustmentCreateWithoutAdjustmentLocationInput, PriceAdjustmentUncheckedCreateWithoutAdjustmentLocationInput>
  }

  export type LocationUpsertWithoutAdjustmentLocationInput = {
    update: XOR<LocationUpdateWithoutAdjustmentLocationInput, LocationUncheckedUpdateWithoutAdjustmentLocationInput>
    create: XOR<LocationCreateWithoutAdjustmentLocationInput, LocationUncheckedCreateWithoutAdjustmentLocationInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutAdjustmentLocationInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutAdjustmentLocationInput, LocationUncheckedUpdateWithoutAdjustmentLocationInput>
  }

  export type LocationUpdateWithoutAdjustmentLocationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invoices?: InvoiceUpdateManyWithoutLocationNestedInput
    keys?: KeyUpdateManyWithoutLocationNestedInput
    contracts?: LeaseContractUpdateManyWithoutLocationNestedInput
    cust?: UserUpdateOneWithoutLocationNestedInput
    renter?: UserUpdateOneRequiredWithoutRentedLocationsNestedInput
    payments?: PaymentUpdateManyWithoutLocationNestedInput
    PaymentRecord?: PaymentRecordUpdateManyWithoutLocationNestedInput
    paymentSchedules?: PaymentScheduleUpdateManyWithoutLocationNestedInput
    rentHistory?: RentHistoryUpdateManyWithoutLocationNestedInput
    adjustments?: PriceAdjustmentUpdateManyWithoutLocationsNestedInput
  }

  export type LocationUncheckedUpdateWithoutAdjustmentLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    renterId?: IntFieldUpdateOperationsInput | number
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invoices?: InvoiceUncheckedUpdateManyWithoutLocationNestedInput
    keys?: KeyUncheckedUpdateManyWithoutLocationNestedInput
    contracts?: LeaseContractUncheckedUpdateManyWithoutLocationNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutLocationNestedInput
    PaymentRecord?: PaymentRecordUncheckedUpdateManyWithoutLocationNestedInput
    paymentSchedules?: PaymentScheduleUncheckedUpdateManyWithoutLocationNestedInput
    rentHistory?: RentHistoryUncheckedUpdateManyWithoutLocationNestedInput
    adjustments?: PriceAdjustmentUncheckedUpdateManyWithoutLocationsNestedInput
  }

  export type PriceAdjustmentUpsertWithoutAdjustmentLocationInput = {
    update: XOR<PriceAdjustmentUpdateWithoutAdjustmentLocationInput, PriceAdjustmentUncheckedUpdateWithoutAdjustmentLocationInput>
    create: XOR<PriceAdjustmentCreateWithoutAdjustmentLocationInput, PriceAdjustmentUncheckedCreateWithoutAdjustmentLocationInput>
    where?: PriceAdjustmentWhereInput
  }

  export type PriceAdjustmentUpdateToOneWithWhereWithoutAdjustmentLocationInput = {
    where?: PriceAdjustmentWhereInput
    data: XOR<PriceAdjustmentUpdateWithoutAdjustmentLocationInput, PriceAdjustmentUncheckedUpdateWithoutAdjustmentLocationInput>
  }

  export type PriceAdjustmentUpdateWithoutAdjustmentLocationInput = {
    amount?: IntFieldUpdateOperationsInput | number
    period?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    applyToAll?: BoolFieldUpdateOperationsInput | boolean
    type?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastExecutedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cust?: UserUpdateOneWithoutPriceAdjustmentsNestedInput
    locations?: LocationUpdateManyWithoutAdjustmentsNestedInput
  }

  export type PriceAdjustmentUncheckedUpdateWithoutAdjustmentLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: IntFieldUpdateOperationsInput | number
    period?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    applyToAll?: BoolFieldUpdateOperationsInput | boolean
    type?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastExecutedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationUncheckedUpdateManyWithoutAdjustmentsNestedInput
  }

  export type UserCreateWithoutPaymentsInput = {
    email: string
    isRenter?: boolean
    accessToken?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    createdAt?: Date | string
    password?: string | null
    updatedAt?: Date | string | null
    dni: number
    invoices?: InvoiceCreateNestedManyWithoutCustInput
    keys?: KeyCreateNestedManyWithoutCustInput
    leaseContractsAsCust?: LeaseContractCreateNestedManyWithoutCustInput
    leaseContractsAsRenter?: LeaseContractCreateNestedManyWithoutRenterInput
    Location?: LocationCreateNestedManyWithoutCustInput
    rentedLocations?: LocationCreateNestedManyWithoutRenterInput
    PaymentRecord?: PaymentRecordCreateNestedManyWithoutCustInput
    paymentSchedules?: PaymentScheduleCreateNestedManyWithoutCustInput
    priceAdjustments?: PriceAdjustmentCreateNestedManyWithoutCustInput
    RentHistory?: RentHistoryCreateNestedManyWithoutCustInput
    cust?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCustInput
  }

  export type UserUncheckedCreateWithoutPaymentsInput = {
    id?: number
    email: string
    isRenter?: boolean
    accessToken?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    createdAt?: Date | string
    password?: string | null
    updatedAt?: Date | string | null
    CUST_ID?: number | null
    dni: number
    invoices?: InvoiceUncheckedCreateNestedManyWithoutCustInput
    keys?: KeyUncheckedCreateNestedManyWithoutCustInput
    leaseContractsAsCust?: LeaseContractUncheckedCreateNestedManyWithoutCustInput
    leaseContractsAsRenter?: LeaseContractUncheckedCreateNestedManyWithoutRenterInput
    Location?: LocationUncheckedCreateNestedManyWithoutCustInput
    rentedLocations?: LocationUncheckedCreateNestedManyWithoutRenterInput
    PaymentRecord?: PaymentRecordUncheckedCreateNestedManyWithoutCustInput
    paymentSchedules?: PaymentScheduleUncheckedCreateNestedManyWithoutCustInput
    priceAdjustments?: PriceAdjustmentUncheckedCreateNestedManyWithoutCustInput
    RentHistory?: RentHistoryUncheckedCreateNestedManyWithoutCustInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCustInput
  }

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
  }

  export type LocationCreateWithoutPaymentsInput = {
    name: string
    address: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    AdjustmentLocation?: AdjustmentLocationCreateNestedManyWithoutLocationInput
    invoices?: InvoiceCreateNestedManyWithoutLocationInput
    keys?: KeyCreateNestedManyWithoutLocationInput
    contracts?: LeaseContractCreateNestedManyWithoutLocationInput
    cust?: UserCreateNestedOneWithoutLocationInput
    renter: UserCreateNestedOneWithoutRentedLocationsInput
    PaymentRecord?: PaymentRecordCreateNestedManyWithoutLocationInput
    paymentSchedules?: PaymentScheduleCreateNestedManyWithoutLocationInput
    rentHistory?: RentHistoryCreateNestedManyWithoutLocationInput
    adjustments?: PriceAdjustmentCreateNestedManyWithoutLocationsInput
  }

  export type LocationUncheckedCreateWithoutPaymentsInput = {
    id?: number
    name: string
    address: string
    renterId: number
    CUST_ID?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    AdjustmentLocation?: AdjustmentLocationUncheckedCreateNestedManyWithoutLocationInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutLocationInput
    keys?: KeyUncheckedCreateNestedManyWithoutLocationInput
    contracts?: LeaseContractUncheckedCreateNestedManyWithoutLocationInput
    PaymentRecord?: PaymentRecordUncheckedCreateNestedManyWithoutLocationInput
    paymentSchedules?: PaymentScheduleUncheckedCreateNestedManyWithoutLocationInput
    rentHistory?: RentHistoryUncheckedCreateNestedManyWithoutLocationInput
    adjustments?: PriceAdjustmentUncheckedCreateNestedManyWithoutLocationsInput
  }

  export type LocationCreateOrConnectWithoutPaymentsInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutPaymentsInput, LocationUncheckedCreateWithoutPaymentsInput>
  }

  export type PaymentMethodCreateWithoutPaymentsInput = {
    name: string
  }

  export type PaymentMethodUncheckedCreateWithoutPaymentsInput = {
    id?: number
    name: string
  }

  export type PaymentMethodCreateOrConnectWithoutPaymentsInput = {
    where: PaymentMethodWhereUniqueInput
    create: XOR<PaymentMethodCreateWithoutPaymentsInput, PaymentMethodUncheckedCreateWithoutPaymentsInput>
  }

  export type PaymentRecordCreateWithoutPaymentsInput = {
    month: number
    year: number
    remainingAmount?: number
    totalPaid?: number
    totalRent: number
    cust?: UserCreateNestedOneWithoutPaymentRecordInput
    location: LocationCreateNestedOneWithoutPaymentRecordInput
  }

  export type PaymentRecordUncheckedCreateWithoutPaymentsInput = {
    id?: number
    locationId: number
    month: number
    year: number
    CUST_ID?: number | null
    remainingAmount?: number
    totalPaid?: number
    totalRent: number
  }

  export type PaymentRecordCreateOrConnectWithoutPaymentsInput = {
    where: PaymentRecordWhereUniqueInput
    create: XOR<PaymentRecordCreateWithoutPaymentsInput, PaymentRecordUncheckedCreateWithoutPaymentsInput>
  }

  export type UserUpsertWithoutPaymentsInput = {
    update: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateWithoutPaymentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    isRenter?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dni?: IntFieldUpdateOperationsInput | number
    invoices?: InvoiceUpdateManyWithoutCustNestedInput
    keys?: KeyUpdateManyWithoutCustNestedInput
    leaseContractsAsCust?: LeaseContractUpdateManyWithoutCustNestedInput
    leaseContractsAsRenter?: LeaseContractUpdateManyWithoutRenterNestedInput
    Location?: LocationUpdateManyWithoutCustNestedInput
    rentedLocations?: LocationUpdateManyWithoutRenterNestedInput
    PaymentRecord?: PaymentRecordUpdateManyWithoutCustNestedInput
    paymentSchedules?: PaymentScheduleUpdateManyWithoutCustNestedInput
    priceAdjustments?: PriceAdjustmentUpdateManyWithoutCustNestedInput
    RentHistory?: RentHistoryUpdateManyWithoutCustNestedInput
    cust?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCustNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    isRenter?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    dni?: IntFieldUpdateOperationsInput | number
    invoices?: InvoiceUncheckedUpdateManyWithoutCustNestedInput
    keys?: KeyUncheckedUpdateManyWithoutCustNestedInput
    leaseContractsAsCust?: LeaseContractUncheckedUpdateManyWithoutCustNestedInput
    leaseContractsAsRenter?: LeaseContractUncheckedUpdateManyWithoutRenterNestedInput
    Location?: LocationUncheckedUpdateManyWithoutCustNestedInput
    rentedLocations?: LocationUncheckedUpdateManyWithoutRenterNestedInput
    PaymentRecord?: PaymentRecordUncheckedUpdateManyWithoutCustNestedInput
    paymentSchedules?: PaymentScheduleUncheckedUpdateManyWithoutCustNestedInput
    priceAdjustments?: PriceAdjustmentUncheckedUpdateManyWithoutCustNestedInput
    RentHistory?: RentHistoryUncheckedUpdateManyWithoutCustNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCustNestedInput
  }

  export type LocationUpsertWithoutPaymentsInput = {
    update: XOR<LocationUpdateWithoutPaymentsInput, LocationUncheckedUpdateWithoutPaymentsInput>
    create: XOR<LocationCreateWithoutPaymentsInput, LocationUncheckedCreateWithoutPaymentsInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutPaymentsInput, LocationUncheckedUpdateWithoutPaymentsInput>
  }

  export type LocationUpdateWithoutPaymentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AdjustmentLocation?: AdjustmentLocationUpdateManyWithoutLocationNestedInput
    invoices?: InvoiceUpdateManyWithoutLocationNestedInput
    keys?: KeyUpdateManyWithoutLocationNestedInput
    contracts?: LeaseContractUpdateManyWithoutLocationNestedInput
    cust?: UserUpdateOneWithoutLocationNestedInput
    renter?: UserUpdateOneRequiredWithoutRentedLocationsNestedInput
    PaymentRecord?: PaymentRecordUpdateManyWithoutLocationNestedInput
    paymentSchedules?: PaymentScheduleUpdateManyWithoutLocationNestedInput
    rentHistory?: RentHistoryUpdateManyWithoutLocationNestedInput
    adjustments?: PriceAdjustmentUpdateManyWithoutLocationsNestedInput
  }

  export type LocationUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    renterId?: IntFieldUpdateOperationsInput | number
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AdjustmentLocation?: AdjustmentLocationUncheckedUpdateManyWithoutLocationNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutLocationNestedInput
    keys?: KeyUncheckedUpdateManyWithoutLocationNestedInput
    contracts?: LeaseContractUncheckedUpdateManyWithoutLocationNestedInput
    PaymentRecord?: PaymentRecordUncheckedUpdateManyWithoutLocationNestedInput
    paymentSchedules?: PaymentScheduleUncheckedUpdateManyWithoutLocationNestedInput
    rentHistory?: RentHistoryUncheckedUpdateManyWithoutLocationNestedInput
    adjustments?: PriceAdjustmentUncheckedUpdateManyWithoutLocationsNestedInput
  }

  export type PaymentMethodUpsertWithoutPaymentsInput = {
    update: XOR<PaymentMethodUpdateWithoutPaymentsInput, PaymentMethodUncheckedUpdateWithoutPaymentsInput>
    create: XOR<PaymentMethodCreateWithoutPaymentsInput, PaymentMethodUncheckedCreateWithoutPaymentsInput>
    where?: PaymentMethodWhereInput
  }

  export type PaymentMethodUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: PaymentMethodWhereInput
    data: XOR<PaymentMethodUpdateWithoutPaymentsInput, PaymentMethodUncheckedUpdateWithoutPaymentsInput>
  }

  export type PaymentMethodUpdateWithoutPaymentsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentMethodUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentRecordUpsertWithoutPaymentsInput = {
    update: XOR<PaymentRecordUpdateWithoutPaymentsInput, PaymentRecordUncheckedUpdateWithoutPaymentsInput>
    create: XOR<PaymentRecordCreateWithoutPaymentsInput, PaymentRecordUncheckedCreateWithoutPaymentsInput>
    where?: PaymentRecordWhereInput
  }

  export type PaymentRecordUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: PaymentRecordWhereInput
    data: XOR<PaymentRecordUpdateWithoutPaymentsInput, PaymentRecordUncheckedUpdateWithoutPaymentsInput>
  }

  export type PaymentRecordUpdateWithoutPaymentsInput = {
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    totalPaid?: IntFieldUpdateOperationsInput | number
    totalRent?: IntFieldUpdateOperationsInput | number
    cust?: UserUpdateOneWithoutPaymentRecordNestedInput
    location?: LocationUpdateOneRequiredWithoutPaymentRecordNestedInput
  }

  export type PaymentRecordUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    remainingAmount?: IntFieldUpdateOperationsInput | number
    totalPaid?: IntFieldUpdateOperationsInput | number
    totalRent?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentCreateWithoutPaymentRecordInput = {
    date?: Date | string
    amount: number
    month: number
    year: number
    cust?: UserCreateNestedOneWithoutPaymentsInput
    location: LocationCreateNestedOneWithoutPaymentsInput
    paymentMethod: PaymentMethodCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutPaymentRecordInput = {
    id?: number
    locationId: number
    date?: Date | string
    amount: number
    paymentMethodId: number
    CUST_ID?: number | null
    month: number
    year: number
  }

  export type PaymentCreateOrConnectWithoutPaymentRecordInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutPaymentRecordInput, PaymentUncheckedCreateWithoutPaymentRecordInput>
  }

  export type PaymentCreateManyPaymentRecordInputEnvelope = {
    data: PaymentCreateManyPaymentRecordInput | PaymentCreateManyPaymentRecordInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPaymentRecordInput = {
    email: string
    isRenter?: boolean
    accessToken?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    createdAt?: Date | string
    password?: string | null
    updatedAt?: Date | string | null
    dni: number
    invoices?: InvoiceCreateNestedManyWithoutCustInput
    keys?: KeyCreateNestedManyWithoutCustInput
    leaseContractsAsCust?: LeaseContractCreateNestedManyWithoutCustInput
    leaseContractsAsRenter?: LeaseContractCreateNestedManyWithoutRenterInput
    Location?: LocationCreateNestedManyWithoutCustInput
    rentedLocations?: LocationCreateNestedManyWithoutRenterInput
    payments?: PaymentCreateNestedManyWithoutCustInput
    paymentSchedules?: PaymentScheduleCreateNestedManyWithoutCustInput
    priceAdjustments?: PriceAdjustmentCreateNestedManyWithoutCustInput
    RentHistory?: RentHistoryCreateNestedManyWithoutCustInput
    cust?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCustInput
  }

  export type UserUncheckedCreateWithoutPaymentRecordInput = {
    id?: number
    email: string
    isRenter?: boolean
    accessToken?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    createdAt?: Date | string
    password?: string | null
    updatedAt?: Date | string | null
    CUST_ID?: number | null
    dni: number
    invoices?: InvoiceUncheckedCreateNestedManyWithoutCustInput
    keys?: KeyUncheckedCreateNestedManyWithoutCustInput
    leaseContractsAsCust?: LeaseContractUncheckedCreateNestedManyWithoutCustInput
    leaseContractsAsRenter?: LeaseContractUncheckedCreateNestedManyWithoutRenterInput
    Location?: LocationUncheckedCreateNestedManyWithoutCustInput
    rentedLocations?: LocationUncheckedCreateNestedManyWithoutRenterInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCustInput
    paymentSchedules?: PaymentScheduleUncheckedCreateNestedManyWithoutCustInput
    priceAdjustments?: PriceAdjustmentUncheckedCreateNestedManyWithoutCustInput
    RentHistory?: RentHistoryUncheckedCreateNestedManyWithoutCustInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCustInput
  }

  export type UserCreateOrConnectWithoutPaymentRecordInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentRecordInput, UserUncheckedCreateWithoutPaymentRecordInput>
  }

  export type LocationCreateWithoutPaymentRecordInput = {
    name: string
    address: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    AdjustmentLocation?: AdjustmentLocationCreateNestedManyWithoutLocationInput
    invoices?: InvoiceCreateNestedManyWithoutLocationInput
    keys?: KeyCreateNestedManyWithoutLocationInput
    contracts?: LeaseContractCreateNestedManyWithoutLocationInput
    cust?: UserCreateNestedOneWithoutLocationInput
    renter: UserCreateNestedOneWithoutRentedLocationsInput
    payments?: PaymentCreateNestedManyWithoutLocationInput
    paymentSchedules?: PaymentScheduleCreateNestedManyWithoutLocationInput
    rentHistory?: RentHistoryCreateNestedManyWithoutLocationInput
    adjustments?: PriceAdjustmentCreateNestedManyWithoutLocationsInput
  }

  export type LocationUncheckedCreateWithoutPaymentRecordInput = {
    id?: number
    name: string
    address: string
    renterId: number
    CUST_ID?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    AdjustmentLocation?: AdjustmentLocationUncheckedCreateNestedManyWithoutLocationInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutLocationInput
    keys?: KeyUncheckedCreateNestedManyWithoutLocationInput
    contracts?: LeaseContractUncheckedCreateNestedManyWithoutLocationInput
    payments?: PaymentUncheckedCreateNestedManyWithoutLocationInput
    paymentSchedules?: PaymentScheduleUncheckedCreateNestedManyWithoutLocationInput
    rentHistory?: RentHistoryUncheckedCreateNestedManyWithoutLocationInput
    adjustments?: PriceAdjustmentUncheckedCreateNestedManyWithoutLocationsInput
  }

  export type LocationCreateOrConnectWithoutPaymentRecordInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutPaymentRecordInput, LocationUncheckedCreateWithoutPaymentRecordInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutPaymentRecordInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutPaymentRecordInput, PaymentUncheckedUpdateWithoutPaymentRecordInput>
    create: XOR<PaymentCreateWithoutPaymentRecordInput, PaymentUncheckedCreateWithoutPaymentRecordInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutPaymentRecordInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutPaymentRecordInput, PaymentUncheckedUpdateWithoutPaymentRecordInput>
  }

  export type PaymentUpdateManyWithWhereWithoutPaymentRecordInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutPaymentRecordInput>
  }

  export type UserUpsertWithoutPaymentRecordInput = {
    update: XOR<UserUpdateWithoutPaymentRecordInput, UserUncheckedUpdateWithoutPaymentRecordInput>
    create: XOR<UserCreateWithoutPaymentRecordInput, UserUncheckedCreateWithoutPaymentRecordInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentRecordInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentRecordInput, UserUncheckedUpdateWithoutPaymentRecordInput>
  }

  export type UserUpdateWithoutPaymentRecordInput = {
    email?: StringFieldUpdateOperationsInput | string
    isRenter?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dni?: IntFieldUpdateOperationsInput | number
    invoices?: InvoiceUpdateManyWithoutCustNestedInput
    keys?: KeyUpdateManyWithoutCustNestedInput
    leaseContractsAsCust?: LeaseContractUpdateManyWithoutCustNestedInput
    leaseContractsAsRenter?: LeaseContractUpdateManyWithoutRenterNestedInput
    Location?: LocationUpdateManyWithoutCustNestedInput
    rentedLocations?: LocationUpdateManyWithoutRenterNestedInput
    payments?: PaymentUpdateManyWithoutCustNestedInput
    paymentSchedules?: PaymentScheduleUpdateManyWithoutCustNestedInput
    priceAdjustments?: PriceAdjustmentUpdateManyWithoutCustNestedInput
    RentHistory?: RentHistoryUpdateManyWithoutCustNestedInput
    cust?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCustNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentRecordInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    isRenter?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    dni?: IntFieldUpdateOperationsInput | number
    invoices?: InvoiceUncheckedUpdateManyWithoutCustNestedInput
    keys?: KeyUncheckedUpdateManyWithoutCustNestedInput
    leaseContractsAsCust?: LeaseContractUncheckedUpdateManyWithoutCustNestedInput
    leaseContractsAsRenter?: LeaseContractUncheckedUpdateManyWithoutRenterNestedInput
    Location?: LocationUncheckedUpdateManyWithoutCustNestedInput
    rentedLocations?: LocationUncheckedUpdateManyWithoutRenterNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCustNestedInput
    paymentSchedules?: PaymentScheduleUncheckedUpdateManyWithoutCustNestedInput
    priceAdjustments?: PriceAdjustmentUncheckedUpdateManyWithoutCustNestedInput
    RentHistory?: RentHistoryUncheckedUpdateManyWithoutCustNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCustNestedInput
  }

  export type LocationUpsertWithoutPaymentRecordInput = {
    update: XOR<LocationUpdateWithoutPaymentRecordInput, LocationUncheckedUpdateWithoutPaymentRecordInput>
    create: XOR<LocationCreateWithoutPaymentRecordInput, LocationUncheckedCreateWithoutPaymentRecordInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutPaymentRecordInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutPaymentRecordInput, LocationUncheckedUpdateWithoutPaymentRecordInput>
  }

  export type LocationUpdateWithoutPaymentRecordInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AdjustmentLocation?: AdjustmentLocationUpdateManyWithoutLocationNestedInput
    invoices?: InvoiceUpdateManyWithoutLocationNestedInput
    keys?: KeyUpdateManyWithoutLocationNestedInput
    contracts?: LeaseContractUpdateManyWithoutLocationNestedInput
    cust?: UserUpdateOneWithoutLocationNestedInput
    renter?: UserUpdateOneRequiredWithoutRentedLocationsNestedInput
    payments?: PaymentUpdateManyWithoutLocationNestedInput
    paymentSchedules?: PaymentScheduleUpdateManyWithoutLocationNestedInput
    rentHistory?: RentHistoryUpdateManyWithoutLocationNestedInput
    adjustments?: PriceAdjustmentUpdateManyWithoutLocationsNestedInput
  }

  export type LocationUncheckedUpdateWithoutPaymentRecordInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    renterId?: IntFieldUpdateOperationsInput | number
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AdjustmentLocation?: AdjustmentLocationUncheckedUpdateManyWithoutLocationNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutLocationNestedInput
    keys?: KeyUncheckedUpdateManyWithoutLocationNestedInput
    contracts?: LeaseContractUncheckedUpdateManyWithoutLocationNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutLocationNestedInput
    paymentSchedules?: PaymentScheduleUncheckedUpdateManyWithoutLocationNestedInput
    rentHistory?: RentHistoryUncheckedUpdateManyWithoutLocationNestedInput
    adjustments?: PriceAdjustmentUncheckedUpdateManyWithoutLocationsNestedInput
  }

  export type PaymentCreateWithoutPaymentMethodInput = {
    date?: Date | string
    amount: number
    month: number
    year: number
    cust?: UserCreateNestedOneWithoutPaymentsInput
    location: LocationCreateNestedOneWithoutPaymentsInput
    paymentRecord: PaymentRecordCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutPaymentMethodInput = {
    id?: number
    locationId: number
    date?: Date | string
    amount: number
    CUST_ID?: number | null
    paymentRecordId: number
    month: number
    year: number
  }

  export type PaymentCreateOrConnectWithoutPaymentMethodInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutPaymentMethodInput, PaymentUncheckedCreateWithoutPaymentMethodInput>
  }

  export type PaymentCreateManyPaymentMethodInputEnvelope = {
    data: PaymentCreateManyPaymentMethodInput | PaymentCreateManyPaymentMethodInput[]
    skipDuplicates?: boolean
  }

  export type PaymentUpsertWithWhereUniqueWithoutPaymentMethodInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutPaymentMethodInput, PaymentUncheckedUpdateWithoutPaymentMethodInput>
    create: XOR<PaymentCreateWithoutPaymentMethodInput, PaymentUncheckedCreateWithoutPaymentMethodInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutPaymentMethodInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutPaymentMethodInput, PaymentUncheckedUpdateWithoutPaymentMethodInput>
  }

  export type PaymentUpdateManyWithWhereWithoutPaymentMethodInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutPaymentMethodInput>
  }

  export type UserCreateWithoutInvoicesInput = {
    email: string
    isRenter?: boolean
    accessToken?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    createdAt?: Date | string
    password?: string | null
    updatedAt?: Date | string | null
    dni: number
    keys?: KeyCreateNestedManyWithoutCustInput
    leaseContractsAsCust?: LeaseContractCreateNestedManyWithoutCustInput
    leaseContractsAsRenter?: LeaseContractCreateNestedManyWithoutRenterInput
    Location?: LocationCreateNestedManyWithoutCustInput
    rentedLocations?: LocationCreateNestedManyWithoutRenterInput
    payments?: PaymentCreateNestedManyWithoutCustInput
    PaymentRecord?: PaymentRecordCreateNestedManyWithoutCustInput
    paymentSchedules?: PaymentScheduleCreateNestedManyWithoutCustInput
    priceAdjustments?: PriceAdjustmentCreateNestedManyWithoutCustInput
    RentHistory?: RentHistoryCreateNestedManyWithoutCustInput
    cust?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCustInput
  }

  export type UserUncheckedCreateWithoutInvoicesInput = {
    id?: number
    email: string
    isRenter?: boolean
    accessToken?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    createdAt?: Date | string
    password?: string | null
    updatedAt?: Date | string | null
    CUST_ID?: number | null
    dni: number
    keys?: KeyUncheckedCreateNestedManyWithoutCustInput
    leaseContractsAsCust?: LeaseContractUncheckedCreateNestedManyWithoutCustInput
    leaseContractsAsRenter?: LeaseContractUncheckedCreateNestedManyWithoutRenterInput
    Location?: LocationUncheckedCreateNestedManyWithoutCustInput
    rentedLocations?: LocationUncheckedCreateNestedManyWithoutRenterInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCustInput
    PaymentRecord?: PaymentRecordUncheckedCreateNestedManyWithoutCustInput
    paymentSchedules?: PaymentScheduleUncheckedCreateNestedManyWithoutCustInput
    priceAdjustments?: PriceAdjustmentUncheckedCreateNestedManyWithoutCustInput
    RentHistory?: RentHistoryUncheckedCreateNestedManyWithoutCustInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCustInput
  }

  export type UserCreateOrConnectWithoutInvoicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
  }

  export type LocationCreateWithoutInvoicesInput = {
    name: string
    address: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    AdjustmentLocation?: AdjustmentLocationCreateNestedManyWithoutLocationInput
    keys?: KeyCreateNestedManyWithoutLocationInput
    contracts?: LeaseContractCreateNestedManyWithoutLocationInput
    cust?: UserCreateNestedOneWithoutLocationInput
    renter: UserCreateNestedOneWithoutRentedLocationsInput
    payments?: PaymentCreateNestedManyWithoutLocationInput
    PaymentRecord?: PaymentRecordCreateNestedManyWithoutLocationInput
    paymentSchedules?: PaymentScheduleCreateNestedManyWithoutLocationInput
    rentHistory?: RentHistoryCreateNestedManyWithoutLocationInput
    adjustments?: PriceAdjustmentCreateNestedManyWithoutLocationsInput
  }

  export type LocationUncheckedCreateWithoutInvoicesInput = {
    id?: number
    name: string
    address: string
    renterId: number
    CUST_ID?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    AdjustmentLocation?: AdjustmentLocationUncheckedCreateNestedManyWithoutLocationInput
    keys?: KeyUncheckedCreateNestedManyWithoutLocationInput
    contracts?: LeaseContractUncheckedCreateNestedManyWithoutLocationInput
    payments?: PaymentUncheckedCreateNestedManyWithoutLocationInput
    PaymentRecord?: PaymentRecordUncheckedCreateNestedManyWithoutLocationInput
    paymentSchedules?: PaymentScheduleUncheckedCreateNestedManyWithoutLocationInput
    rentHistory?: RentHistoryUncheckedCreateNestedManyWithoutLocationInput
    adjustments?: PriceAdjustmentUncheckedCreateNestedManyWithoutLocationsInput
  }

  export type LocationCreateOrConnectWithoutInvoicesInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutInvoicesInput, LocationUncheckedCreateWithoutInvoicesInput>
  }

  export type UserUpsertWithoutInvoicesInput = {
    update: XOR<UserUpdateWithoutInvoicesInput, UserUncheckedUpdateWithoutInvoicesInput>
    create: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvoicesInput, UserUncheckedUpdateWithoutInvoicesInput>
  }

  export type UserUpdateWithoutInvoicesInput = {
    email?: StringFieldUpdateOperationsInput | string
    isRenter?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dni?: IntFieldUpdateOperationsInput | number
    keys?: KeyUpdateManyWithoutCustNestedInput
    leaseContractsAsCust?: LeaseContractUpdateManyWithoutCustNestedInput
    leaseContractsAsRenter?: LeaseContractUpdateManyWithoutRenterNestedInput
    Location?: LocationUpdateManyWithoutCustNestedInput
    rentedLocations?: LocationUpdateManyWithoutRenterNestedInput
    payments?: PaymentUpdateManyWithoutCustNestedInput
    PaymentRecord?: PaymentRecordUpdateManyWithoutCustNestedInput
    paymentSchedules?: PaymentScheduleUpdateManyWithoutCustNestedInput
    priceAdjustments?: PriceAdjustmentUpdateManyWithoutCustNestedInput
    RentHistory?: RentHistoryUpdateManyWithoutCustNestedInput
    cust?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCustNestedInput
  }

  export type UserUncheckedUpdateWithoutInvoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    isRenter?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    dni?: IntFieldUpdateOperationsInput | number
    keys?: KeyUncheckedUpdateManyWithoutCustNestedInput
    leaseContractsAsCust?: LeaseContractUncheckedUpdateManyWithoutCustNestedInput
    leaseContractsAsRenter?: LeaseContractUncheckedUpdateManyWithoutRenterNestedInput
    Location?: LocationUncheckedUpdateManyWithoutCustNestedInput
    rentedLocations?: LocationUncheckedUpdateManyWithoutRenterNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCustNestedInput
    PaymentRecord?: PaymentRecordUncheckedUpdateManyWithoutCustNestedInput
    paymentSchedules?: PaymentScheduleUncheckedUpdateManyWithoutCustNestedInput
    priceAdjustments?: PriceAdjustmentUncheckedUpdateManyWithoutCustNestedInput
    RentHistory?: RentHistoryUncheckedUpdateManyWithoutCustNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCustNestedInput
  }

  export type LocationUpsertWithoutInvoicesInput = {
    update: XOR<LocationUpdateWithoutInvoicesInput, LocationUncheckedUpdateWithoutInvoicesInput>
    create: XOR<LocationCreateWithoutInvoicesInput, LocationUncheckedCreateWithoutInvoicesInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutInvoicesInput, LocationUncheckedUpdateWithoutInvoicesInput>
  }

  export type LocationUpdateWithoutInvoicesInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AdjustmentLocation?: AdjustmentLocationUpdateManyWithoutLocationNestedInput
    keys?: KeyUpdateManyWithoutLocationNestedInput
    contracts?: LeaseContractUpdateManyWithoutLocationNestedInput
    cust?: UserUpdateOneWithoutLocationNestedInput
    renter?: UserUpdateOneRequiredWithoutRentedLocationsNestedInput
    payments?: PaymentUpdateManyWithoutLocationNestedInput
    PaymentRecord?: PaymentRecordUpdateManyWithoutLocationNestedInput
    paymentSchedules?: PaymentScheduleUpdateManyWithoutLocationNestedInput
    rentHistory?: RentHistoryUpdateManyWithoutLocationNestedInput
    adjustments?: PriceAdjustmentUpdateManyWithoutLocationsNestedInput
  }

  export type LocationUncheckedUpdateWithoutInvoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    renterId?: IntFieldUpdateOperationsInput | number
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AdjustmentLocation?: AdjustmentLocationUncheckedUpdateManyWithoutLocationNestedInput
    keys?: KeyUncheckedUpdateManyWithoutLocationNestedInput
    contracts?: LeaseContractUncheckedUpdateManyWithoutLocationNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutLocationNestedInput
    PaymentRecord?: PaymentRecordUncheckedUpdateManyWithoutLocationNestedInput
    paymentSchedules?: PaymentScheduleUncheckedUpdateManyWithoutLocationNestedInput
    rentHistory?: RentHistoryUncheckedUpdateManyWithoutLocationNestedInput
    adjustments?: PriceAdjustmentUncheckedUpdateManyWithoutLocationsNestedInput
  }

  export type UserCreateWithoutPaymentSchedulesInput = {
    email: string
    isRenter?: boolean
    accessToken?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    createdAt?: Date | string
    password?: string | null
    updatedAt?: Date | string | null
    dni: number
    invoices?: InvoiceCreateNestedManyWithoutCustInput
    keys?: KeyCreateNestedManyWithoutCustInput
    leaseContractsAsCust?: LeaseContractCreateNestedManyWithoutCustInput
    leaseContractsAsRenter?: LeaseContractCreateNestedManyWithoutRenterInput
    Location?: LocationCreateNestedManyWithoutCustInput
    rentedLocations?: LocationCreateNestedManyWithoutRenterInput
    payments?: PaymentCreateNestedManyWithoutCustInput
    PaymentRecord?: PaymentRecordCreateNestedManyWithoutCustInput
    priceAdjustments?: PriceAdjustmentCreateNestedManyWithoutCustInput
    RentHistory?: RentHistoryCreateNestedManyWithoutCustInput
    cust?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCustInput
  }

  export type UserUncheckedCreateWithoutPaymentSchedulesInput = {
    id?: number
    email: string
    isRenter?: boolean
    accessToken?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    createdAt?: Date | string
    password?: string | null
    updatedAt?: Date | string | null
    CUST_ID?: number | null
    dni: number
    invoices?: InvoiceUncheckedCreateNestedManyWithoutCustInput
    keys?: KeyUncheckedCreateNestedManyWithoutCustInput
    leaseContractsAsCust?: LeaseContractUncheckedCreateNestedManyWithoutCustInput
    leaseContractsAsRenter?: LeaseContractUncheckedCreateNestedManyWithoutRenterInput
    Location?: LocationUncheckedCreateNestedManyWithoutCustInput
    rentedLocations?: LocationUncheckedCreateNestedManyWithoutRenterInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCustInput
    PaymentRecord?: PaymentRecordUncheckedCreateNestedManyWithoutCustInput
    priceAdjustments?: PriceAdjustmentUncheckedCreateNestedManyWithoutCustInput
    RentHistory?: RentHistoryUncheckedCreateNestedManyWithoutCustInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCustInput
  }

  export type UserCreateOrConnectWithoutPaymentSchedulesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentSchedulesInput, UserUncheckedCreateWithoutPaymentSchedulesInput>
  }

  export type LocationCreateWithoutPaymentSchedulesInput = {
    name: string
    address: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    AdjustmentLocation?: AdjustmentLocationCreateNestedManyWithoutLocationInput
    invoices?: InvoiceCreateNestedManyWithoutLocationInput
    keys?: KeyCreateNestedManyWithoutLocationInput
    contracts?: LeaseContractCreateNestedManyWithoutLocationInput
    cust?: UserCreateNestedOneWithoutLocationInput
    renter: UserCreateNestedOneWithoutRentedLocationsInput
    payments?: PaymentCreateNestedManyWithoutLocationInput
    PaymentRecord?: PaymentRecordCreateNestedManyWithoutLocationInput
    rentHistory?: RentHistoryCreateNestedManyWithoutLocationInput
    adjustments?: PriceAdjustmentCreateNestedManyWithoutLocationsInput
  }

  export type LocationUncheckedCreateWithoutPaymentSchedulesInput = {
    id?: number
    name: string
    address: string
    renterId: number
    CUST_ID?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    AdjustmentLocation?: AdjustmentLocationUncheckedCreateNestedManyWithoutLocationInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutLocationInput
    keys?: KeyUncheckedCreateNestedManyWithoutLocationInput
    contracts?: LeaseContractUncheckedCreateNestedManyWithoutLocationInput
    payments?: PaymentUncheckedCreateNestedManyWithoutLocationInput
    PaymentRecord?: PaymentRecordUncheckedCreateNestedManyWithoutLocationInput
    rentHistory?: RentHistoryUncheckedCreateNestedManyWithoutLocationInput
    adjustments?: PriceAdjustmentUncheckedCreateNestedManyWithoutLocationsInput
  }

  export type LocationCreateOrConnectWithoutPaymentSchedulesInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutPaymentSchedulesInput, LocationUncheckedCreateWithoutPaymentSchedulesInput>
  }

  export type UserUpsertWithoutPaymentSchedulesInput = {
    update: XOR<UserUpdateWithoutPaymentSchedulesInput, UserUncheckedUpdateWithoutPaymentSchedulesInput>
    create: XOR<UserCreateWithoutPaymentSchedulesInput, UserUncheckedCreateWithoutPaymentSchedulesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentSchedulesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentSchedulesInput, UserUncheckedUpdateWithoutPaymentSchedulesInput>
  }

  export type UserUpdateWithoutPaymentSchedulesInput = {
    email?: StringFieldUpdateOperationsInput | string
    isRenter?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dni?: IntFieldUpdateOperationsInput | number
    invoices?: InvoiceUpdateManyWithoutCustNestedInput
    keys?: KeyUpdateManyWithoutCustNestedInput
    leaseContractsAsCust?: LeaseContractUpdateManyWithoutCustNestedInput
    leaseContractsAsRenter?: LeaseContractUpdateManyWithoutRenterNestedInput
    Location?: LocationUpdateManyWithoutCustNestedInput
    rentedLocations?: LocationUpdateManyWithoutRenterNestedInput
    payments?: PaymentUpdateManyWithoutCustNestedInput
    PaymentRecord?: PaymentRecordUpdateManyWithoutCustNestedInput
    priceAdjustments?: PriceAdjustmentUpdateManyWithoutCustNestedInput
    RentHistory?: RentHistoryUpdateManyWithoutCustNestedInput
    cust?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCustNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    isRenter?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    dni?: IntFieldUpdateOperationsInput | number
    invoices?: InvoiceUncheckedUpdateManyWithoutCustNestedInput
    keys?: KeyUncheckedUpdateManyWithoutCustNestedInput
    leaseContractsAsCust?: LeaseContractUncheckedUpdateManyWithoutCustNestedInput
    leaseContractsAsRenter?: LeaseContractUncheckedUpdateManyWithoutRenterNestedInput
    Location?: LocationUncheckedUpdateManyWithoutCustNestedInput
    rentedLocations?: LocationUncheckedUpdateManyWithoutRenterNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCustNestedInput
    PaymentRecord?: PaymentRecordUncheckedUpdateManyWithoutCustNestedInput
    priceAdjustments?: PriceAdjustmentUncheckedUpdateManyWithoutCustNestedInput
    RentHistory?: RentHistoryUncheckedUpdateManyWithoutCustNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCustNestedInput
  }

  export type LocationUpsertWithoutPaymentSchedulesInput = {
    update: XOR<LocationUpdateWithoutPaymentSchedulesInput, LocationUncheckedUpdateWithoutPaymentSchedulesInput>
    create: XOR<LocationCreateWithoutPaymentSchedulesInput, LocationUncheckedCreateWithoutPaymentSchedulesInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutPaymentSchedulesInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutPaymentSchedulesInput, LocationUncheckedUpdateWithoutPaymentSchedulesInput>
  }

  export type LocationUpdateWithoutPaymentSchedulesInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AdjustmentLocation?: AdjustmentLocationUpdateManyWithoutLocationNestedInput
    invoices?: InvoiceUpdateManyWithoutLocationNestedInput
    keys?: KeyUpdateManyWithoutLocationNestedInput
    contracts?: LeaseContractUpdateManyWithoutLocationNestedInput
    cust?: UserUpdateOneWithoutLocationNestedInput
    renter?: UserUpdateOneRequiredWithoutRentedLocationsNestedInput
    payments?: PaymentUpdateManyWithoutLocationNestedInput
    PaymentRecord?: PaymentRecordUpdateManyWithoutLocationNestedInput
    rentHistory?: RentHistoryUpdateManyWithoutLocationNestedInput
    adjustments?: PriceAdjustmentUpdateManyWithoutLocationsNestedInput
  }

  export type LocationUncheckedUpdateWithoutPaymentSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    renterId?: IntFieldUpdateOperationsInput | number
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AdjustmentLocation?: AdjustmentLocationUncheckedUpdateManyWithoutLocationNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutLocationNestedInput
    keys?: KeyUncheckedUpdateManyWithoutLocationNestedInput
    contracts?: LeaseContractUncheckedUpdateManyWithoutLocationNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutLocationNestedInput
    PaymentRecord?: PaymentRecordUncheckedUpdateManyWithoutLocationNestedInput
    rentHistory?: RentHistoryUncheckedUpdateManyWithoutLocationNestedInput
    adjustments?: PriceAdjustmentUncheckedUpdateManyWithoutLocationsNestedInput
  }

  export type UserCreateWithoutRentHistoryInput = {
    email: string
    isRenter?: boolean
    accessToken?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    createdAt?: Date | string
    password?: string | null
    updatedAt?: Date | string | null
    dni: number
    invoices?: InvoiceCreateNestedManyWithoutCustInput
    keys?: KeyCreateNestedManyWithoutCustInput
    leaseContractsAsCust?: LeaseContractCreateNestedManyWithoutCustInput
    leaseContractsAsRenter?: LeaseContractCreateNestedManyWithoutRenterInput
    Location?: LocationCreateNestedManyWithoutCustInput
    rentedLocations?: LocationCreateNestedManyWithoutRenterInput
    payments?: PaymentCreateNestedManyWithoutCustInput
    PaymentRecord?: PaymentRecordCreateNestedManyWithoutCustInput
    paymentSchedules?: PaymentScheduleCreateNestedManyWithoutCustInput
    priceAdjustments?: PriceAdjustmentCreateNestedManyWithoutCustInput
    cust?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCustInput
  }

  export type UserUncheckedCreateWithoutRentHistoryInput = {
    id?: number
    email: string
    isRenter?: boolean
    accessToken?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    createdAt?: Date | string
    password?: string | null
    updatedAt?: Date | string | null
    CUST_ID?: number | null
    dni: number
    invoices?: InvoiceUncheckedCreateNestedManyWithoutCustInput
    keys?: KeyUncheckedCreateNestedManyWithoutCustInput
    leaseContractsAsCust?: LeaseContractUncheckedCreateNestedManyWithoutCustInput
    leaseContractsAsRenter?: LeaseContractUncheckedCreateNestedManyWithoutRenterInput
    Location?: LocationUncheckedCreateNestedManyWithoutCustInput
    rentedLocations?: LocationUncheckedCreateNestedManyWithoutRenterInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCustInput
    PaymentRecord?: PaymentRecordUncheckedCreateNestedManyWithoutCustInput
    paymentSchedules?: PaymentScheduleUncheckedCreateNestedManyWithoutCustInput
    priceAdjustments?: PriceAdjustmentUncheckedCreateNestedManyWithoutCustInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCustInput
  }

  export type UserCreateOrConnectWithoutRentHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRentHistoryInput, UserUncheckedCreateWithoutRentHistoryInput>
  }

  export type LocationCreateWithoutRentHistoryInput = {
    name: string
    address: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    AdjustmentLocation?: AdjustmentLocationCreateNestedManyWithoutLocationInput
    invoices?: InvoiceCreateNestedManyWithoutLocationInput
    keys?: KeyCreateNestedManyWithoutLocationInput
    contracts?: LeaseContractCreateNestedManyWithoutLocationInput
    cust?: UserCreateNestedOneWithoutLocationInput
    renter: UserCreateNestedOneWithoutRentedLocationsInput
    payments?: PaymentCreateNestedManyWithoutLocationInput
    PaymentRecord?: PaymentRecordCreateNestedManyWithoutLocationInput
    paymentSchedules?: PaymentScheduleCreateNestedManyWithoutLocationInput
    adjustments?: PriceAdjustmentCreateNestedManyWithoutLocationsInput
  }

  export type LocationUncheckedCreateWithoutRentHistoryInput = {
    id?: number
    name: string
    address: string
    renterId: number
    CUST_ID?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    AdjustmentLocation?: AdjustmentLocationUncheckedCreateNestedManyWithoutLocationInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutLocationInput
    keys?: KeyUncheckedCreateNestedManyWithoutLocationInput
    contracts?: LeaseContractUncheckedCreateNestedManyWithoutLocationInput
    payments?: PaymentUncheckedCreateNestedManyWithoutLocationInput
    PaymentRecord?: PaymentRecordUncheckedCreateNestedManyWithoutLocationInput
    paymentSchedules?: PaymentScheduleUncheckedCreateNestedManyWithoutLocationInput
    adjustments?: PriceAdjustmentUncheckedCreateNestedManyWithoutLocationsInput
  }

  export type LocationCreateOrConnectWithoutRentHistoryInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutRentHistoryInput, LocationUncheckedCreateWithoutRentHistoryInput>
  }

  export type UserUpsertWithoutRentHistoryInput = {
    update: XOR<UserUpdateWithoutRentHistoryInput, UserUncheckedUpdateWithoutRentHistoryInput>
    create: XOR<UserCreateWithoutRentHistoryInput, UserUncheckedCreateWithoutRentHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRentHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRentHistoryInput, UserUncheckedUpdateWithoutRentHistoryInput>
  }

  export type UserUpdateWithoutRentHistoryInput = {
    email?: StringFieldUpdateOperationsInput | string
    isRenter?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dni?: IntFieldUpdateOperationsInput | number
    invoices?: InvoiceUpdateManyWithoutCustNestedInput
    keys?: KeyUpdateManyWithoutCustNestedInput
    leaseContractsAsCust?: LeaseContractUpdateManyWithoutCustNestedInput
    leaseContractsAsRenter?: LeaseContractUpdateManyWithoutRenterNestedInput
    Location?: LocationUpdateManyWithoutCustNestedInput
    rentedLocations?: LocationUpdateManyWithoutRenterNestedInput
    payments?: PaymentUpdateManyWithoutCustNestedInput
    PaymentRecord?: PaymentRecordUpdateManyWithoutCustNestedInput
    paymentSchedules?: PaymentScheduleUpdateManyWithoutCustNestedInput
    priceAdjustments?: PriceAdjustmentUpdateManyWithoutCustNestedInput
    cust?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCustNestedInput
  }

  export type UserUncheckedUpdateWithoutRentHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    isRenter?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    dni?: IntFieldUpdateOperationsInput | number
    invoices?: InvoiceUncheckedUpdateManyWithoutCustNestedInput
    keys?: KeyUncheckedUpdateManyWithoutCustNestedInput
    leaseContractsAsCust?: LeaseContractUncheckedUpdateManyWithoutCustNestedInput
    leaseContractsAsRenter?: LeaseContractUncheckedUpdateManyWithoutRenterNestedInput
    Location?: LocationUncheckedUpdateManyWithoutCustNestedInput
    rentedLocations?: LocationUncheckedUpdateManyWithoutRenterNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCustNestedInput
    PaymentRecord?: PaymentRecordUncheckedUpdateManyWithoutCustNestedInput
    paymentSchedules?: PaymentScheduleUncheckedUpdateManyWithoutCustNestedInput
    priceAdjustments?: PriceAdjustmentUncheckedUpdateManyWithoutCustNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCustNestedInput
  }

  export type LocationUpsertWithoutRentHistoryInput = {
    update: XOR<LocationUpdateWithoutRentHistoryInput, LocationUncheckedUpdateWithoutRentHistoryInput>
    create: XOR<LocationCreateWithoutRentHistoryInput, LocationUncheckedCreateWithoutRentHistoryInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutRentHistoryInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutRentHistoryInput, LocationUncheckedUpdateWithoutRentHistoryInput>
  }

  export type LocationUpdateWithoutRentHistoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AdjustmentLocation?: AdjustmentLocationUpdateManyWithoutLocationNestedInput
    invoices?: InvoiceUpdateManyWithoutLocationNestedInput
    keys?: KeyUpdateManyWithoutLocationNestedInput
    contracts?: LeaseContractUpdateManyWithoutLocationNestedInput
    cust?: UserUpdateOneWithoutLocationNestedInput
    renter?: UserUpdateOneRequiredWithoutRentedLocationsNestedInput
    payments?: PaymentUpdateManyWithoutLocationNestedInput
    PaymentRecord?: PaymentRecordUpdateManyWithoutLocationNestedInput
    paymentSchedules?: PaymentScheduleUpdateManyWithoutLocationNestedInput
    adjustments?: PriceAdjustmentUpdateManyWithoutLocationsNestedInput
  }

  export type LocationUncheckedUpdateWithoutRentHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    renterId?: IntFieldUpdateOperationsInput | number
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AdjustmentLocation?: AdjustmentLocationUncheckedUpdateManyWithoutLocationNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutLocationNestedInput
    keys?: KeyUncheckedUpdateManyWithoutLocationNestedInput
    contracts?: LeaseContractUncheckedUpdateManyWithoutLocationNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutLocationNestedInput
    PaymentRecord?: PaymentRecordUncheckedUpdateManyWithoutLocationNestedInput
    paymentSchedules?: PaymentScheduleUncheckedUpdateManyWithoutLocationNestedInput
    adjustments?: PriceAdjustmentUncheckedUpdateManyWithoutLocationsNestedInput
  }

  export type InvoiceCreateManyCustInput = {
    id?: number
    locationId: number
    date: Date | string
  }

  export type KeyCreateManyCustInput = {
    id?: number
    locationId: number
    issueDate: Date | string
    returnDate?: Date | string | null
  }

  export type LeaseContractCreateManyCustInput = {
    id?: number
    locationId: number
    startDate: Date | string
    endDate: Date | string
    finishedDate?: Date | string | null
    rentAmount: number
    active?: boolean
    cancelled?: boolean
    createdAt?: Date | string
    pdfPath?: string | null
    renterId: number
  }

  export type LeaseContractCreateManyRenterInput = {
    id?: number
    locationId: number
    startDate: Date | string
    endDate: Date | string
    finishedDate?: Date | string | null
    rentAmount: number
    active?: boolean
    cancelled?: boolean
    createdAt?: Date | string
    pdfPath?: string | null
    CUST_ID?: number | null
  }

  export type LocationCreateManyCustInput = {
    id?: number
    name: string
    address: string
    renterId: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type LocationCreateManyRenterInput = {
    id?: number
    name: string
    address: string
    CUST_ID?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type PaymentCreateManyCustInput = {
    id?: number
    locationId: number
    date?: Date | string
    amount: number
    paymentMethodId: number
    paymentRecordId: number
    month: number
    year: number
  }

  export type PaymentRecordCreateManyCustInput = {
    id?: number
    locationId: number
    month: number
    year: number
    remainingAmount?: number
    totalPaid?: number
    totalRent: number
  }

  export type PaymentScheduleCreateManyCustInput = {
    id?: number
    locationId: number
    dueDate: Date | string
  }

  export type PriceAdjustmentCreateManyCustInput = {
    id?: number
    amount: number
    period: number
    status: number
    applyToAll: boolean
    type: number
    createdAt?: Date | string
    lastExecutedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type RentHistoryCreateManyCustInput = {
    id?: number
    locationId: number
    month: number
    year: number
    rentAmount: number
    createdAt?: Date | string
  }

  export type UserCreateManyCustInput = {
    id?: number
    email: string
    isRenter?: boolean
    accessToken?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    createdAt?: Date | string
    password?: string | null
    updatedAt?: Date | string | null
    dni: number
  }

  export type InvoiceUpdateWithoutCustInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutCustInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyWithoutCustInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeyUpdateWithoutCustInput = {
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: LocationUpdateOneRequiredWithoutKeysNestedInput
  }

  export type KeyUncheckedUpdateWithoutCustInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type KeyUncheckedUpdateManyWithoutCustInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LeaseContractUpdateWithoutCustInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rentAmount?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pdfPath?: NullableStringFieldUpdateOperationsInput | string | null
    location?: LocationUpdateOneRequiredWithoutContractsNestedInput
    renter?: UserUpdateOneRequiredWithoutLeaseContractsAsRenterNestedInput
  }

  export type LeaseContractUncheckedUpdateWithoutCustInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rentAmount?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pdfPath?: NullableStringFieldUpdateOperationsInput | string | null
    renterId?: IntFieldUpdateOperationsInput | number
  }

  export type LeaseContractUncheckedUpdateManyWithoutCustInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rentAmount?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pdfPath?: NullableStringFieldUpdateOperationsInput | string | null
    renterId?: IntFieldUpdateOperationsInput | number
  }

  export type LeaseContractUpdateWithoutRenterInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rentAmount?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pdfPath?: NullableStringFieldUpdateOperationsInput | string | null
    cust?: UserUpdateOneWithoutLeaseContractsAsCustNestedInput
    location?: LocationUpdateOneRequiredWithoutContractsNestedInput
  }

  export type LeaseContractUncheckedUpdateWithoutRenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rentAmount?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pdfPath?: NullableStringFieldUpdateOperationsInput | string | null
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LeaseContractUncheckedUpdateManyWithoutRenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rentAmount?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pdfPath?: NullableStringFieldUpdateOperationsInput | string | null
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LocationUpdateWithoutCustInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AdjustmentLocation?: AdjustmentLocationUpdateManyWithoutLocationNestedInput
    invoices?: InvoiceUpdateManyWithoutLocationNestedInput
    keys?: KeyUpdateManyWithoutLocationNestedInput
    contracts?: LeaseContractUpdateManyWithoutLocationNestedInput
    renter?: UserUpdateOneRequiredWithoutRentedLocationsNestedInput
    payments?: PaymentUpdateManyWithoutLocationNestedInput
    PaymentRecord?: PaymentRecordUpdateManyWithoutLocationNestedInput
    paymentSchedules?: PaymentScheduleUpdateManyWithoutLocationNestedInput
    rentHistory?: RentHistoryUpdateManyWithoutLocationNestedInput
    adjustments?: PriceAdjustmentUpdateManyWithoutLocationsNestedInput
  }

  export type LocationUncheckedUpdateWithoutCustInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    renterId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AdjustmentLocation?: AdjustmentLocationUncheckedUpdateManyWithoutLocationNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutLocationNestedInput
    keys?: KeyUncheckedUpdateManyWithoutLocationNestedInput
    contracts?: LeaseContractUncheckedUpdateManyWithoutLocationNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutLocationNestedInput
    PaymentRecord?: PaymentRecordUncheckedUpdateManyWithoutLocationNestedInput
    paymentSchedules?: PaymentScheduleUncheckedUpdateManyWithoutLocationNestedInput
    rentHistory?: RentHistoryUncheckedUpdateManyWithoutLocationNestedInput
    adjustments?: PriceAdjustmentUncheckedUpdateManyWithoutLocationsNestedInput
  }

  export type LocationUncheckedUpdateManyWithoutCustInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    renterId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LocationUpdateWithoutRenterInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AdjustmentLocation?: AdjustmentLocationUpdateManyWithoutLocationNestedInput
    invoices?: InvoiceUpdateManyWithoutLocationNestedInput
    keys?: KeyUpdateManyWithoutLocationNestedInput
    contracts?: LeaseContractUpdateManyWithoutLocationNestedInput
    cust?: UserUpdateOneWithoutLocationNestedInput
    payments?: PaymentUpdateManyWithoutLocationNestedInput
    PaymentRecord?: PaymentRecordUpdateManyWithoutLocationNestedInput
    paymentSchedules?: PaymentScheduleUpdateManyWithoutLocationNestedInput
    rentHistory?: RentHistoryUpdateManyWithoutLocationNestedInput
    adjustments?: PriceAdjustmentUpdateManyWithoutLocationsNestedInput
  }

  export type LocationUncheckedUpdateWithoutRenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AdjustmentLocation?: AdjustmentLocationUncheckedUpdateManyWithoutLocationNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutLocationNestedInput
    keys?: KeyUncheckedUpdateManyWithoutLocationNestedInput
    contracts?: LeaseContractUncheckedUpdateManyWithoutLocationNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutLocationNestedInput
    PaymentRecord?: PaymentRecordUncheckedUpdateManyWithoutLocationNestedInput
    paymentSchedules?: PaymentScheduleUncheckedUpdateManyWithoutLocationNestedInput
    rentHistory?: RentHistoryUncheckedUpdateManyWithoutLocationNestedInput
    adjustments?: PriceAdjustmentUncheckedUpdateManyWithoutLocationsNestedInput
  }

  export type LocationUncheckedUpdateManyWithoutRenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentUpdateWithoutCustInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    location?: LocationUpdateOneRequiredWithoutPaymentsNestedInput
    paymentMethod?: PaymentMethodUpdateOneRequiredWithoutPaymentsNestedInput
    paymentRecord?: PaymentRecordUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutCustInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    paymentMethodId?: IntFieldUpdateOperationsInput | number
    paymentRecordId?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentUncheckedUpdateManyWithoutCustInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    paymentMethodId?: IntFieldUpdateOperationsInput | number
    paymentRecordId?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentRecordUpdateWithoutCustInput = {
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    totalPaid?: IntFieldUpdateOperationsInput | number
    totalRent?: IntFieldUpdateOperationsInput | number
    payments?: PaymentUpdateManyWithoutPaymentRecordNestedInput
    location?: LocationUpdateOneRequiredWithoutPaymentRecordNestedInput
  }

  export type PaymentRecordUncheckedUpdateWithoutCustInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    totalPaid?: IntFieldUpdateOperationsInput | number
    totalRent?: IntFieldUpdateOperationsInput | number
    payments?: PaymentUncheckedUpdateManyWithoutPaymentRecordNestedInput
  }

  export type PaymentRecordUncheckedUpdateManyWithoutCustInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    totalPaid?: IntFieldUpdateOperationsInput | number
    totalRent?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentScheduleUpdateWithoutCustInput = {
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutPaymentSchedulesNestedInput
  }

  export type PaymentScheduleUncheckedUpdateWithoutCustInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentScheduleUncheckedUpdateManyWithoutCustInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceAdjustmentUpdateWithoutCustInput = {
    amount?: IntFieldUpdateOperationsInput | number
    period?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    applyToAll?: BoolFieldUpdateOperationsInput | boolean
    type?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastExecutedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AdjustmentLocation?: AdjustmentLocationUpdateManyWithoutPriceAdjustmentNestedInput
    locations?: LocationUpdateManyWithoutAdjustmentsNestedInput
  }

  export type PriceAdjustmentUncheckedUpdateWithoutCustInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    period?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    applyToAll?: BoolFieldUpdateOperationsInput | boolean
    type?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastExecutedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AdjustmentLocation?: AdjustmentLocationUncheckedUpdateManyWithoutPriceAdjustmentNestedInput
    locations?: LocationUncheckedUpdateManyWithoutAdjustmentsNestedInput
  }

  export type PriceAdjustmentUncheckedUpdateManyWithoutCustInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    period?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    applyToAll?: BoolFieldUpdateOperationsInput | boolean
    type?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastExecutedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentHistoryUpdateWithoutCustInput = {
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    rentAmount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutRentHistoryNestedInput
  }

  export type RentHistoryUncheckedUpdateWithoutCustInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    rentAmount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentHistoryUncheckedUpdateManyWithoutCustInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    rentAmount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutCustInput = {
    email?: StringFieldUpdateOperationsInput | string
    isRenter?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dni?: IntFieldUpdateOperationsInput | number
    invoices?: InvoiceUpdateManyWithoutCustNestedInput
    keys?: KeyUpdateManyWithoutCustNestedInput
    leaseContractsAsCust?: LeaseContractUpdateManyWithoutCustNestedInput
    leaseContractsAsRenter?: LeaseContractUpdateManyWithoutRenterNestedInput
    Location?: LocationUpdateManyWithoutCustNestedInput
    rentedLocations?: LocationUpdateManyWithoutRenterNestedInput
    payments?: PaymentUpdateManyWithoutCustNestedInput
    PaymentRecord?: PaymentRecordUpdateManyWithoutCustNestedInput
    paymentSchedules?: PaymentScheduleUpdateManyWithoutCustNestedInput
    priceAdjustments?: PriceAdjustmentUpdateManyWithoutCustNestedInput
    RentHistory?: RentHistoryUpdateManyWithoutCustNestedInput
    createdUsers?: UserUpdateManyWithoutCustNestedInput
  }

  export type UserUncheckedUpdateWithoutCustInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    isRenter?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dni?: IntFieldUpdateOperationsInput | number
    invoices?: InvoiceUncheckedUpdateManyWithoutCustNestedInput
    keys?: KeyUncheckedUpdateManyWithoutCustNestedInput
    leaseContractsAsCust?: LeaseContractUncheckedUpdateManyWithoutCustNestedInput
    leaseContractsAsRenter?: LeaseContractUncheckedUpdateManyWithoutRenterNestedInput
    Location?: LocationUncheckedUpdateManyWithoutCustNestedInput
    rentedLocations?: LocationUncheckedUpdateManyWithoutRenterNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCustNestedInput
    PaymentRecord?: PaymentRecordUncheckedUpdateManyWithoutCustNestedInput
    paymentSchedules?: PaymentScheduleUncheckedUpdateManyWithoutCustNestedInput
    priceAdjustments?: PriceAdjustmentUncheckedUpdateManyWithoutCustNestedInput
    RentHistory?: RentHistoryUncheckedUpdateManyWithoutCustNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCustNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCustInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    isRenter?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dni?: IntFieldUpdateOperationsInput | number
  }

  export type AdjustmentLocationCreateManyLocationInput = {
    id?: number
    priceAdjustmentId: number
  }

  export type InvoiceCreateManyLocationInput = {
    id?: number
    date: Date | string
    CUST_ID?: number | null
  }

  export type KeyCreateManyLocationInput = {
    id?: number
    issueDate: Date | string
    returnDate?: Date | string | null
    CUST_ID?: number | null
  }

  export type LeaseContractCreateManyLocationInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    finishedDate?: Date | string | null
    rentAmount: number
    active?: boolean
    cancelled?: boolean
    createdAt?: Date | string
    pdfPath?: string | null
    CUST_ID?: number | null
    renterId: number
  }

  export type PaymentCreateManyLocationInput = {
    id?: number
    date?: Date | string
    amount: number
    paymentMethodId: number
    CUST_ID?: number | null
    paymentRecordId: number
    month: number
    year: number
  }

  export type PaymentRecordCreateManyLocationInput = {
    id?: number
    month: number
    year: number
    CUST_ID?: number | null
    remainingAmount?: number
    totalPaid?: number
    totalRent: number
  }

  export type PaymentScheduleCreateManyLocationInput = {
    id?: number
    dueDate: Date | string
    CUST_ID?: number | null
  }

  export type RentHistoryCreateManyLocationInput = {
    id?: number
    month: number
    year: number
    rentAmount: number
    createdAt?: Date | string
    CUST_ID?: number | null
  }

  export type AdjustmentLocationUpdateWithoutLocationInput = {
    priceAdjustment?: PriceAdjustmentUpdateOneRequiredWithoutAdjustmentLocationNestedInput
  }

  export type AdjustmentLocationUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    priceAdjustmentId?: IntFieldUpdateOperationsInput | number
  }

  export type AdjustmentLocationUncheckedUpdateManyWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    priceAdjustmentId?: IntFieldUpdateOperationsInput | number
  }

  export type InvoiceUpdateWithoutLocationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    cust?: UserUpdateOneWithoutInvoicesNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InvoiceUncheckedUpdateManyWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type KeyUpdateWithoutLocationInput = {
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cust?: UserUpdateOneWithoutKeysNestedInput
  }

  export type KeyUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type KeyUncheckedUpdateManyWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LeaseContractUpdateWithoutLocationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rentAmount?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pdfPath?: NullableStringFieldUpdateOperationsInput | string | null
    cust?: UserUpdateOneWithoutLeaseContractsAsCustNestedInput
    renter?: UserUpdateOneRequiredWithoutLeaseContractsAsRenterNestedInput
  }

  export type LeaseContractUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rentAmount?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pdfPath?: NullableStringFieldUpdateOperationsInput | string | null
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    renterId?: IntFieldUpdateOperationsInput | number
  }

  export type LeaseContractUncheckedUpdateManyWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rentAmount?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pdfPath?: NullableStringFieldUpdateOperationsInput | string | null
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    renterId?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentUpdateWithoutLocationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    cust?: UserUpdateOneWithoutPaymentsNestedInput
    paymentMethod?: PaymentMethodUpdateOneRequiredWithoutPaymentsNestedInput
    paymentRecord?: PaymentRecordUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    paymentMethodId?: IntFieldUpdateOperationsInput | number
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    paymentRecordId?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentUncheckedUpdateManyWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    paymentMethodId?: IntFieldUpdateOperationsInput | number
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    paymentRecordId?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentRecordUpdateWithoutLocationInput = {
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    remainingAmount?: IntFieldUpdateOperationsInput | number
    totalPaid?: IntFieldUpdateOperationsInput | number
    totalRent?: IntFieldUpdateOperationsInput | number
    payments?: PaymentUpdateManyWithoutPaymentRecordNestedInput
    cust?: UserUpdateOneWithoutPaymentRecordNestedInput
  }

  export type PaymentRecordUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    remainingAmount?: IntFieldUpdateOperationsInput | number
    totalPaid?: IntFieldUpdateOperationsInput | number
    totalRent?: IntFieldUpdateOperationsInput | number
    payments?: PaymentUncheckedUpdateManyWithoutPaymentRecordNestedInput
  }

  export type PaymentRecordUncheckedUpdateManyWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    remainingAmount?: IntFieldUpdateOperationsInput | number
    totalPaid?: IntFieldUpdateOperationsInput | number
    totalRent?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentScheduleUpdateWithoutLocationInput = {
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cust?: UserUpdateOneWithoutPaymentSchedulesNestedInput
  }

  export type PaymentScheduleUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PaymentScheduleUncheckedUpdateManyWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RentHistoryUpdateWithoutLocationInput = {
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    rentAmount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cust?: UserUpdateOneWithoutRentHistoryNestedInput
  }

  export type RentHistoryUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    rentAmount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RentHistoryUncheckedUpdateManyWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    rentAmount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PriceAdjustmentUpdateWithoutLocationsInput = {
    amount?: IntFieldUpdateOperationsInput | number
    period?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    applyToAll?: BoolFieldUpdateOperationsInput | boolean
    type?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastExecutedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AdjustmentLocation?: AdjustmentLocationUpdateManyWithoutPriceAdjustmentNestedInput
    cust?: UserUpdateOneWithoutPriceAdjustmentsNestedInput
  }

  export type PriceAdjustmentUncheckedUpdateWithoutLocationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: IntFieldUpdateOperationsInput | number
    period?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    applyToAll?: BoolFieldUpdateOperationsInput | boolean
    type?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastExecutedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AdjustmentLocation?: AdjustmentLocationUncheckedUpdateManyWithoutPriceAdjustmentNestedInput
  }

  export type PriceAdjustmentUncheckedUpdateManyWithoutLocationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: IntFieldUpdateOperationsInput | number
    period?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    applyToAll?: BoolFieldUpdateOperationsInput | boolean
    type?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastExecutedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdjustmentLocationCreateManyPriceAdjustmentInput = {
    id?: number
    locationId: number
  }

  export type AdjustmentLocationUpdateWithoutPriceAdjustmentInput = {
    location?: LocationUpdateOneRequiredWithoutAdjustmentLocationNestedInput
  }

  export type AdjustmentLocationUncheckedUpdateWithoutPriceAdjustmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
  }

  export type AdjustmentLocationUncheckedUpdateManyWithoutPriceAdjustmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
  }

  export type LocationUpdateWithoutAdjustmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AdjustmentLocation?: AdjustmentLocationUpdateManyWithoutLocationNestedInput
    invoices?: InvoiceUpdateManyWithoutLocationNestedInput
    keys?: KeyUpdateManyWithoutLocationNestedInput
    contracts?: LeaseContractUpdateManyWithoutLocationNestedInput
    cust?: UserUpdateOneWithoutLocationNestedInput
    renter?: UserUpdateOneRequiredWithoutRentedLocationsNestedInput
    payments?: PaymentUpdateManyWithoutLocationNestedInput
    PaymentRecord?: PaymentRecordUpdateManyWithoutLocationNestedInput
    paymentSchedules?: PaymentScheduleUpdateManyWithoutLocationNestedInput
    rentHistory?: RentHistoryUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutAdjustmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    renterId?: IntFieldUpdateOperationsInput | number
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AdjustmentLocation?: AdjustmentLocationUncheckedUpdateManyWithoutLocationNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutLocationNestedInput
    keys?: KeyUncheckedUpdateManyWithoutLocationNestedInput
    contracts?: LeaseContractUncheckedUpdateManyWithoutLocationNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutLocationNestedInput
    PaymentRecord?: PaymentRecordUncheckedUpdateManyWithoutLocationNestedInput
    paymentSchedules?: PaymentScheduleUncheckedUpdateManyWithoutLocationNestedInput
    rentHistory?: RentHistoryUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateManyWithoutAdjustmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    renterId?: IntFieldUpdateOperationsInput | number
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentCreateManyPaymentRecordInput = {
    id?: number
    locationId: number
    date?: Date | string
    amount: number
    paymentMethodId: number
    CUST_ID?: number | null
    month: number
    year: number
  }

  export type PaymentUpdateWithoutPaymentRecordInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    cust?: UserUpdateOneWithoutPaymentsNestedInput
    location?: LocationUpdateOneRequiredWithoutPaymentsNestedInput
    paymentMethod?: PaymentMethodUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutPaymentRecordInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    paymentMethodId?: IntFieldUpdateOperationsInput | number
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentUncheckedUpdateManyWithoutPaymentRecordInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    paymentMethodId?: IntFieldUpdateOperationsInput | number
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentCreateManyPaymentMethodInput = {
    id?: number
    locationId: number
    date?: Date | string
    amount: number
    CUST_ID?: number | null
    paymentRecordId: number
    month: number
    year: number
  }

  export type PaymentUpdateWithoutPaymentMethodInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    cust?: UserUpdateOneWithoutPaymentsNestedInput
    location?: LocationUpdateOneRequiredWithoutPaymentsNestedInput
    paymentRecord?: PaymentRecordUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutPaymentMethodInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    paymentRecordId?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentUncheckedUpdateManyWithoutPaymentMethodInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    CUST_ID?: NullableIntFieldUpdateOperationsInput | number | null
    paymentRecordId?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LocationCountOutputTypeDefaultArgs instead
     */
    export type LocationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LocationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PriceAdjustmentCountOutputTypeDefaultArgs instead
     */
    export type PriceAdjustmentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PriceAdjustmentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentRecordCountOutputTypeDefaultArgs instead
     */
    export type PaymentRecordCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentRecordCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentMethodCountOutputTypeDefaultArgs instead
     */
    export type PaymentMethodCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentMethodCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LocationDefaultArgs instead
     */
    export type LocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LocationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LeaseContractDefaultArgs instead
     */
    export type LeaseContractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LeaseContractDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KeyDefaultArgs instead
     */
    export type KeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KeyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PriceAdjustmentDefaultArgs instead
     */
    export type PriceAdjustmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PriceAdjustmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdjustmentLocationDefaultArgs instead
     */
    export type AdjustmentLocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdjustmentLocationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentDefaultArgs instead
     */
    export type PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentRecordDefaultArgs instead
     */
    export type PaymentRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentRecordDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentMethodDefaultArgs instead
     */
    export type PaymentMethodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentMethodDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InvoiceDefaultArgs instead
     */
    export type InvoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InvoiceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentScheduleDefaultArgs instead
     */
    export type PaymentScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentScheduleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RentHistoryDefaultArgs instead
     */
    export type RentHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RentHistoryDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}