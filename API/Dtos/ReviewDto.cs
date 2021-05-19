using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Dtos
{
    public class ReviewDto
    {
        public string? Comment { get; set; }
        public int Rating { get; set; }
        public int ProductId { get; set; }
        public string UserEmail { get; set; }
    }
}
