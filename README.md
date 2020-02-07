# Api de mutation

### Url de Api
 http://dnaserver-e6327.appspot.com/
 Uso de App engine de google


## POST /mutation
Servicio para verificar si una cadena de ADN tiene o no tiene una mutacion.

### BODY

> {
  “dna”: ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
  }

El servicio puede darte tres tipos de respuesta

> {
      "msg": "Se proceso correctamente",
      "hasMutation": true,
      "status": 200
  }

Si la cadena de ADN tiene mutación.

> {
      "msg": "Se proceso correctamente",
      "hasMutation": true,
      "status": 403
  }

Si la cadena de ADN no tiene mutación

> {
      "error": "No se mando ninguna cadena",
      "hasError": true,
      "status": 500
  }

Si no se mando ninguna cadena en en el body

## GET /stats

Servicio para obtener las estadisticas de las consultas del anterio servicio.
Obteniendo la siguiente respuesta 

> {
      "count_mutations": 2,
      "count_no_mutation": 2,
      "ratio": 1
  }

Donde count_mutations es un contador de las cadenas que tienen mutacion.

Donde count_no_mutation es un contador de las cadenas que no tienen mutaciones

Donde ratio es el indicador de mutaciones contra no mutaciones