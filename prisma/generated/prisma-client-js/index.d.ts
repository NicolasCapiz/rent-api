
/**
 * Client
**/

import * as runtime from './runtime/library';
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
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
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
 * Model Key
 * 
 */
export type Key = $Result.DefaultSelection<Prisma.$KeyPayload>
/**
 * Model Contract
 * 
 */
export type Contract = $Result.DefaultSelection<Prisma.$ContractPayload>
/**
 * Model PriceAdjustment
 * 
 */
export type PriceAdjustment = $Result.DefaultSelection<Prisma.$PriceAdjustmentPayload>

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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

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
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs>;

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
   * `prisma.key`: Exposes CRUD operations for the **Key** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Keys
    * const keys = await prisma.key.findMany()
    * ```
    */
  get key(): Prisma.KeyDelegate<ExtArgs>;

  /**
   * `prisma.contract`: Exposes CRUD operations for the **Contract** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contracts
    * const contracts = await prisma.contract.findMany()
    * ```
    */
  get contract(): Prisma.ContractDelegate<ExtArgs>;

  /**
   * `prisma.priceAdjustment`: Exposes CRUD operations for the **PriceAdjustment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PriceAdjustments
    * const priceAdjustments = await prisma.priceAdjustment.findMany()
    * ```
    */
  get priceAdjustment(): Prisma.PriceAdjustmentDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.8.0
   * Query Engine version: 0a83d8541752d7582de2ebc1ece46519ce72a848
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
    Payment: 'Payment',
    Invoice: 'Invoice',
    PaymentSchedule: 'PaymentSchedule',
    Key: 'Key',
    Contract: 'Contract',
    PriceAdjustment: 'PriceAdjustment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'location' | 'payment' | 'invoice' | 'paymentSchedule' | 'key' | 'contract' | 'priceAdjustment'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>,
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>,
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>,
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      PaymentSchedule: {
        payload: Prisma.$PaymentSchedulePayload<ExtArgs>
        fields: Prisma.PaymentScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentScheduleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentScheduleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentSchedulePayload>
          }
          findFirst: {
            args: Prisma.PaymentScheduleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentScheduleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentSchedulePayload>
          }
          findMany: {
            args: Prisma.PaymentScheduleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentSchedulePayload>[]
          }
          create: {
            args: Prisma.PaymentScheduleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentSchedulePayload>
          }
          createMany: {
            args: Prisma.PaymentScheduleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PaymentScheduleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentSchedulePayload>
          }
          update: {
            args: Prisma.PaymentScheduleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentSchedulePayload>
          }
          deleteMany: {
            args: Prisma.PaymentScheduleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentScheduleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PaymentScheduleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentSchedulePayload>
          }
          aggregate: {
            args: Prisma.PaymentScheduleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePaymentSchedule>
          }
          groupBy: {
            args: Prisma.PaymentScheduleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PaymentScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentScheduleCountArgs<ExtArgs>,
            result: $Utils.Optional<PaymentScheduleCountAggregateOutputType> | number
          }
        }
      }
      Key: {
        payload: Prisma.$KeyPayload<ExtArgs>
        fields: Prisma.KeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KeyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KeyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>
          }
          findFirst: {
            args: Prisma.KeyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KeyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>
          }
          findMany: {
            args: Prisma.KeyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>[]
          }
          create: {
            args: Prisma.KeyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>
          }
          createMany: {
            args: Prisma.KeyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.KeyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>
          }
          update: {
            args: Prisma.KeyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>
          }
          deleteMany: {
            args: Prisma.KeyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.KeyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.KeyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>
          }
          aggregate: {
            args: Prisma.KeyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateKey>
          }
          groupBy: {
            args: Prisma.KeyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<KeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.KeyCountArgs<ExtArgs>,
            result: $Utils.Optional<KeyCountAggregateOutputType> | number
          }
        }
      }
      Contract: {
        payload: Prisma.$ContractPayload<ExtArgs>
        fields: Prisma.ContractFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContractFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContractFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findFirst: {
            args: Prisma.ContractFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContractFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findMany: {
            args: Prisma.ContractFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          create: {
            args: Prisma.ContractCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          createMany: {
            args: Prisma.ContractCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ContractDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          update: {
            args: Prisma.ContractUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          deleteMany: {
            args: Prisma.ContractDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ContractUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ContractUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          aggregate: {
            args: Prisma.ContractAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateContract>
          }
          groupBy: {
            args: Prisma.ContractGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ContractGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContractCountArgs<ExtArgs>,
            result: $Utils.Optional<ContractCountAggregateOutputType> | number
          }
        }
      }
      PriceAdjustment: {
        payload: Prisma.$PriceAdjustmentPayload<ExtArgs>
        fields: Prisma.PriceAdjustmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PriceAdjustmentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PriceAdjustmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PriceAdjustmentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PriceAdjustmentPayload>
          }
          findFirst: {
            args: Prisma.PriceAdjustmentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PriceAdjustmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PriceAdjustmentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PriceAdjustmentPayload>
          }
          findMany: {
            args: Prisma.PriceAdjustmentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PriceAdjustmentPayload>[]
          }
          create: {
            args: Prisma.PriceAdjustmentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PriceAdjustmentPayload>
          }
          createMany: {
            args: Prisma.PriceAdjustmentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PriceAdjustmentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PriceAdjustmentPayload>
          }
          update: {
            args: Prisma.PriceAdjustmentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PriceAdjustmentPayload>
          }
          deleteMany: {
            args: Prisma.PriceAdjustmentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PriceAdjustmentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PriceAdjustmentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PriceAdjustmentPayload>
          }
          aggregate: {
            args: Prisma.PriceAdjustmentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePriceAdjustment>
          }
          groupBy: {
            args: Prisma.PriceAdjustmentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PriceAdjustmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PriceAdjustmentCountArgs<ExtArgs>,
            result: $Utils.Optional<PriceAdjustmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    locations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locations?: boolean | UserCountOutputTypeCountLocationsArgs
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
  export type UserCountOutputTypeCountLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
  }



  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    contracts: number
    invoices: number
    keys: number
    payments: number
    PaymentSchedule: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contracts?: boolean | LocationCountOutputTypeCountContractsArgs
    invoices?: boolean | LocationCountOutputTypeCountInvoicesArgs
    keys?: boolean | LocationCountOutputTypeCountKeysArgs
    payments?: boolean | LocationCountOutputTypeCountPaymentsArgs
    PaymentSchedule?: boolean | LocationCountOutputTypeCountPaymentScheduleArgs
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
  export type LocationCountOutputTypeCountContractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
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
  export type LocationCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountPaymentScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentScheduleWhereInput
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
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    accessToken: string | null
    firstName: string | null
    lastName: string | null
    picture: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    accessToken: string | null
    firstName: string | null
    lastName: string | null
    picture: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    accessToken: number
    firstName: number
    lastName: number
    picture: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    accessToken?: true
    firstName?: true
    lastName?: true
    picture?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    accessToken?: true
    firstName?: true
    lastName?: true
    picture?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    accessToken?: true
    firstName?: true
    lastName?: true
    picture?: true
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
    accessToken: string
    firstName: string | null
    lastName: string | null
    picture: string | null
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
    accessToken?: boolean
    firstName?: boolean
    lastName?: boolean
    picture?: boolean
    locations?: boolean | User$locationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    accessToken?: boolean
    firstName?: boolean
    lastName?: boolean
    picture?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locations?: boolean | User$locationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      locations: Prisma.$LocationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      accessToken: string
      firstName: string | null
      lastName: string | null
      picture: string | null
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    locations<T extends User$locationsArgs<ExtArgs> = {}>(args?: Subset<T, User$locationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly accessToken: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly picture: FieldRef<"User", 'String'>
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
   * User.locations
   */
  export type User$locationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
    managerId: number | null
  }

  export type LocationSumAggregateOutputType = {
    id: number | null
    managerId: number | null
  }

  export type LocationMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    managerId: number | null
  }

  export type LocationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    managerId: number | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    name: number
    address: number
    managerId: number
    _all: number
  }


  export type LocationAvgAggregateInputType = {
    id?: true
    managerId?: true
  }

  export type LocationSumAggregateInputType = {
    id?: true
    managerId?: true
  }

  export type LocationMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    managerId?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    managerId?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    managerId?: true
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
    managerId: number
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
    managerId?: boolean
    contracts?: boolean | Location$contractsArgs<ExtArgs>
    invoices?: boolean | Location$invoicesArgs<ExtArgs>
    keys?: boolean | Location$keysArgs<ExtArgs>
    manager?: boolean | UserDefaultArgs<ExtArgs>
    payments?: boolean | Location$paymentsArgs<ExtArgs>
    PaymentSchedule?: boolean | Location$PaymentScheduleArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    managerId?: boolean
  }

  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contracts?: boolean | Location$contractsArgs<ExtArgs>
    invoices?: boolean | Location$invoicesArgs<ExtArgs>
    keys?: boolean | Location$keysArgs<ExtArgs>
    manager?: boolean | UserDefaultArgs<ExtArgs>
    payments?: boolean | Location$paymentsArgs<ExtArgs>
    PaymentSchedule?: boolean | Location$PaymentScheduleArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      contracts: Prisma.$ContractPayload<ExtArgs>[]
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
      keys: Prisma.$KeyPayload<ExtArgs>[]
      manager: Prisma.$UserPayload<ExtArgs>
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      PaymentSchedule: Prisma.$PaymentSchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      address: string
      managerId: number
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
    **/
    findUnique<T extends LocationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>
    ): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Location that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends LocationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>
    ): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends LocationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends LocationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LocationCreateArgs<ExtArgs>>
    ): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Locations.
     *     @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     *     @example
     *     // Create many Locations
     *     const location = await prisma.location.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LocationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends LocationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>
    ): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends LocationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>
    ): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends LocationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends LocationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends LocationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>
    ): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    contracts<T extends Location$contractsArgs<ExtArgs> = {}>(args?: Subset<T, Location$contractsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'findMany'> | Null>;

    invoices<T extends Location$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, Location$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, 'findMany'> | Null>;

    keys<T extends Location$keysArgs<ExtArgs> = {}>(args?: Subset<T, Location$keysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, 'findMany'> | Null>;

    manager<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    payments<T extends Location$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Location$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findMany'> | Null>;

    PaymentSchedule<T extends Location$PaymentScheduleArgs<ExtArgs> = {}>(args?: Subset<T, Location$PaymentScheduleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentSchedulePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Location model
   */ 
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'Int'>
    readonly name: FieldRef<"Location", 'String'>
    readonly address: FieldRef<"Location", 'String'>
    readonly managerId: FieldRef<"Location", 'Int'>
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
   * Location.contracts
   */
  export type Location$contractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    cursor?: ContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
   * Location.payments
   */
  export type Location$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
   * Location.PaymentSchedule
   */
  export type Location$PaymentScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentSchedule
     */
    select?: PaymentScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude<ExtArgs> | null
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
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    locationId: number | null
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    locationId: number | null
    date: Date | null
    amount: number | null
    paymentMethod: string | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    locationId: number | null
    date: Date | null
    amount: number | null
    paymentMethod: string | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    locationId: number
    date: number
    amount: number
    paymentMethod: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    locationId?: true
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    locationId?: true
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    locationId?: true
    date?: true
    amount?: true
    paymentMethod?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    locationId?: true
    date?: true
    amount?: true
    paymentMethod?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    locationId?: true
    date?: true
    amount?: true
    paymentMethod?: true
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
    paymentMethod: string
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
    paymentMethod?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    locationId?: boolean
    date?: boolean
    amount?: boolean
    paymentMethod?: boolean
  }

  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }


  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      location: Prisma.$LocationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      locationId: number
      date: Date
      amount: number
      paymentMethod: string
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
    **/
    findUnique<T extends PaymentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Payment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends PaymentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends PaymentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends PaymentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Payments.
     *     @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     *     @example
     *     // Create many Payments
     *     const payment = await prisma.payment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PaymentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends PaymentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends PaymentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends PaymentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends PaymentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends PaymentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Payment model
   */ 
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly locationId: FieldRef<"Payment", 'Int'>
    readonly date: FieldRef<"Payment", 'DateTime'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly paymentMethod: FieldRef<"Payment", 'String'>
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
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
  }

  export type InvoiceSumAggregateOutputType = {
    id: number | null
    locationId: number | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: number | null
    locationId: number | null
    date: Date | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: number | null
    locationId: number | null
    date: Date | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    locationId: number
    date: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    id?: true
    locationId?: true
  }

  export type InvoiceSumAggregateInputType = {
    id?: true
    locationId?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    locationId?: true
    date?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    locationId?: true
    date?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    locationId?: true
    date?: true
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
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
    id?: boolean
    locationId?: boolean
    date?: boolean
  }

  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }


  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      location: Prisma.$LocationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      locationId: number
      date: Date
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
    **/
    findUnique<T extends InvoiceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>
    ): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Invoice that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends InvoiceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>
    ): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends InvoiceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends InvoiceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>
    ): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Invoices.
     *     @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     *     @example
     *     // Create many Invoices
     *     const invoice = await prisma.invoice.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InvoiceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends InvoiceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>
    ): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends InvoiceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>
    ): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends InvoiceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends InvoiceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends InvoiceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>
    ): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Invoice model
   */ 
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'Int'>
    readonly locationId: FieldRef<"Invoice", 'Int'>
    readonly date: FieldRef<"Invoice", 'DateTime'>
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  }

  export type PaymentScheduleSumAggregateOutputType = {
    id: number | null
    locationId: number | null
  }

  export type PaymentScheduleMinAggregateOutputType = {
    id: number | null
    locationId: number | null
    dueDate: Date | null
  }

  export type PaymentScheduleMaxAggregateOutputType = {
    id: number | null
    locationId: number | null
    dueDate: Date | null
  }

  export type PaymentScheduleCountAggregateOutputType = {
    id: number
    locationId: number
    dueDate: number
    _all: number
  }


  export type PaymentScheduleAvgAggregateInputType = {
    id?: true
    locationId?: true
  }

  export type PaymentScheduleSumAggregateInputType = {
    id?: true
    locationId?: true
  }

  export type PaymentScheduleMinAggregateInputType = {
    id?: true
    locationId?: true
    dueDate?: true
  }

  export type PaymentScheduleMaxAggregateInputType = {
    id?: true
    locationId?: true
    dueDate?: true
  }

  export type PaymentScheduleCountAggregateInputType = {
    id?: true
    locationId?: true
    dueDate?: true
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
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentSchedule"]>

  export type PaymentScheduleSelectScalar = {
    id?: boolean
    locationId?: boolean
    dueDate?: boolean
  }

  export type PaymentScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }


  export type $PaymentSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentSchedule"
    objects: {
      location: Prisma.$LocationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      locationId: number
      dueDate: Date
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
    **/
    findUnique<T extends PaymentScheduleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentScheduleFindUniqueArgs<ExtArgs>>
    ): Prisma__PaymentScheduleClient<$Result.GetResult<Prisma.$PaymentSchedulePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PaymentSchedule that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PaymentScheduleFindUniqueOrThrowArgs} args - Arguments to find a PaymentSchedule
     * @example
     * // Get one PaymentSchedule
     * const paymentSchedule = await prisma.paymentSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PaymentScheduleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentScheduleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentScheduleClient<$Result.GetResult<Prisma.$PaymentSchedulePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends PaymentScheduleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentScheduleFindFirstArgs<ExtArgs>>
    ): Prisma__PaymentScheduleClient<$Result.GetResult<Prisma.$PaymentSchedulePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends PaymentScheduleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentScheduleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentScheduleClient<$Result.GetResult<Prisma.$PaymentSchedulePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PaymentSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentScheduleFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends PaymentScheduleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentScheduleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentSchedulePayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends PaymentScheduleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentScheduleCreateArgs<ExtArgs>>
    ): Prisma__PaymentScheduleClient<$Result.GetResult<Prisma.$PaymentSchedulePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PaymentSchedules.
     *     @param {PaymentScheduleCreateManyArgs} args - Arguments to create many PaymentSchedules.
     *     @example
     *     // Create many PaymentSchedules
     *     const paymentSchedule = await prisma.paymentSchedule.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PaymentScheduleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentScheduleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends PaymentScheduleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentScheduleDeleteArgs<ExtArgs>>
    ): Prisma__PaymentScheduleClient<$Result.GetResult<Prisma.$PaymentSchedulePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends PaymentScheduleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentScheduleUpdateArgs<ExtArgs>>
    ): Prisma__PaymentScheduleClient<$Result.GetResult<Prisma.$PaymentSchedulePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends PaymentScheduleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentScheduleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends PaymentScheduleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentScheduleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends PaymentScheduleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentScheduleUpsertArgs<ExtArgs>>
    ): Prisma__PaymentScheduleClient<$Result.GetResult<Prisma.$PaymentSchedulePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PaymentSchedule model
   */ 
  interface PaymentScheduleFieldRefs {
    readonly id: FieldRef<"PaymentSchedule", 'Int'>
    readonly locationId: FieldRef<"PaymentSchedule", 'Int'>
    readonly dueDate: FieldRef<"PaymentSchedule", 'DateTime'>
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
   * PaymentSchedule without action
   */
  export type PaymentScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentSchedule
     */
    select?: PaymentScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentScheduleInclude<ExtArgs> | null
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
  }

  export type KeySumAggregateOutputType = {
    id: number | null
    locationId: number | null
  }

  export type KeyMinAggregateOutputType = {
    id: number | null
    locationId: number | null
    issueDate: Date | null
    returnDate: Date | null
  }

  export type KeyMaxAggregateOutputType = {
    id: number | null
    locationId: number | null
    issueDate: Date | null
    returnDate: Date | null
  }

  export type KeyCountAggregateOutputType = {
    id: number
    locationId: number
    issueDate: number
    returnDate: number
    _all: number
  }


  export type KeyAvgAggregateInputType = {
    id?: true
    locationId?: true
  }

  export type KeySumAggregateInputType = {
    id?: true
    locationId?: true
  }

  export type KeyMinAggregateInputType = {
    id?: true
    locationId?: true
    issueDate?: true
    returnDate?: true
  }

  export type KeyMaxAggregateInputType = {
    id?: true
    locationId?: true
    issueDate?: true
    returnDate?: true
  }

  export type KeyCountAggregateInputType = {
    id?: true
    locationId?: true
    issueDate?: true
    returnDate?: true
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
    returnDate: Date
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
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["key"]>

  export type KeySelectScalar = {
    id?: boolean
    locationId?: boolean
    issueDate?: boolean
    returnDate?: boolean
  }

  export type KeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }


  export type $KeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Key"
    objects: {
      location: Prisma.$LocationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      locationId: number
      issueDate: Date
      returnDate: Date
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
    **/
    findUnique<T extends KeyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, KeyFindUniqueArgs<ExtArgs>>
    ): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Key that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {KeyFindUniqueOrThrowArgs} args - Arguments to find a Key
     * @example
     * // Get one Key
     * const key = await prisma.key.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends KeyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, KeyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends KeyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, KeyFindFirstArgs<ExtArgs>>
    ): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends KeyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, KeyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Keys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends KeyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KeyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends KeyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, KeyCreateArgs<ExtArgs>>
    ): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Keys.
     *     @param {KeyCreateManyArgs} args - Arguments to create many Keys.
     *     @example
     *     // Create many Keys
     *     const key = await prisma.key.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends KeyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KeyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends KeyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, KeyDeleteArgs<ExtArgs>>
    ): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends KeyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, KeyUpdateArgs<ExtArgs>>
    ): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends KeyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KeyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends KeyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, KeyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends KeyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, KeyUpsertArgs<ExtArgs>>
    ): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Key model
   */ 
  interface KeyFieldRefs {
    readonly id: FieldRef<"Key", 'Int'>
    readonly locationId: FieldRef<"Key", 'Int'>
    readonly issueDate: FieldRef<"Key", 'DateTime'>
    readonly returnDate: FieldRef<"Key", 'DateTime'>
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
   * Key without action
   */
  export type KeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KeyInclude<ExtArgs> | null
  }



  /**
   * Model Contract
   */

  export type AggregateContract = {
    _count: ContractCountAggregateOutputType | null
    _avg: ContractAvgAggregateOutputType | null
    _sum: ContractSumAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  export type ContractAvgAggregateOutputType = {
    id: number | null
    locationId: number | null
  }

  export type ContractSumAggregateOutputType = {
    id: number | null
    locationId: number | null
  }

  export type ContractMinAggregateOutputType = {
    id: number | null
    locationId: number | null
    startDate: Date | null
    endDate: Date | null
    renewed: boolean | null
    cancelled: boolean | null
  }

  export type ContractMaxAggregateOutputType = {
    id: number | null
    locationId: number | null
    startDate: Date | null
    endDate: Date | null
    renewed: boolean | null
    cancelled: boolean | null
  }

  export type ContractCountAggregateOutputType = {
    id: number
    locationId: number
    startDate: number
    endDate: number
    renewed: number
    cancelled: number
    _all: number
  }


  export type ContractAvgAggregateInputType = {
    id?: true
    locationId?: true
  }

  export type ContractSumAggregateInputType = {
    id?: true
    locationId?: true
  }

  export type ContractMinAggregateInputType = {
    id?: true
    locationId?: true
    startDate?: true
    endDate?: true
    renewed?: true
    cancelled?: true
  }

  export type ContractMaxAggregateInputType = {
    id?: true
    locationId?: true
    startDate?: true
    endDate?: true
    renewed?: true
    cancelled?: true
  }

  export type ContractCountAggregateInputType = {
    id?: true
    locationId?: true
    startDate?: true
    endDate?: true
    renewed?: true
    cancelled?: true
    _all?: true
  }

  export type ContractAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contract to aggregate.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contracts
    **/
    _count?: true | ContractCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContractAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContractSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractMaxAggregateInputType
  }

  export type GetContractAggregateType<T extends ContractAggregateArgs> = {
        [P in keyof T & keyof AggregateContract]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContract[P]>
      : GetScalarType<T[P], AggregateContract[P]>
  }




  export type ContractGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithAggregationInput | ContractOrderByWithAggregationInput[]
    by: ContractScalarFieldEnum[] | ContractScalarFieldEnum
    having?: ContractScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractCountAggregateInputType | true
    _avg?: ContractAvgAggregateInputType
    _sum?: ContractSumAggregateInputType
    _min?: ContractMinAggregateInputType
    _max?: ContractMaxAggregateInputType
  }

  export type ContractGroupByOutputType = {
    id: number
    locationId: number
    startDate: Date
    endDate: Date
    renewed: boolean
    cancelled: boolean
    _count: ContractCountAggregateOutputType | null
    _avg: ContractAvgAggregateOutputType | null
    _sum: ContractSumAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  type GetContractGroupByPayload<T extends ContractGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractGroupByOutputType[P]>
            : GetScalarType<T[P], ContractGroupByOutputType[P]>
        }
      >
    >


  export type ContractSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    startDate?: boolean
    endDate?: boolean
    renewed?: boolean
    cancelled?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectScalar = {
    id?: boolean
    locationId?: boolean
    startDate?: boolean
    endDate?: boolean
    renewed?: boolean
    cancelled?: boolean
  }

  export type ContractInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }


  export type $ContractPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contract"
    objects: {
      location: Prisma.$LocationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      locationId: number
      startDate: Date
      endDate: Date
      renewed: boolean
      cancelled: boolean
    }, ExtArgs["result"]["contract"]>
    composites: {}
  }


  type ContractGetPayload<S extends boolean | null | undefined | ContractDefaultArgs> = $Result.GetResult<Prisma.$ContractPayload, S>

  type ContractCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContractFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContractCountAggregateInputType | true
    }

  export interface ContractDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contract'], meta: { name: 'Contract' } }
    /**
     * Find zero or one Contract that matches the filter.
     * @param {ContractFindUniqueArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContractFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ContractFindUniqueArgs<ExtArgs>>
    ): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Contract that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ContractFindUniqueOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ContractFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContractFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Contract that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContractFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ContractFindFirstArgs<ExtArgs>>
    ): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Contract that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ContractFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContractFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Contracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contracts
     * const contracts = await prisma.contract.findMany()
     * 
     * // Get first 10 Contracts
     * const contracts = await prisma.contract.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractWithIdOnly = await prisma.contract.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ContractFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContractFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Contract.
     * @param {ContractCreateArgs} args - Arguments to create a Contract.
     * @example
     * // Create one Contract
     * const Contract = await prisma.contract.create({
     *   data: {
     *     // ... data to create a Contract
     *   }
     * })
     * 
    **/
    create<T extends ContractCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ContractCreateArgs<ExtArgs>>
    ): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Contracts.
     *     @param {ContractCreateManyArgs} args - Arguments to create many Contracts.
     *     @example
     *     // Create many Contracts
     *     const contract = await prisma.contract.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ContractCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContractCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contract.
     * @param {ContractDeleteArgs} args - Arguments to delete one Contract.
     * @example
     * // Delete one Contract
     * const Contract = await prisma.contract.delete({
     *   where: {
     *     // ... filter to delete one Contract
     *   }
     * })
     * 
    **/
    delete<T extends ContractDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ContractDeleteArgs<ExtArgs>>
    ): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Contract.
     * @param {ContractUpdateArgs} args - Arguments to update one Contract.
     * @example
     * // Update one Contract
     * const contract = await prisma.contract.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContractUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ContractUpdateArgs<ExtArgs>>
    ): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Contracts.
     * @param {ContractDeleteManyArgs} args - Arguments to filter Contracts to delete.
     * @example
     * // Delete a few Contracts
     * const { count } = await prisma.contract.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContractDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContractDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contracts
     * const contract = await prisma.contract.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContractUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ContractUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contract.
     * @param {ContractUpsertArgs} args - Arguments to update or create a Contract.
     * @example
     * // Update or create a Contract
     * const contract = await prisma.contract.upsert({
     *   create: {
     *     // ... data to create a Contract
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contract we want to update
     *   }
     * })
    **/
    upsert<T extends ContractUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ContractUpsertArgs<ExtArgs>>
    ): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractCountArgs} args - Arguments to filter Contracts to count.
     * @example
     * // Count the number of Contracts
     * const count = await prisma.contract.count({
     *   where: {
     *     // ... the filter for the Contracts we want to count
     *   }
     * })
    **/
    count<T extends ContractCountArgs>(
      args?: Subset<T, ContractCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContractAggregateArgs>(args: Subset<T, ContractAggregateArgs>): Prisma.PrismaPromise<GetContractAggregateType<T>>

    /**
     * Group by Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractGroupByArgs} args - Group by arguments.
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
      T extends ContractGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractGroupByArgs['orderBy'] }
        : { orderBy?: ContractGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contract model
   */
  readonly fields: ContractFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contract.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContractClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Contract model
   */ 
  interface ContractFieldRefs {
    readonly id: FieldRef<"Contract", 'Int'>
    readonly locationId: FieldRef<"Contract", 'Int'>
    readonly startDate: FieldRef<"Contract", 'DateTime'>
    readonly endDate: FieldRef<"Contract", 'DateTime'>
    readonly renewed: FieldRef<"Contract", 'Boolean'>
    readonly cancelled: FieldRef<"Contract", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Contract findUnique
   */
  export type ContractFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }


  /**
   * Contract findUniqueOrThrow
   */
  export type ContractFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }


  /**
   * Contract findFirst
   */
  export type ContractFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }


  /**
   * Contract findFirstOrThrow
   */
  export type ContractFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }


  /**
   * Contract findMany
   */
  export type ContractFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contracts to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }


  /**
   * Contract create
   */
  export type ContractCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to create a Contract.
     */
    data: XOR<ContractCreateInput, ContractUncheckedCreateInput>
  }


  /**
   * Contract createMany
   */
  export type ContractCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contracts.
     */
    data: ContractCreateManyInput | ContractCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Contract update
   */
  export type ContractUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to update a Contract.
     */
    data: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
    /**
     * Choose, which Contract to update.
     */
    where: ContractWhereUniqueInput
  }


  /**
   * Contract updateMany
   */
  export type ContractUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contracts.
     */
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     */
    where?: ContractWhereInput
  }


  /**
   * Contract upsert
   */
  export type ContractUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The filter to search for the Contract to update in case it exists.
     */
    where: ContractWhereUniqueInput
    /**
     * In case the Contract found by the `where` argument doesn't exist, create a new Contract with this data.
     */
    create: XOR<ContractCreateInput, ContractUncheckedCreateInput>
    /**
     * In case the Contract was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
  }


  /**
   * Contract delete
   */
  export type ContractDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter which Contract to delete.
     */
    where: ContractWhereUniqueInput
  }


  /**
   * Contract deleteMany
   */
  export type ContractDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contracts to delete
     */
    where?: ContractWhereInput
  }


  /**
   * Contract without action
   */
  export type ContractDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContractInclude<ExtArgs> | null
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
    price: number | null
  }

  export type PriceAdjustmentSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type PriceAdjustmentMinAggregateOutputType = {
    id: number | null
    date: Date | null
    price: number | null
    type: string | null
  }

  export type PriceAdjustmentMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    price: number | null
    type: string | null
  }

  export type PriceAdjustmentCountAggregateOutputType = {
    id: number
    date: number
    price: number
    type: number
    _all: number
  }


  export type PriceAdjustmentAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type PriceAdjustmentSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type PriceAdjustmentMinAggregateInputType = {
    id?: true
    date?: true
    price?: true
    type?: true
  }

  export type PriceAdjustmentMaxAggregateInputType = {
    id?: true
    date?: true
    price?: true
    type?: true
  }

  export type PriceAdjustmentCountAggregateInputType = {
    id?: true
    date?: true
    price?: true
    type?: true
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
    date: Date
    price: number
    type: string
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
    date?: boolean
    price?: boolean
    type?: boolean
  }, ExtArgs["result"]["priceAdjustment"]>

  export type PriceAdjustmentSelectScalar = {
    id?: boolean
    date?: boolean
    price?: boolean
    type?: boolean
  }


  export type $PriceAdjustmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PriceAdjustment"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      price: number
      type: string
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
    **/
    findUnique<T extends PriceAdjustmentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PriceAdjustmentFindUniqueArgs<ExtArgs>>
    ): Prisma__PriceAdjustmentClient<$Result.GetResult<Prisma.$PriceAdjustmentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PriceAdjustment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PriceAdjustmentFindUniqueOrThrowArgs} args - Arguments to find a PriceAdjustment
     * @example
     * // Get one PriceAdjustment
     * const priceAdjustment = await prisma.priceAdjustment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PriceAdjustmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PriceAdjustmentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PriceAdjustmentClient<$Result.GetResult<Prisma.$PriceAdjustmentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends PriceAdjustmentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PriceAdjustmentFindFirstArgs<ExtArgs>>
    ): Prisma__PriceAdjustmentClient<$Result.GetResult<Prisma.$PriceAdjustmentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends PriceAdjustmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PriceAdjustmentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PriceAdjustmentClient<$Result.GetResult<Prisma.$PriceAdjustmentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PriceAdjustments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAdjustmentFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends PriceAdjustmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PriceAdjustmentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceAdjustmentPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends PriceAdjustmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PriceAdjustmentCreateArgs<ExtArgs>>
    ): Prisma__PriceAdjustmentClient<$Result.GetResult<Prisma.$PriceAdjustmentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PriceAdjustments.
     *     @param {PriceAdjustmentCreateManyArgs} args - Arguments to create many PriceAdjustments.
     *     @example
     *     // Create many PriceAdjustments
     *     const priceAdjustment = await prisma.priceAdjustment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PriceAdjustmentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PriceAdjustmentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends PriceAdjustmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PriceAdjustmentDeleteArgs<ExtArgs>>
    ): Prisma__PriceAdjustmentClient<$Result.GetResult<Prisma.$PriceAdjustmentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends PriceAdjustmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PriceAdjustmentUpdateArgs<ExtArgs>>
    ): Prisma__PriceAdjustmentClient<$Result.GetResult<Prisma.$PriceAdjustmentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends PriceAdjustmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PriceAdjustmentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends PriceAdjustmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PriceAdjustmentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends PriceAdjustmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PriceAdjustmentUpsertArgs<ExtArgs>>
    ): Prisma__PriceAdjustmentClient<$Result.GetResult<Prisma.$PriceAdjustmentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PriceAdjustment model
   */ 
  interface PriceAdjustmentFieldRefs {
    readonly id: FieldRef<"PriceAdjustment", 'Int'>
    readonly date: FieldRef<"PriceAdjustment", 'DateTime'>
    readonly price: FieldRef<"PriceAdjustment", 'Float'>
    readonly type: FieldRef<"PriceAdjustment", 'String'>
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
   * PriceAdjustment without action
   */
  export type PriceAdjustmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAdjustment
     */
    select?: PriceAdjustmentSelect<ExtArgs> | null
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
    accessToken: 'accessToken',
    firstName: 'firstName',
    lastName: 'lastName',
    picture: 'picture'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    managerId: 'managerId'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    locationId: 'locationId',
    date: 'date',
    amount: 'amount',
    paymentMethod: 'paymentMethod'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    locationId: 'locationId',
    date: 'date'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const PaymentScheduleScalarFieldEnum: {
    id: 'id',
    locationId: 'locationId',
    dueDate: 'dueDate'
  };

  export type PaymentScheduleScalarFieldEnum = (typeof PaymentScheduleScalarFieldEnum)[keyof typeof PaymentScheduleScalarFieldEnum]


  export const KeyScalarFieldEnum: {
    id: 'id',
    locationId: 'locationId',
    issueDate: 'issueDate',
    returnDate: 'returnDate'
  };

  export type KeyScalarFieldEnum = (typeof KeyScalarFieldEnum)[keyof typeof KeyScalarFieldEnum]


  export const ContractScalarFieldEnum: {
    id: 'id',
    locationId: 'locationId',
    startDate: 'startDate',
    endDate: 'endDate',
    renewed: 'renewed',
    cancelled: 'cancelled'
  };

  export type ContractScalarFieldEnum = (typeof ContractScalarFieldEnum)[keyof typeof ContractScalarFieldEnum]


  export const PriceAdjustmentScalarFieldEnum: {
    id: 'id',
    date: 'date',
    price: 'price',
    type: 'type'
  };

  export type PriceAdjustmentScalarFieldEnum = (typeof PriceAdjustmentScalarFieldEnum)[keyof typeof PriceAdjustmentScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    accessToken?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    picture?: StringNullableFilter<"User"> | string | null
    locations?: LocationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    accessToken?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    locations?: LocationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    accessToken?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    picture?: StringNullableFilter<"User"> | string | null
    locations?: LocationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    accessToken?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
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
    accessToken?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    picture?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: IntFilter<"Location"> | number
    name?: StringFilter<"Location"> | string
    address?: StringFilter<"Location"> | string
    managerId?: IntFilter<"Location"> | number
    contracts?: ContractListRelationFilter
    invoices?: InvoiceListRelationFilter
    keys?: KeyListRelationFilter
    manager?: XOR<UserRelationFilter, UserWhereInput>
    payments?: PaymentListRelationFilter
    PaymentSchedule?: PaymentScheduleListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    managerId?: SortOrder
    contracts?: ContractOrderByRelationAggregateInput
    invoices?: InvoiceOrderByRelationAggregateInput
    keys?: KeyOrderByRelationAggregateInput
    manager?: UserOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
    PaymentSchedule?: PaymentScheduleOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    name?: StringFilter<"Location"> | string
    address?: StringFilter<"Location"> | string
    managerId?: IntFilter<"Location"> | number
    contracts?: ContractListRelationFilter
    invoices?: InvoiceListRelationFilter
    keys?: KeyListRelationFilter
    manager?: XOR<UserRelationFilter, UserWhereInput>
    payments?: PaymentListRelationFilter
    PaymentSchedule?: PaymentScheduleListRelationFilter
  }, "id">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    managerId?: SortOrder
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
    managerId?: IntWithAggregatesFilter<"Location"> | number
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    locationId?: IntFilter<"Payment"> | number
    date?: DateTimeFilter<"Payment"> | Date | string
    amount?: FloatFilter<"Payment"> | number
    paymentMethod?: StringFilter<"Payment"> | string
    location?: XOR<LocationRelationFilter, LocationWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    locationId?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    location?: LocationOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    locationId?: IntFilter<"Payment"> | number
    date?: DateTimeFilter<"Payment"> | Date | string
    amount?: FloatFilter<"Payment"> | number
    paymentMethod?: StringFilter<"Payment"> | string
    location?: XOR<LocationRelationFilter, LocationWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    locationId?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
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
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    paymentMethod?: StringWithAggregatesFilter<"Payment"> | string
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: IntFilter<"Invoice"> | number
    locationId?: IntFilter<"Invoice"> | number
    date?: DateTimeFilter<"Invoice"> | Date | string
    location?: XOR<LocationRelationFilter, LocationWhereInput>
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    locationId?: SortOrder
    date?: SortOrder
    location?: LocationOrderByWithRelationInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    locationId?: IntFilter<"Invoice"> | number
    date?: DateTimeFilter<"Invoice"> | Date | string
    location?: XOR<LocationRelationFilter, LocationWhereInput>
  }, "id">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    locationId?: SortOrder
    date?: SortOrder
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
  }

  export type PaymentScheduleWhereInput = {
    AND?: PaymentScheduleWhereInput | PaymentScheduleWhereInput[]
    OR?: PaymentScheduleWhereInput[]
    NOT?: PaymentScheduleWhereInput | PaymentScheduleWhereInput[]
    id?: IntFilter<"PaymentSchedule"> | number
    locationId?: IntFilter<"PaymentSchedule"> | number
    dueDate?: DateTimeFilter<"PaymentSchedule"> | Date | string
    location?: XOR<LocationRelationFilter, LocationWhereInput>
  }

  export type PaymentScheduleOrderByWithRelationInput = {
    id?: SortOrder
    locationId?: SortOrder
    dueDate?: SortOrder
    location?: LocationOrderByWithRelationInput
  }

  export type PaymentScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentScheduleWhereInput | PaymentScheduleWhereInput[]
    OR?: PaymentScheduleWhereInput[]
    NOT?: PaymentScheduleWhereInput | PaymentScheduleWhereInput[]
    locationId?: IntFilter<"PaymentSchedule"> | number
    dueDate?: DateTimeFilter<"PaymentSchedule"> | Date | string
    location?: XOR<LocationRelationFilter, LocationWhereInput>
  }, "id">

  export type PaymentScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    locationId?: SortOrder
    dueDate?: SortOrder
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
  }

  export type KeyWhereInput = {
    AND?: KeyWhereInput | KeyWhereInput[]
    OR?: KeyWhereInput[]
    NOT?: KeyWhereInput | KeyWhereInput[]
    id?: IntFilter<"Key"> | number
    locationId?: IntFilter<"Key"> | number
    issueDate?: DateTimeFilter<"Key"> | Date | string
    returnDate?: DateTimeFilter<"Key"> | Date | string
    location?: XOR<LocationRelationFilter, LocationWhereInput>
  }

  export type KeyOrderByWithRelationInput = {
    id?: SortOrder
    locationId?: SortOrder
    issueDate?: SortOrder
    returnDate?: SortOrder
    location?: LocationOrderByWithRelationInput
  }

  export type KeyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: KeyWhereInput | KeyWhereInput[]
    OR?: KeyWhereInput[]
    NOT?: KeyWhereInput | KeyWhereInput[]
    locationId?: IntFilter<"Key"> | number
    issueDate?: DateTimeFilter<"Key"> | Date | string
    returnDate?: DateTimeFilter<"Key"> | Date | string
    location?: XOR<LocationRelationFilter, LocationWhereInput>
  }, "id">

  export type KeyOrderByWithAggregationInput = {
    id?: SortOrder
    locationId?: SortOrder
    issueDate?: SortOrder
    returnDate?: SortOrder
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
    returnDate?: DateTimeWithAggregatesFilter<"Key"> | Date | string
  }

  export type ContractWhereInput = {
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    id?: IntFilter<"Contract"> | number
    locationId?: IntFilter<"Contract"> | number
    startDate?: DateTimeFilter<"Contract"> | Date | string
    endDate?: DateTimeFilter<"Contract"> | Date | string
    renewed?: BoolFilter<"Contract"> | boolean
    cancelled?: BoolFilter<"Contract"> | boolean
    location?: XOR<LocationRelationFilter, LocationWhereInput>
  }

  export type ContractOrderByWithRelationInput = {
    id?: SortOrder
    locationId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    renewed?: SortOrder
    cancelled?: SortOrder
    location?: LocationOrderByWithRelationInput
  }

  export type ContractWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    locationId?: IntFilter<"Contract"> | number
    startDate?: DateTimeFilter<"Contract"> | Date | string
    endDate?: DateTimeFilter<"Contract"> | Date | string
    renewed?: BoolFilter<"Contract"> | boolean
    cancelled?: BoolFilter<"Contract"> | boolean
    location?: XOR<LocationRelationFilter, LocationWhereInput>
  }, "id">

  export type ContractOrderByWithAggregationInput = {
    id?: SortOrder
    locationId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    renewed?: SortOrder
    cancelled?: SortOrder
    _count?: ContractCountOrderByAggregateInput
    _avg?: ContractAvgOrderByAggregateInput
    _max?: ContractMaxOrderByAggregateInput
    _min?: ContractMinOrderByAggregateInput
    _sum?: ContractSumOrderByAggregateInput
  }

  export type ContractScalarWhereWithAggregatesInput = {
    AND?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    OR?: ContractScalarWhereWithAggregatesInput[]
    NOT?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contract"> | number
    locationId?: IntWithAggregatesFilter<"Contract"> | number
    startDate?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    renewed?: BoolWithAggregatesFilter<"Contract"> | boolean
    cancelled?: BoolWithAggregatesFilter<"Contract"> | boolean
  }

  export type PriceAdjustmentWhereInput = {
    AND?: PriceAdjustmentWhereInput | PriceAdjustmentWhereInput[]
    OR?: PriceAdjustmentWhereInput[]
    NOT?: PriceAdjustmentWhereInput | PriceAdjustmentWhereInput[]
    id?: IntFilter<"PriceAdjustment"> | number
    date?: DateTimeFilter<"PriceAdjustment"> | Date | string
    price?: FloatFilter<"PriceAdjustment"> | number
    type?: StringFilter<"PriceAdjustment"> | string
  }

  export type PriceAdjustmentOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    price?: SortOrder
    type?: SortOrder
  }

  export type PriceAdjustmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PriceAdjustmentWhereInput | PriceAdjustmentWhereInput[]
    OR?: PriceAdjustmentWhereInput[]
    NOT?: PriceAdjustmentWhereInput | PriceAdjustmentWhereInput[]
    date?: DateTimeFilter<"PriceAdjustment"> | Date | string
    price?: FloatFilter<"PriceAdjustment"> | number
    type?: StringFilter<"PriceAdjustment"> | string
  }, "id">

  export type PriceAdjustmentOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    price?: SortOrder
    type?: SortOrder
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
    date?: DateTimeWithAggregatesFilter<"PriceAdjustment"> | Date | string
    price?: FloatWithAggregatesFilter<"PriceAdjustment"> | number
    type?: StringWithAggregatesFilter<"PriceAdjustment"> | string
  }

  export type UserCreateInput = {
    email: string
    accessToken: string
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    locations?: LocationCreateNestedManyWithoutManagerInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    accessToken: string
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    locations?: LocationUncheckedCreateNestedManyWithoutManagerInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    locations?: LocationUpdateManyWithoutManagerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    locations?: LocationUncheckedUpdateManyWithoutManagerNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    accessToken: string
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LocationCreateInput = {
    name: string
    address: string
    contracts?: ContractCreateNestedManyWithoutLocationInput
    invoices?: InvoiceCreateNestedManyWithoutLocationInput
    keys?: KeyCreateNestedManyWithoutLocationInput
    manager: UserCreateNestedOneWithoutLocationsInput
    payments?: PaymentCreateNestedManyWithoutLocationInput
    PaymentSchedule?: PaymentScheduleCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateInput = {
    id?: number
    name: string
    address: string
    managerId: number
    contracts?: ContractUncheckedCreateNestedManyWithoutLocationInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutLocationInput
    keys?: KeyUncheckedCreateNestedManyWithoutLocationInput
    payments?: PaymentUncheckedCreateNestedManyWithoutLocationInput
    PaymentSchedule?: PaymentScheduleUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contracts?: ContractUpdateManyWithoutLocationNestedInput
    invoices?: InvoiceUpdateManyWithoutLocationNestedInput
    keys?: KeyUpdateManyWithoutLocationNestedInput
    manager?: UserUpdateOneRequiredWithoutLocationsNestedInput
    payments?: PaymentUpdateManyWithoutLocationNestedInput
    PaymentSchedule?: PaymentScheduleUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    managerId?: IntFieldUpdateOperationsInput | number
    contracts?: ContractUncheckedUpdateManyWithoutLocationNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutLocationNestedInput
    keys?: KeyUncheckedUpdateManyWithoutLocationNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutLocationNestedInput
    PaymentSchedule?: PaymentScheduleUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationCreateManyInput = {
    id?: number
    name: string
    address: string
    managerId: number
  }

  export type LocationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    managerId?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentCreateInput = {
    date: Date | string
    amount: number
    paymentMethod: string
    location: LocationCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    locationId: number
    date: Date | string
    amount: number
    paymentMethod: string
  }

  export type PaymentUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    location?: LocationUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentCreateManyInput = {
    id?: number
    locationId: number
    date: Date | string
    amount: number
    paymentMethod: string
  }

  export type PaymentUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
  }

  export type InvoiceCreateInput = {
    date: Date | string
    location: LocationCreateNestedOneWithoutInvoicesInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: number
    locationId: number
    date: Date | string
  }

  export type InvoiceUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateManyInput = {
    id?: number
    locationId: number
    date: Date | string
  }

  export type InvoiceUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentScheduleCreateInput = {
    dueDate: Date | string
    location: LocationCreateNestedOneWithoutPaymentScheduleInput
  }

  export type PaymentScheduleUncheckedCreateInput = {
    id?: number
    locationId: number
    dueDate: Date | string
  }

  export type PaymentScheduleUpdateInput = {
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutPaymentScheduleNestedInput
  }

  export type PaymentScheduleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentScheduleCreateManyInput = {
    id?: number
    locationId: number
    dueDate: Date | string
  }

  export type PaymentScheduleUpdateManyMutationInput = {
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentScheduleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeyCreateInput = {
    issueDate: Date | string
    returnDate: Date | string
    location: LocationCreateNestedOneWithoutKeysInput
  }

  export type KeyUncheckedCreateInput = {
    id?: number
    locationId: number
    issueDate: Date | string
    returnDate: Date | string
  }

  export type KeyUpdateInput = {
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutKeysNestedInput
  }

  export type KeyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeyCreateManyInput = {
    id?: number
    locationId: number
    issueDate: Date | string
    returnDate: Date | string
  }

  export type KeyUpdateManyMutationInput = {
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractCreateInput = {
    startDate: Date | string
    endDate: Date | string
    renewed: boolean
    cancelled: boolean
    location: LocationCreateNestedOneWithoutContractsInput
  }

  export type ContractUncheckedCreateInput = {
    id?: number
    locationId: number
    startDate: Date | string
    endDate: Date | string
    renewed: boolean
    cancelled: boolean
  }

  export type ContractUpdateInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    renewed?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
    location?: LocationUpdateOneRequiredWithoutContractsNestedInput
  }

  export type ContractUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    renewed?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ContractCreateManyInput = {
    id?: number
    locationId: number
    startDate: Date | string
    endDate: Date | string
    renewed: boolean
    cancelled: boolean
  }

  export type ContractUpdateManyMutationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    renewed?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ContractUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    renewed?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PriceAdjustmentCreateInput = {
    date: Date | string
    price: number
    type: string
  }

  export type PriceAdjustmentUncheckedCreateInput = {
    id?: number
    date: Date | string
    price: number
    type: string
  }

  export type PriceAdjustmentUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type PriceAdjustmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type PriceAdjustmentCreateManyInput = {
    id?: number
    date: Date | string
    price: number
    type: string
  }

  export type PriceAdjustmentUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type PriceAdjustmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
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

  export type LocationListRelationFilter = {
    every?: LocationWhereInput
    some?: LocationWhereInput
    none?: LocationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    accessToken?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    picture?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    accessToken?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    picture?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    accessToken?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    picture?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type ContractListRelationFilter = {
    every?: ContractWhereInput
    some?: ContractWhereInput
    none?: ContractWhereInput
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type PaymentScheduleListRelationFilter = {
    every?: PaymentScheduleWhereInput
    some?: PaymentScheduleWhereInput
    none?: PaymentScheduleWhereInput
  }

  export type ContractOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    managerId?: SortOrder
  }

  export type LocationAvgOrderByAggregateInput = {
    id?: SortOrder
    managerId?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    managerId?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    managerId?: SortOrder
  }

  export type LocationSumOrderByAggregateInput = {
    id?: SortOrder
    managerId?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type LocationRelationFilter = {
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    amount?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    date?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    date?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    date?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
  }

  export type PaymentScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    dueDate?: SortOrder
  }

  export type PaymentScheduleAvgOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
  }

  export type PaymentScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    dueDate?: SortOrder
  }

  export type PaymentScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    dueDate?: SortOrder
  }

  export type PaymentScheduleSumOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
  }

  export type KeyCountOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    issueDate?: SortOrder
    returnDate?: SortOrder
  }

  export type KeyAvgOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
  }

  export type KeyMaxOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    issueDate?: SortOrder
    returnDate?: SortOrder
  }

  export type KeyMinOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    issueDate?: SortOrder
    returnDate?: SortOrder
  }

  export type KeySumOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ContractCountOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    renewed?: SortOrder
    cancelled?: SortOrder
  }

  export type ContractAvgOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
  }

  export type ContractMaxOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    renewed?: SortOrder
    cancelled?: SortOrder
  }

  export type ContractMinOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    renewed?: SortOrder
    cancelled?: SortOrder
  }

  export type ContractSumOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PriceAdjustmentCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    price?: SortOrder
    type?: SortOrder
  }

  export type PriceAdjustmentAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type PriceAdjustmentMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    price?: SortOrder
    type?: SortOrder
  }

  export type PriceAdjustmentMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    price?: SortOrder
    type?: SortOrder
  }

  export type PriceAdjustmentSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type LocationCreateNestedManyWithoutManagerInput = {
    create?: XOR<LocationCreateWithoutManagerInput, LocationUncheckedCreateWithoutManagerInput> | LocationCreateWithoutManagerInput[] | LocationUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutManagerInput | LocationCreateOrConnectWithoutManagerInput[]
    createMany?: LocationCreateManyManagerInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type LocationUncheckedCreateNestedManyWithoutManagerInput = {
    create?: XOR<LocationCreateWithoutManagerInput, LocationUncheckedCreateWithoutManagerInput> | LocationCreateWithoutManagerInput[] | LocationUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutManagerInput | LocationCreateOrConnectWithoutManagerInput[]
    createMany?: LocationCreateManyManagerInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type LocationUpdateManyWithoutManagerNestedInput = {
    create?: XOR<LocationCreateWithoutManagerInput, LocationUncheckedCreateWithoutManagerInput> | LocationCreateWithoutManagerInput[] | LocationUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutManagerInput | LocationCreateOrConnectWithoutManagerInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutManagerInput | LocationUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: LocationCreateManyManagerInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutManagerInput | LocationUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutManagerInput | LocationUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LocationUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: XOR<LocationCreateWithoutManagerInput, LocationUncheckedCreateWithoutManagerInput> | LocationCreateWithoutManagerInput[] | LocationUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutManagerInput | LocationCreateOrConnectWithoutManagerInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutManagerInput | LocationUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: LocationCreateManyManagerInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutManagerInput | LocationUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutManagerInput | LocationUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type ContractCreateNestedManyWithoutLocationInput = {
    create?: XOR<ContractCreateWithoutLocationInput, ContractUncheckedCreateWithoutLocationInput> | ContractCreateWithoutLocationInput[] | ContractUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutLocationInput | ContractCreateOrConnectWithoutLocationInput[]
    createMany?: ContractCreateManyLocationInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
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

  export type UserCreateNestedOneWithoutLocationsInput = {
    create?: XOR<UserCreateWithoutLocationsInput, UserUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLocationsInput
    connect?: UserWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutLocationInput = {
    create?: XOR<PaymentCreateWithoutLocationInput, PaymentUncheckedCreateWithoutLocationInput> | PaymentCreateWithoutLocationInput[] | PaymentUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutLocationInput | PaymentCreateOrConnectWithoutLocationInput[]
    createMany?: PaymentCreateManyLocationInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentScheduleCreateNestedManyWithoutLocationInput = {
    create?: XOR<PaymentScheduleCreateWithoutLocationInput, PaymentScheduleUncheckedCreateWithoutLocationInput> | PaymentScheduleCreateWithoutLocationInput[] | PaymentScheduleUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: PaymentScheduleCreateOrConnectWithoutLocationInput | PaymentScheduleCreateOrConnectWithoutLocationInput[]
    createMany?: PaymentScheduleCreateManyLocationInputEnvelope
    connect?: PaymentScheduleWhereUniqueInput | PaymentScheduleWhereUniqueInput[]
  }

  export type ContractUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<ContractCreateWithoutLocationInput, ContractUncheckedCreateWithoutLocationInput> | ContractCreateWithoutLocationInput[] | ContractUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutLocationInput | ContractCreateOrConnectWithoutLocationInput[]
    createMany?: ContractCreateManyLocationInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
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

  export type PaymentUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<PaymentCreateWithoutLocationInput, PaymentUncheckedCreateWithoutLocationInput> | PaymentCreateWithoutLocationInput[] | PaymentUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutLocationInput | PaymentCreateOrConnectWithoutLocationInput[]
    createMany?: PaymentCreateManyLocationInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentScheduleUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<PaymentScheduleCreateWithoutLocationInput, PaymentScheduleUncheckedCreateWithoutLocationInput> | PaymentScheduleCreateWithoutLocationInput[] | PaymentScheduleUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: PaymentScheduleCreateOrConnectWithoutLocationInput | PaymentScheduleCreateOrConnectWithoutLocationInput[]
    createMany?: PaymentScheduleCreateManyLocationInputEnvelope
    connect?: PaymentScheduleWhereUniqueInput | PaymentScheduleWhereUniqueInput[]
  }

  export type ContractUpdateManyWithoutLocationNestedInput = {
    create?: XOR<ContractCreateWithoutLocationInput, ContractUncheckedCreateWithoutLocationInput> | ContractCreateWithoutLocationInput[] | ContractUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutLocationInput | ContractCreateOrConnectWithoutLocationInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutLocationInput | ContractUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: ContractCreateManyLocationInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutLocationInput | ContractUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutLocationInput | ContractUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
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

  export type UserUpdateOneRequiredWithoutLocationsNestedInput = {
    create?: XOR<UserCreateWithoutLocationsInput, UserUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLocationsInput
    upsert?: UserUpsertWithoutLocationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLocationsInput, UserUpdateWithoutLocationsInput>, UserUncheckedUpdateWithoutLocationsInput>
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

  export type ContractUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<ContractCreateWithoutLocationInput, ContractUncheckedCreateWithoutLocationInput> | ContractCreateWithoutLocationInput[] | ContractUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutLocationInput | ContractCreateOrConnectWithoutLocationInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutLocationInput | ContractUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: ContractCreateManyLocationInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutLocationInput | ContractUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutLocationInput | ContractUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
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

  export type LocationCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<LocationCreateWithoutPaymentsInput, LocationUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutPaymentsInput
    connect?: LocationWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LocationUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<LocationCreateWithoutPaymentsInput, LocationUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutPaymentsInput
    upsert?: LocationUpsertWithoutPaymentsInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutPaymentsInput, LocationUpdateWithoutPaymentsInput>, LocationUncheckedUpdateWithoutPaymentsInput>
  }

  export type LocationCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<LocationCreateWithoutInvoicesInput, LocationUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: LocationCreateOrConnectWithoutInvoicesInput
    connect?: LocationWhereUniqueInput
  }

  export type LocationUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<LocationCreateWithoutInvoicesInput, LocationUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: LocationCreateOrConnectWithoutInvoicesInput
    upsert?: LocationUpsertWithoutInvoicesInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutInvoicesInput, LocationUpdateWithoutInvoicesInput>, LocationUncheckedUpdateWithoutInvoicesInput>
  }

  export type LocationCreateNestedOneWithoutPaymentScheduleInput = {
    create?: XOR<LocationCreateWithoutPaymentScheduleInput, LocationUncheckedCreateWithoutPaymentScheduleInput>
    connectOrCreate?: LocationCreateOrConnectWithoutPaymentScheduleInput
    connect?: LocationWhereUniqueInput
  }

  export type LocationUpdateOneRequiredWithoutPaymentScheduleNestedInput = {
    create?: XOR<LocationCreateWithoutPaymentScheduleInput, LocationUncheckedCreateWithoutPaymentScheduleInput>
    connectOrCreate?: LocationCreateOrConnectWithoutPaymentScheduleInput
    upsert?: LocationUpsertWithoutPaymentScheduleInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutPaymentScheduleInput, LocationUpdateWithoutPaymentScheduleInput>, LocationUncheckedUpdateWithoutPaymentScheduleInput>
  }

  export type LocationCreateNestedOneWithoutKeysInput = {
    create?: XOR<LocationCreateWithoutKeysInput, LocationUncheckedCreateWithoutKeysInput>
    connectOrCreate?: LocationCreateOrConnectWithoutKeysInput
    connect?: LocationWhereUniqueInput
  }

  export type LocationUpdateOneRequiredWithoutKeysNestedInput = {
    create?: XOR<LocationCreateWithoutKeysInput, LocationUncheckedCreateWithoutKeysInput>
    connectOrCreate?: LocationCreateOrConnectWithoutKeysInput
    upsert?: LocationUpsertWithoutKeysInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutKeysInput, LocationUpdateWithoutKeysInput>, LocationUncheckedUpdateWithoutKeysInput>
  }

  export type LocationCreateNestedOneWithoutContractsInput = {
    create?: XOR<LocationCreateWithoutContractsInput, LocationUncheckedCreateWithoutContractsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutContractsInput
    connect?: LocationWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type LocationUpdateOneRequiredWithoutContractsNestedInput = {
    create?: XOR<LocationCreateWithoutContractsInput, LocationUncheckedCreateWithoutContractsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutContractsInput
    upsert?: LocationUpsertWithoutContractsInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutContractsInput, LocationUpdateWithoutContractsInput>, LocationUncheckedUpdateWithoutContractsInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LocationCreateWithoutManagerInput = {
    name: string
    address: string
    contracts?: ContractCreateNestedManyWithoutLocationInput
    invoices?: InvoiceCreateNestedManyWithoutLocationInput
    keys?: KeyCreateNestedManyWithoutLocationInput
    payments?: PaymentCreateNestedManyWithoutLocationInput
    PaymentSchedule?: PaymentScheduleCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutManagerInput = {
    id?: number
    name: string
    address: string
    contracts?: ContractUncheckedCreateNestedManyWithoutLocationInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutLocationInput
    keys?: KeyUncheckedCreateNestedManyWithoutLocationInput
    payments?: PaymentUncheckedCreateNestedManyWithoutLocationInput
    PaymentSchedule?: PaymentScheduleUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutManagerInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutManagerInput, LocationUncheckedCreateWithoutManagerInput>
  }

  export type LocationCreateManyManagerInputEnvelope = {
    data: LocationCreateManyManagerInput | LocationCreateManyManagerInput[]
    skipDuplicates?: boolean
  }

  export type LocationUpsertWithWhereUniqueWithoutManagerInput = {
    where: LocationWhereUniqueInput
    update: XOR<LocationUpdateWithoutManagerInput, LocationUncheckedUpdateWithoutManagerInput>
    create: XOR<LocationCreateWithoutManagerInput, LocationUncheckedCreateWithoutManagerInput>
  }

  export type LocationUpdateWithWhereUniqueWithoutManagerInput = {
    where: LocationWhereUniqueInput
    data: XOR<LocationUpdateWithoutManagerInput, LocationUncheckedUpdateWithoutManagerInput>
  }

  export type LocationUpdateManyWithWhereWithoutManagerInput = {
    where: LocationScalarWhereInput
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyWithoutManagerInput>
  }

  export type LocationScalarWhereInput = {
    AND?: LocationScalarWhereInput | LocationScalarWhereInput[]
    OR?: LocationScalarWhereInput[]
    NOT?: LocationScalarWhereInput | LocationScalarWhereInput[]
    id?: IntFilter<"Location"> | number
    name?: StringFilter<"Location"> | string
    address?: StringFilter<"Location"> | string
    managerId?: IntFilter<"Location"> | number
  }

  export type ContractCreateWithoutLocationInput = {
    startDate: Date | string
    endDate: Date | string
    renewed: boolean
    cancelled: boolean
  }

  export type ContractUncheckedCreateWithoutLocationInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    renewed: boolean
    cancelled: boolean
  }

  export type ContractCreateOrConnectWithoutLocationInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutLocationInput, ContractUncheckedCreateWithoutLocationInput>
  }

  export type ContractCreateManyLocationInputEnvelope = {
    data: ContractCreateManyLocationInput | ContractCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type InvoiceCreateWithoutLocationInput = {
    date: Date | string
  }

  export type InvoiceUncheckedCreateWithoutLocationInput = {
    id?: number
    date: Date | string
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
    returnDate: Date | string
  }

  export type KeyUncheckedCreateWithoutLocationInput = {
    id?: number
    issueDate: Date | string
    returnDate: Date | string
  }

  export type KeyCreateOrConnectWithoutLocationInput = {
    where: KeyWhereUniqueInput
    create: XOR<KeyCreateWithoutLocationInput, KeyUncheckedCreateWithoutLocationInput>
  }

  export type KeyCreateManyLocationInputEnvelope = {
    data: KeyCreateManyLocationInput | KeyCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutLocationsInput = {
    email: string
    accessToken: string
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
  }

  export type UserUncheckedCreateWithoutLocationsInput = {
    id?: number
    email: string
    accessToken: string
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
  }

  export type UserCreateOrConnectWithoutLocationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLocationsInput, UserUncheckedCreateWithoutLocationsInput>
  }

  export type PaymentCreateWithoutLocationInput = {
    date: Date | string
    amount: number
    paymentMethod: string
  }

  export type PaymentUncheckedCreateWithoutLocationInput = {
    id?: number
    date: Date | string
    amount: number
    paymentMethod: string
  }

  export type PaymentCreateOrConnectWithoutLocationInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutLocationInput, PaymentUncheckedCreateWithoutLocationInput>
  }

  export type PaymentCreateManyLocationInputEnvelope = {
    data: PaymentCreateManyLocationInput | PaymentCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type PaymentScheduleCreateWithoutLocationInput = {
    dueDate: Date | string
  }

  export type PaymentScheduleUncheckedCreateWithoutLocationInput = {
    id?: number
    dueDate: Date | string
  }

  export type PaymentScheduleCreateOrConnectWithoutLocationInput = {
    where: PaymentScheduleWhereUniqueInput
    create: XOR<PaymentScheduleCreateWithoutLocationInput, PaymentScheduleUncheckedCreateWithoutLocationInput>
  }

  export type PaymentScheduleCreateManyLocationInputEnvelope = {
    data: PaymentScheduleCreateManyLocationInput | PaymentScheduleCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type ContractUpsertWithWhereUniqueWithoutLocationInput = {
    where: ContractWhereUniqueInput
    update: XOR<ContractUpdateWithoutLocationInput, ContractUncheckedUpdateWithoutLocationInput>
    create: XOR<ContractCreateWithoutLocationInput, ContractUncheckedCreateWithoutLocationInput>
  }

  export type ContractUpdateWithWhereUniqueWithoutLocationInput = {
    where: ContractWhereUniqueInput
    data: XOR<ContractUpdateWithoutLocationInput, ContractUncheckedUpdateWithoutLocationInput>
  }

  export type ContractUpdateManyWithWhereWithoutLocationInput = {
    where: ContractScalarWhereInput
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyWithoutLocationInput>
  }

  export type ContractScalarWhereInput = {
    AND?: ContractScalarWhereInput | ContractScalarWhereInput[]
    OR?: ContractScalarWhereInput[]
    NOT?: ContractScalarWhereInput | ContractScalarWhereInput[]
    id?: IntFilter<"Contract"> | number
    locationId?: IntFilter<"Contract"> | number
    startDate?: DateTimeFilter<"Contract"> | Date | string
    endDate?: DateTimeFilter<"Contract"> | Date | string
    renewed?: BoolFilter<"Contract"> | boolean
    cancelled?: BoolFilter<"Contract"> | boolean
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

  export type InvoiceScalarWhereInput = {
    AND?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    OR?: InvoiceScalarWhereInput[]
    NOT?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    id?: IntFilter<"Invoice"> | number
    locationId?: IntFilter<"Invoice"> | number
    date?: DateTimeFilter<"Invoice"> | Date | string
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

  export type KeyScalarWhereInput = {
    AND?: KeyScalarWhereInput | KeyScalarWhereInput[]
    OR?: KeyScalarWhereInput[]
    NOT?: KeyScalarWhereInput | KeyScalarWhereInput[]
    id?: IntFilter<"Key"> | number
    locationId?: IntFilter<"Key"> | number
    issueDate?: DateTimeFilter<"Key"> | Date | string
    returnDate?: DateTimeFilter<"Key"> | Date | string
  }

  export type UserUpsertWithoutLocationsInput = {
    update: XOR<UserUpdateWithoutLocationsInput, UserUncheckedUpdateWithoutLocationsInput>
    create: XOR<UserCreateWithoutLocationsInput, UserUncheckedCreateWithoutLocationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLocationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLocationsInput, UserUncheckedUpdateWithoutLocationsInput>
  }

  export type UserUpdateWithoutLocationsInput = {
    email?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateWithoutLocationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: IntFilter<"Payment"> | number
    locationId?: IntFilter<"Payment"> | number
    date?: DateTimeFilter<"Payment"> | Date | string
    amount?: FloatFilter<"Payment"> | number
    paymentMethod?: StringFilter<"Payment"> | string
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

  export type PaymentScheduleScalarWhereInput = {
    AND?: PaymentScheduleScalarWhereInput | PaymentScheduleScalarWhereInput[]
    OR?: PaymentScheduleScalarWhereInput[]
    NOT?: PaymentScheduleScalarWhereInput | PaymentScheduleScalarWhereInput[]
    id?: IntFilter<"PaymentSchedule"> | number
    locationId?: IntFilter<"PaymentSchedule"> | number
    dueDate?: DateTimeFilter<"PaymentSchedule"> | Date | string
  }

  export type LocationCreateWithoutPaymentsInput = {
    name: string
    address: string
    contracts?: ContractCreateNestedManyWithoutLocationInput
    invoices?: InvoiceCreateNestedManyWithoutLocationInput
    keys?: KeyCreateNestedManyWithoutLocationInput
    manager: UserCreateNestedOneWithoutLocationsInput
    PaymentSchedule?: PaymentScheduleCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutPaymentsInput = {
    id?: number
    name: string
    address: string
    managerId: number
    contracts?: ContractUncheckedCreateNestedManyWithoutLocationInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutLocationInput
    keys?: KeyUncheckedCreateNestedManyWithoutLocationInput
    PaymentSchedule?: PaymentScheduleUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutPaymentsInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutPaymentsInput, LocationUncheckedCreateWithoutPaymentsInput>
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
    contracts?: ContractUpdateManyWithoutLocationNestedInput
    invoices?: InvoiceUpdateManyWithoutLocationNestedInput
    keys?: KeyUpdateManyWithoutLocationNestedInput
    manager?: UserUpdateOneRequiredWithoutLocationsNestedInput
    PaymentSchedule?: PaymentScheduleUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    managerId?: IntFieldUpdateOperationsInput | number
    contracts?: ContractUncheckedUpdateManyWithoutLocationNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutLocationNestedInput
    keys?: KeyUncheckedUpdateManyWithoutLocationNestedInput
    PaymentSchedule?: PaymentScheduleUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationCreateWithoutInvoicesInput = {
    name: string
    address: string
    contracts?: ContractCreateNestedManyWithoutLocationInput
    keys?: KeyCreateNestedManyWithoutLocationInput
    manager: UserCreateNestedOneWithoutLocationsInput
    payments?: PaymentCreateNestedManyWithoutLocationInput
    PaymentSchedule?: PaymentScheduleCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutInvoicesInput = {
    id?: number
    name: string
    address: string
    managerId: number
    contracts?: ContractUncheckedCreateNestedManyWithoutLocationInput
    keys?: KeyUncheckedCreateNestedManyWithoutLocationInput
    payments?: PaymentUncheckedCreateNestedManyWithoutLocationInput
    PaymentSchedule?: PaymentScheduleUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutInvoicesInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutInvoicesInput, LocationUncheckedCreateWithoutInvoicesInput>
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
    contracts?: ContractUpdateManyWithoutLocationNestedInput
    keys?: KeyUpdateManyWithoutLocationNestedInput
    manager?: UserUpdateOneRequiredWithoutLocationsNestedInput
    payments?: PaymentUpdateManyWithoutLocationNestedInput
    PaymentSchedule?: PaymentScheduleUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutInvoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    managerId?: IntFieldUpdateOperationsInput | number
    contracts?: ContractUncheckedUpdateManyWithoutLocationNestedInput
    keys?: KeyUncheckedUpdateManyWithoutLocationNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutLocationNestedInput
    PaymentSchedule?: PaymentScheduleUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationCreateWithoutPaymentScheduleInput = {
    name: string
    address: string
    contracts?: ContractCreateNestedManyWithoutLocationInput
    invoices?: InvoiceCreateNestedManyWithoutLocationInput
    keys?: KeyCreateNestedManyWithoutLocationInput
    manager: UserCreateNestedOneWithoutLocationsInput
    payments?: PaymentCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutPaymentScheduleInput = {
    id?: number
    name: string
    address: string
    managerId: number
    contracts?: ContractUncheckedCreateNestedManyWithoutLocationInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutLocationInput
    keys?: KeyUncheckedCreateNestedManyWithoutLocationInput
    payments?: PaymentUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutPaymentScheduleInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutPaymentScheduleInput, LocationUncheckedCreateWithoutPaymentScheduleInput>
  }

  export type LocationUpsertWithoutPaymentScheduleInput = {
    update: XOR<LocationUpdateWithoutPaymentScheduleInput, LocationUncheckedUpdateWithoutPaymentScheduleInput>
    create: XOR<LocationCreateWithoutPaymentScheduleInput, LocationUncheckedCreateWithoutPaymentScheduleInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutPaymentScheduleInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutPaymentScheduleInput, LocationUncheckedUpdateWithoutPaymentScheduleInput>
  }

  export type LocationUpdateWithoutPaymentScheduleInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contracts?: ContractUpdateManyWithoutLocationNestedInput
    invoices?: InvoiceUpdateManyWithoutLocationNestedInput
    keys?: KeyUpdateManyWithoutLocationNestedInput
    manager?: UserUpdateOneRequiredWithoutLocationsNestedInput
    payments?: PaymentUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutPaymentScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    managerId?: IntFieldUpdateOperationsInput | number
    contracts?: ContractUncheckedUpdateManyWithoutLocationNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutLocationNestedInput
    keys?: KeyUncheckedUpdateManyWithoutLocationNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationCreateWithoutKeysInput = {
    name: string
    address: string
    contracts?: ContractCreateNestedManyWithoutLocationInput
    invoices?: InvoiceCreateNestedManyWithoutLocationInput
    manager: UserCreateNestedOneWithoutLocationsInput
    payments?: PaymentCreateNestedManyWithoutLocationInput
    PaymentSchedule?: PaymentScheduleCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutKeysInput = {
    id?: number
    name: string
    address: string
    managerId: number
    contracts?: ContractUncheckedCreateNestedManyWithoutLocationInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutLocationInput
    payments?: PaymentUncheckedCreateNestedManyWithoutLocationInput
    PaymentSchedule?: PaymentScheduleUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutKeysInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutKeysInput, LocationUncheckedCreateWithoutKeysInput>
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
    contracts?: ContractUpdateManyWithoutLocationNestedInput
    invoices?: InvoiceUpdateManyWithoutLocationNestedInput
    manager?: UserUpdateOneRequiredWithoutLocationsNestedInput
    payments?: PaymentUpdateManyWithoutLocationNestedInput
    PaymentSchedule?: PaymentScheduleUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutKeysInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    managerId?: IntFieldUpdateOperationsInput | number
    contracts?: ContractUncheckedUpdateManyWithoutLocationNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutLocationNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutLocationNestedInput
    PaymentSchedule?: PaymentScheduleUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationCreateWithoutContractsInput = {
    name: string
    address: string
    invoices?: InvoiceCreateNestedManyWithoutLocationInput
    keys?: KeyCreateNestedManyWithoutLocationInput
    manager: UserCreateNestedOneWithoutLocationsInput
    payments?: PaymentCreateNestedManyWithoutLocationInput
    PaymentSchedule?: PaymentScheduleCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutContractsInput = {
    id?: number
    name: string
    address: string
    managerId: number
    invoices?: InvoiceUncheckedCreateNestedManyWithoutLocationInput
    keys?: KeyUncheckedCreateNestedManyWithoutLocationInput
    payments?: PaymentUncheckedCreateNestedManyWithoutLocationInput
    PaymentSchedule?: PaymentScheduleUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutContractsInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutContractsInput, LocationUncheckedCreateWithoutContractsInput>
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
    invoices?: InvoiceUpdateManyWithoutLocationNestedInput
    keys?: KeyUpdateManyWithoutLocationNestedInput
    manager?: UserUpdateOneRequiredWithoutLocationsNestedInput
    payments?: PaymentUpdateManyWithoutLocationNestedInput
    PaymentSchedule?: PaymentScheduleUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutContractsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    managerId?: IntFieldUpdateOperationsInput | number
    invoices?: InvoiceUncheckedUpdateManyWithoutLocationNestedInput
    keys?: KeyUncheckedUpdateManyWithoutLocationNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutLocationNestedInput
    PaymentSchedule?: PaymentScheduleUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationCreateManyManagerInput = {
    id?: number
    name: string
    address: string
  }

  export type LocationUpdateWithoutManagerInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contracts?: ContractUpdateManyWithoutLocationNestedInput
    invoices?: InvoiceUpdateManyWithoutLocationNestedInput
    keys?: KeyUpdateManyWithoutLocationNestedInput
    payments?: PaymentUpdateManyWithoutLocationNestedInput
    PaymentSchedule?: PaymentScheduleUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutManagerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contracts?: ContractUncheckedUpdateManyWithoutLocationNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutLocationNestedInput
    keys?: KeyUncheckedUpdateManyWithoutLocationNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutLocationNestedInput
    PaymentSchedule?: PaymentScheduleUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateManyWithoutManagerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type ContractCreateManyLocationInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    renewed: boolean
    cancelled: boolean
  }

  export type InvoiceCreateManyLocationInput = {
    id?: number
    date: Date | string
  }

  export type KeyCreateManyLocationInput = {
    id?: number
    issueDate: Date | string
    returnDate: Date | string
  }

  export type PaymentCreateManyLocationInput = {
    id?: number
    date: Date | string
    amount: number
    paymentMethod: string
  }

  export type PaymentScheduleCreateManyLocationInput = {
    id?: number
    dueDate: Date | string
  }

  export type ContractUpdateWithoutLocationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    renewed?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ContractUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    renewed?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ContractUncheckedUpdateManyWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    renewed?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InvoiceUpdateWithoutLocationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeyUpdateWithoutLocationInput = {
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeyUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeyUncheckedUpdateManyWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutLocationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentUncheckedUpdateManyWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentScheduleUpdateWithoutLocationInput = {
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentScheduleUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentScheduleUncheckedUpdateManyWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
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
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LocationDefaultArgs instead
     */
    export type LocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LocationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentDefaultArgs instead
     */
    export type PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InvoiceDefaultArgs instead
     */
    export type InvoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InvoiceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentScheduleDefaultArgs instead
     */
    export type PaymentScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentScheduleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KeyDefaultArgs instead
     */
    export type KeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KeyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContractDefaultArgs instead
     */
    export type ContractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContractDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PriceAdjustmentDefaultArgs instead
     */
    export type PriceAdjustmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PriceAdjustmentDefaultArgs<ExtArgs>

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