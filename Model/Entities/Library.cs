using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace aspnetcorewithreact2.Model.Entities
{
    [Table("library")]
    public class Library
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string name { get; set; }
        [Required]
        public string address { get; set; }
        public string telephone { get; set; }
    }
}
