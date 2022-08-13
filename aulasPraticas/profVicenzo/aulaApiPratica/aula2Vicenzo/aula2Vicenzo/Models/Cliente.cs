using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace aula2Vicenzo.Models
{
    public class Cliente
    {

        public int Id { get; internal set; }
        [Required(ErrorMessage ="Nome obrigatório")]
        [StringLength(40)]
        [DisplayName("Nome completo")]
        public string Nome { get; set; }
        [Range(minimum:1, maximum:120)]
        public int Idade { get; set; }
        



    }
}
