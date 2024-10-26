<template>
  <div class="container">
    <h1>BATMAN ALIAS BRUCE WAYNE</h1>
  </div>

  <div class="container width-3 height-4">
    <a href="https://www.dc.com/characters/batman" title="www.dccomics.com">
      <img src="../assets/batman.png" alt="batman con capucha" width="300" />
    </a>
  </div>

  <h2>¿Quien es Batman?</h2>
  <section>
    <p>
      Batman es la identidad secreta de Bruce Wayne, un empresario
      multimillonario, galán y filántropo. Presenció el asesinato de sus padres
      cuando era niño, lo marcó profundamente y lo llevó a entrenarse en la
      perfección física e intelectual para ponerse un disfraz de murciélago con
      el fin de combatir el crimen. Batman trabaja en Ciudad Gótica, con la
      asistencia de varios personajes de apoyo, incluidos su compañero Robin y
      su mayordomo Alfred Pennyworth.
    </p>
  </section>
  <h2>¿Qué habilidades tiene?</h2>
  <p>
    Batman a diferencia de otros super heroes no posee ninguna habilidad
    especial o sobrehumana. si no que posee entrenamiento en diferentes areas
    cientificas y de artes marciales. entre las que se destacan mas se
    encuentran las siguientes:
  </p>
  <table>
    <tr>
      <th>Entrenador</th>
      <th>Habilidad</th>
    </tr>
    <tr>
      <td>Chu Chin Li</td>
      <td>técnicas curativas y kung fu que le ayudaron a enfocar su mente</td>
      <td><img src="../assets/img/chun chin li.jpeg" alt="chun chin li" /></td>
    </tr>
    <tr>
      <td>Tsunetomo</td>
      <td>técnicas para soportar el dolor mediante la concentración</td>
      <td>
        <img src="../assets/img/tsunetomo.png" alt="Tsunetomo" width="250" />
      </td>
    </tr>
    <tr>
      <td>Harvey Harris</td>
      <td>
        trabajo detectivesco urbano, seguir pistas, buscar a los testigos e
        informantes entre vagabundos y criminales
      </td>
      <td><img src="../assets/img/harvey harrys.jpeg" alt="Harvey Harrys" /></td>
    </tr>
    <tr>
      <td>The Shaman</td>
      <td>
        técnicas de autosugestión, no solo a usar una máscara, sino a “ser la
        máscara”, cambiar al nivel espiritual y ser más que un hombre.
      </td>
      <td><img src="../assets/img/the shaman.jpeg" alt="The Shaman" /></td>
    </tr>
  </table>
  <h2>Bat-Familia</h2>
  <p>
    La familia de Batman funciona como una red de superhéroes de mentalidad
    similar que operan en y alrededor de Gotham City, con Batman a la cabeza. El
    grupo por lo general se ven interactuando unos con otros y ayudar a cada uno
    de los caso
  </p>
  <img src="../assets/img/bat-familia.jpg" alt="Bat-Familia" />
  <ul>
    <h3>¿Quines integran la Bat-Familia?</h3>
    <li>Batman (Bruce Wayne)</li>
    <li>Nightwing (Dick Grayson)</li>
    <li>Batgirl (Barbara Gordon)</li>
    <li>Red Hood (Jason Todd)</li>
    <li>Batwoman (Katherine Kane)</li>
    <li>Catwoman (Selina Kyle)</li>
    <li>Batwing (Luke Fox)</li>
    <li>Penny-One (Alfred Pennyworth)</li>
    <li>Titus</li>
    <li>Robin (Damian Wayne)</li>
  </ul>
  <footer>Derechos reservados de DC Comics</footer>
</template>

<script setup>
import { ref } from "vue";

// Definir variables reactivas
const state = ref({});
</script>

<style scoped></style>
