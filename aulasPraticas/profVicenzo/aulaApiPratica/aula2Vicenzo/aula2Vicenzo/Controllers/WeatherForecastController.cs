using aula2Vicenzo.Models;
using Microsoft.AspNetCore.Mvc;

namespace aula2Vicenzo.Controllers
{
    //  http://localhost:5223/Cliente
    [ApiController]
    [Route("[controller]")]
    public class ClienteController : ControllerBase
    {
        private static int _idIndice = 1;
        private static List<Cliente> _cliente = new();

        [HttpGet]
        public List<Cliente> Get()
        {
            return _cliente;
        }

        [HttpPost]
        public Cliente Post(
            [FromBody] Cliente body
            )
        {
            body.Id = _idIndice;
            _idIndice += 1;

            _cliente.Add(body);
            return body;
        }
        //Clientes/1
        [HttpPut("{idCliente: int}")]
        public Cliente Put(
            [FromBody] Cliente body,
            [FromRoute] int idCliente
            )
        {
            var clienteh = _cliente.FirstOrDefault(c => c.Id == idCliente);
            clienteh.Nome = body.Nome;
            clienteh.Idade = body.Idade;

            return clienteh;

            //commit caso fosse salvar
        }

        
        
    }
}