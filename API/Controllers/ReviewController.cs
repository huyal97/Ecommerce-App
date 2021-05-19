using API.Dtos;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    public class ReviewController : BaseApiController
    {
        
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;
        public ReviewController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IReadOnlyList<Review>>> GetReviewTypes(int id)
        {
            var spec = new ReviewWithProductIdSpecificication(id);
            return Ok(_mapper.Map<IReadOnlyList<ReviewDto>>(await _unitOfWork.Repository<Review>().ListAsync(spec)));
            
        }
        [HttpPost]
        public async Task<ActionResult<IReadOnlyList<Review>>> CreateReview(ReviewDto reviewDto)
        {
            var review = new Review
            {
                Comment = reviewDto.Comment,
                Rating = reviewDto.Rating,
                ProductId=reviewDto.ProductId,
                UserEmail=reviewDto.UserEmail,
            };

            _unitOfWork.Repository<Review>().Add(review);
            var result = await _unitOfWork.Complete();

            if (result <= 0) return Ok();
            
            return Conflict(review);

        }
    }
}
