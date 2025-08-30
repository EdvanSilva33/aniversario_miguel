// AOS.init();

// const aniversario = new Date('sept 20, 2025 18:00:00');
// const diaAniversario = aniversario.getTime();

// const contador = setInterval(() => {
//     const diaAtual = new Date();
//     const tempoReal = diaAtual.getTime();

//     const marcoTemporal = diaAniversario - tempoReal;

//     const diaEmMs = 1000 * 60 * 60 * 24;
//     const horaEmMs = 1000 * 60 * 60;
//     const minutosEms = 1000 * 60;


//     const diaDoAniversario = Math.floor(marcoTemporal / diaEmMs);
//     const horaDoAniversario = Math.floor((marcoTemporal % diaEmMs) / horaEmMs);
//     const mintutosDoAniversario = Math.floor((marcoTemporal % horaEmMs) / minutosEms);
//     const segundosDoAniversario = Math.floor((marcoTemporal % minutosEms) / 1000);

//     document.getElementById('contagem').innerHTML = `${diaDoAniversario} dia ${horaDoAniversario}hs ${mintutosDoAniversario}Min ${segundosDoAniversario}s`;
//     if (marcoTemporal < 0) {
//         clearInterval(contador);
//         document.getElementById('contagem').innerHTML = 'Acabou o Aniversário';

//     }

// }, 1000);


// //finalizando contador // ========= AOS =========
  AOS.init();

  // ========= CONTADOR =========
  (function () {
    const aniversario = new Date('Sept 20, 2025 18:00:00');
    const diaAniversario = aniversario.getTime();

    const contador = setInterval(() => {
      const diaAtual = new Date();
      const tempoReal = diaAtual.getTime();

      const marcoTemporal = diaAniversario - tempoReal;

      const diaEmMs = 1000 * 60 * 60 * 24;
      const horaEmMs = 1000 * 60 * 60;
      const minutosEms = 1000 * 60;

      const diaDoAniversario = Math.floor(marcoTemporal / diaEmMs);
      const horaDoAniversario = Math.floor((marcoTemporal % diaEmMs) / horaEmMs);
      const minutosDoAniversario = Math.floor((marcoTemporal % horaEmMs) / minutosEms);
      const segundosDoAniversario = Math.floor((marcoTemporal % minutosEms) / 1000);

      document.getElementById('contagem').innerHTML =
        `${diaDoAniversario} dia ${horaDoAniversario}hs ${minutosDoAniversario}min ${segundosDoAniversario}s`;

      if (marcoTemporal < 0) {
        clearInterval(contador);
        document.getElementById('contagem').innerHTML = 'Acabou o Aniversário 🎉';
      }
    }, 1000);
  })();

  // ========= ÁUDIO =========
  (function () {
    const audio = document.getElementById("bg-music");

    // Tenta autoplay
    window.addEventListener("load", () => {
      audio.muted = false;
      audio.play().catch(() => {
        console.log("Autoplay bloqueado. Esperando interação do usuário...");
      });
    });

    // Fallback: toca no primeiro clique
    document.addEventListener("click", () => {
      if (audio.paused) {
        audio.muted = false;
        audio.play();
      }
    }, { once: true });
  })();
