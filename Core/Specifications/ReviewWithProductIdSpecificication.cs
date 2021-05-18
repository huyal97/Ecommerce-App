﻿using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specifications
{
    public class ReviewWithProductIdSpecificication : BaseSpecification<Review>
    {
        public ReviewWithProductIdSpecificication(int id)
           : base(o => o.ProductId == id)
        {
        }
    }
}
