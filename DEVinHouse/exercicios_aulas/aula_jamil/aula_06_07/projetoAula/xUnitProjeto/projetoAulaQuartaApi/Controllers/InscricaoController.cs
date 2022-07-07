using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace projetoAulaQuartaApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InscricaoController : ControllerBase
    {
        [HttpGet]
        public ActionResult<string> Get()
        {
            return "ola mundo!";
        }

        [HttpPost]
        public ActionResult<string> Post()
        {
            return "Sucesso";
        }

        [HttpPut]
        public ActionResult<string> Delete()
        {
            return "Delete";
        }
    }
}
