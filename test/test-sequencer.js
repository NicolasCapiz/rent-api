class TestSequencer {
  sort(tests) {
    const copy = Array.from(tests);
    return copy.sort((testA, testB) => {
      // Personaliza el orden según tus necesidades
      return testA.path.localeCompare(testB.path);
    });
  }

  cacheResults(tests, results, hashes) {
    // Jest espera que el objeto TestSequencer tenga un método cacheResults.
    // No necesitamos realizar ninguna acción aquí, así que simplemente devolvemos los argumentos.
    return { tests, results, hashes };
  }
}

module.exports = TestSequencer;
