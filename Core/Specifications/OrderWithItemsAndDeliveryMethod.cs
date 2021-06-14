using Core.Entities.OrderAggregate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specifications
{
    public class OrderWithItemsAndDeliveryMethod : BaseSpecification<Order>
    {
        public OrderWithItemsAndDeliveryMethod() : base()
        {
            AddInclude(o => o.OrderItems);
            AddInclude(o => o.DeliveryMethod);
        }
        
    }
}
