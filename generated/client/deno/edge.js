const exports = {}
Object.defineProperty(exports, "__esModule", { value: true });

import {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum
} from '.././runtime/edge-esm.js'

const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.5.0
 * Query Engine version: 0362da9eebca54d94c8ef5edd3b2e90af99ba452
 */
Prisma.prismaVersion = {
  client: "4.5.0",
  engine: "0362da9eebca54d94c8ef5edd3b2e90af99ba452"
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
Prisma.validator = () => (val) => val

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


const dirname = '/'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.JsonNullValueFilter = makeEnum({
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
});

exports.Prisma.JsonNullValueInput = makeEnum({
  JsonNull: Prisma.JsonNull
});

exports.Prisma.LogScalarFieldEnum = makeEnum({
  id: 'id',
  level: 'level',
  message: 'message',
  meta: 'meta'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});
exports.Level = makeEnum({
  Info: 'Info',
  Warn: 'Warn',
  Error: 'Error'
});

exports.Prisma.ModelName = makeEnum({
  Log: 'Log'
});

const compressedDMMF = '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='
const decompressedDMMF = decompressFromBase64(compressedDMMF)
// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(decompressedDMMF)
exports.Prisma.dmmf = JSON.parse(decompressedDMMF)

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
      "value": "/Users/tasinishmam/my-code/code-and-projects/work/learning-personal/deno/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [
      "deno"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "4.5.0",
  "engineVersion": "0362da9eebca54d94c8ef5edd3b2e90af99ba452",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "dataProxy": true
}
config.document = dmmf
config.dirname = dirname

config.inlineSchema = 'Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgcHJldmlld0ZlYXR1cmVzID0gWyJkZW5vIl0KICBvdXRwdXQgICAgICAgICAgPSAiLi4vZ2VuZXJhdGVkL2NsaWVudCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQoKbW9kZWwgTG9nIHsKICBpZCAgICAgIEludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGxldmVsICAgTGV2ZWwKICBtZXNzYWdlIFN0cmluZwogIG1ldGEgICAgSnNvbgp9CgplbnVtIExldmVsIHsKICBJbmZvCiAgV2FybgogIEVycm9yCn0K'
config.inlineSchemaHash = '62791eff7a8086ecbbf5b5f9e91a64b2eff35be11ed657ad2b06234a928cb325'

config.inlineDatasources = {
  "db": {
    "url": {
      "fromEnvVar": "DATABASE_URL",
      "value": null
    }
  }
}

config.injectableEdgeEnv = {
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
}

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)
export { exports as default, Prisma, PrismaClient }

