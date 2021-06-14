using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos;
using API.Errors;
using API.Helpers;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Infrastructure.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ProductsController : BaseApiController
    {

        private readonly IUnitOfWork _unitOfWork;

        private readonly IMapper _mapper;

        public ProductsController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _mapper = mapper;
           
            _unitOfWork = unitOfWork;
           
        }

        [HttpGet]
        public async Task<ActionResult<Pagination<ProductToReturnDto>>> GetProducts(
            [FromQuery]ProductSpecParams productParams)
        {
            var spec = new ProductsWithTypesAndBrandsSpecification(productParams);

            var countSpec = new ProductWithFiltersForCountSpecificication(productParams);

            var totalItems = await _unitOfWork.Repository<Product>().CountAsync(countSpec);

            var products = await _unitOfWork.Repository<Product>().ListAsync(spec);

            var data = _mapper
                .Map<IReadOnlyList<Product>, IReadOnlyList<ProductToReturnDto>>(products);

            return Ok(new Pagination<ProductToReturnDto>(productParams.PageIndex, productParams.PageSize, totalItems, data));
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ProductToReturnDto>> GetProduct(int id)
        {
            
            var spec = new ProductsWithTypesAndBrandsSpecification(id);

            var product = await _unitOfWork.Repository<Product>().GetEntityWithSpec(spec);

            if (product == null) return NotFound(new ApiResponse(404));

            return _mapper.Map<Product, ProductToReturnDto>(product);
        }

        [HttpPost]
        public async Task<ActionResult<IReadOnlyList<Product>>> CreateProduct(ProductToReturnDto product)
        {
            
            var data = new Product
            {
                Name = product.Name,
                Description = product.Description,
                Price = product.Price,
                PictureUrl = product.PictureUrl,
                ProductBrandId = Int32.Parse(product.ProductBrand),
                ProductTypeId = Int32.Parse(product.ProductType),
            };

            _unitOfWork.Repository<Product>().Add(data);
            var result = await _unitOfWork.Complete();

            if (result <= 0) return Conflict(product);

            return Ok();

        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<Product>> DeleteProduct(int id)
        {
            var product = new Product { Id = id };

            _unitOfWork.Repository<Product>().Delete(product);
            var result = await _unitOfWork.Complete();

            if (result <= 0) return Conflict(product);

            return Ok();

        }
        [HttpPut("{id}")]
        public async Task<ActionResult<Product>> UpdateProduct(ProductToReturnDto product,int id)
        {

            var data = new Product
            {
                Id = id,
                Name = product.Name,
                Description = product.Description,
                Price = product.Price,
                PictureUrl = product.PictureUrl,
                ProductBrandId = Int32.Parse(product.ProductBrand),
                ProductTypeId = Int32.Parse(product.ProductType),
            };
            

            _unitOfWork.Repository<Product>().Update(data);
            var result = await _unitOfWork.Complete();

            if (result <= 0) return Conflict(product);

            return Ok();

        }




        [HttpGet("brands")]
        public async Task<ActionResult<IReadOnlyList<ProductBrand>>> GetProductBrands()
        {
            return Ok(await _unitOfWork.Repository<ProductBrand>().ListAllAsync());
        }

        [HttpGet("types")]
        public async Task<ActionResult<IReadOnlyList<ProductType>>> GetProductTypes()
        {
            return Ok(await _unitOfWork.Repository<ProductType>().ListAllAsync());
        }
        
    }
}