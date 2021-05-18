using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class Review : BaseEntity
    {
        public string Comment { get; set; }
        public int Rating { get; set; }
        public Product Product { get; set; }
        public int ProductId { get; set; }
        public string UserEmail { get; set; }
    }
}
